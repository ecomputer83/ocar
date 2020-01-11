import React from 'react';
import { StyleSheet,  Dimensions, TouchableOpacity, FlatList  } from 'react-native';
import { Block, theme,Button as GaButton, Text } from "galio-framework";
import { Input, Icon } from '../components';
import { services, nowTheme } from '../constants';
import { string, number } from 'prop-types';

const { width } = Dimensions.get("screen");
class ServiceList extends React.Component {

    constructor(props) {
        super(props)
        
        this.state = {
          vehicle : this.props.navigation.getParam('Vehicle', null),
          jobType: this.props.navigation.getParam('jobType', null),
          serviceList: [],
          SelectedserviceList: []
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

    press = (hey) => {
        this.state.serviceList.map((item) => {
          if (item.id === hey.id) {
            item.check = !item.check
            if (item.check === true) {
              this.state.SelectedserviceList.push(item);
            } else if (item.check === false) {
              const i = this.state.SelectedserviceList.indexOf(item)
              if (1 != -1) {
                this.state.SelectedserviceList.splice(i, 1)
                return this.state.SelectedserviceList
              }
            }
          }
        })
        this.setState({serviceList: this.state.serviceList})
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
                                    onPress={() => navigation.navigate('Login')}
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