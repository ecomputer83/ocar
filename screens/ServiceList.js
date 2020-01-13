import React from 'react';
import { StyleSheet,  Dimensions, TouchableOpacity, FlatList, AsyncStorage  } from 'react-native';
import { Block, theme,Button as GaButton, Text } from "galio-framework";
import { Input, Icon } from '../components';
import { services, nowTheme } from '../constants';

const { width } = Dimensions.get("screen");
class ServiceList extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
          vehicle : null,
          jobType: null,
          serviceList: [],
          SelectedserviceList: null
        }

        this.state.serviceList = services.map((item) => {
            return {
                title: item.title,
                id: item.id,
                amount: item.amount,
                check: false
            }
        })
    }

    refreshData = () => {
      let data = services.map((item) => {
        return {
            title: item.title,
            id: item.id,
            amount: item.amount,
            check: false
        }
    })
    this.setState({serviceList: data})
    }

    press = (hey) => {
        this.state.serviceList.map((item) => {
          if (item.id === hey.id) {
            item.check = true
            this.setState({SelectedserviceList: item})
          }else {
            item.check = false
          }
        })
        this.setState({serviceList: this.state.serviceList})
        
      }

    saveandnavigate = async () => {
      let Params = JSON.parse(await AsyncStorage.getItem('Params'));
      Params.service = JSON.stringify(this.state.SelectedserviceList);
      await AsyncStorage.mergeItem('Params', JSON.stringify(Params), () => {
        this.setState({
          vehicle : null,
          jobType: null,
          SelectedserviceList: null
        });
        this.refreshData();
      this.props.navigation.navigate('Schedule');
      });
  }
    render () {
     
        return (
            <Block style={{ marginBottom: 5 }} >
                <Block>
                <FlatList data={this.state.serviceList} keyExtractor={item => item.id} extraData={this.state} ListHeaderComponent={null} renderItem={({item}) => {
            return <TouchableOpacity style={{
              flexDirection: 'row',
              padding: 10,
              borderBottomWidth: 1,
              borderStyle: 'solid',
              borderColor: '#ecf0f1'
            }} onPress={() => {
              this.press(item)
            }}>
             <Block style={{
                flex: 0.5,
                alignItems: 'flex-start',
                justifyContent: 'center'
              }}>
                {item.check
                  ? (
                    <Icon name="checksquare" family="AntDesign" size={30} color={nowTheme.COLORS.PRIMARY}></Icon>
                  )
                  : (
                    <Icon name="checksquareo" family="AntDesign" size={30} color={nowTheme.COLORS.SECONDARY}></Icon>
                  )}
              </Block>
              <Block style={{
                flex: 3.5,
                alignItems: 'flex-start',
                justifyContent: 'center'
              }}>
                 <Text>{`${item.title}`}</Text>
                 <Text style={{
                      fontWeight: 'bold'
                    }}>{item.amount}</Text>
              </Block>
              
            </TouchableOpacity>
          }}/>
                </Block>

                <Block width={width * 0.2} center>
                                <GaButton
                                    shadowless
                                    style={styles.loginbutton}
                                    color={nowTheme.COLORS.PRIMARY}
                                    onPress={() => this.saveandnavigate()}
                                >
                                    <Text
                                        style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                                        color={theme.COLORS.WHITE}
                                    >
                                        NEXT
                                    </Text>
                                </GaButton>
                              </Block>
            </Block>
        )
    }
}

const styles = StyleSheet.create({
    inputs: {
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 0
      },
      picker: {
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 0
      },
      loginbutton: {
        width: ((width * 0.8) /2),
        height: nowTheme.SIZES.BASE * 3,
        marginTop: 10,
        shadowRadius: 0,
        shadowOpacity: 0
      }
})


export default ServiceList