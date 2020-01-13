import React from 'react';
import { StyleSheet,  Dimensions, TouchableOpacity, FlatList, AsyncStorage  } from 'react-native';
import { Block, theme,Button as GaButton, Text } from "galio-framework";
import { DetailCard } from '../components';
import { timeofday, nowTheme } from '../constants';
import { string, number } from 'prop-types';

const { width, height } = Dimensions.get("screen");
class Schedule extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            vehicle: null,
            jobType: null,
          dateList: [],
          Selectedservice: null,
          scheduledate: null,
          currentDate: new Date()
        }
        this.refreshDateList();
    }

    refreshDateList = () => {
        let a = 1;
        this.weekDates(this.state.currentDate).map((date) => {
            
            for(var i = 0; i < timeofday.length; i++) {
                let x = null;
                x = {
                    id: (this.Day(new Date(date).getDay()) + ' ' + timeofday[i].name).toString(),
                    dateTitle: new Date(date).toLocaleDateString(),
                    TimeDay: this.Day(new Date(date).getDay()) + ' ' + timeofday[i].name,
                    time: timeofday[i].time.map((item) => { return { text: item.text, value: new Date(new Date(date).toLocaleDateString() + ' ' + item.value + ':00')} }),
                    visible: false
                    }
                    a++
                    this.state.dateList.push(x);
            }
        })
        //this.setState({dateList: this.state.dateList})
    }

    Day = (no) => {
        let result = ''
        switch(no){
            case 1:
                result = 'Mon' 
            break;
            case 2:
                result = 'Tue'
            break;
            case 3:
                result = 'Wed'
            break;
            case 4:
                result = 'Thur'
            break;
            case 5:
                result = 'Fri'
            break;
        }

        return result;
    }

    weekDates = (date) => {
        let result = [];
        var day = new Date(date).getDay() || 7;
        if( day !== 1 )
            date.setHours(-24 * (day - 1));
        
        for(var i = 0; i < 5; i++){
            if(i == 0){
                result.push(date);
            } else {
                let newDate = new Date(date)
                result.push(newDate.setDate(new Date(date).getDate() + i));
            }
            
        }

        return result;
    }

    saveandnavigate = async () => {
        let Params = JSON.parse(await AsyncStorage.getItem('Params'));
        Params.scheduledate = this.state.scheduledate;
        await AsyncStorage.mergeItem('Params', JSON.stringify(Params), () => {
            this.setState({
                vehicle: null,
                jobType: null,
              Selectedservice: null,
              scheduledate: null,
              currentDate: new Date()
            });
            this.refreshDateList();
        this.props.navigation.navigate('AppointmentConfirmation');
        });
    }

    prev = () => {
        let newDate = new Date(this.state.currentDate)
        this.setState({currentDate: newDate.setDate(newDate.getDate() - 7)})
        let a = 1;
        var temp = []
        this.weekDates(newDate).map((date) => {
            
            for(var i = 0; i < timeofday.length; i++) {
                let x = null;
                x = {
                    id: (a).toString(),
                    dateTitle: new Date(date).toLocaleDateString(),
                    TimeDay: this.Day(new Date(date).getDay()) + ' ' + timeofday[i].name,
                    time: timeofday[i].time.map((item) => { return { text: item.text, value: new Date(new Date(date).toLocaleDateString() + ' ' + item.value + ':00')} }),
                    visible: false
                    }
                    a++
                    temp.push(x);
            }
        })
        this.setState({dateList: temp})
    }
    next = () => {
        let newDate = new Date(this.state.currentDate)
        this.setState({currentDate: newDate.setDate(newDate.getDate() + 7)})
        let a = 1;
        var temp = []
        this.weekDates(newDate).map((date) => {
            
            for(var i = 0; i < timeofday.length; i++) {
                let x = null;
                x = {
                    id: (a).toString(),
                    dateTitle: new Date(date).toLocaleDateString(),
                    TimeDay: this.Day(new Date(date).getDay()) + ' ' + timeofday[i].name,
                    time: timeofday[i].time.map((item) => { return { text: item.text, value: new Date(date).toLocaleDateString() + ' ' + item.value} }),
                    visible: false
                    }
                    a++
                    temp.push(x);
            }
        })
        this.setState({dateList: temp})
    }
    press = (hey) => {
        this.setState({scheduledate: new Date(hey.value)})
      }

    toggle = (hey) => {
        var data = this.state.dateList.map((item) => {
          if (item.id === hey.id) {
            item.visible = true
          } else {
            item.visible = false
          }
          return item;
        })
        this.setState({dateList: data})
        
      }

    renderTime = (time, visible) => {
        return visible ? (<FlatList data={time} renderItem={({item}) => (
            <TouchableOpacity style={{
                borderBottomWidth: 1,
                borderStyle: 'solid',
                borderColor: '#ecf0f1'
              }} onPress={() => {
                this.press(item)
              }}>
            <Block style={{width: 50, marginRight: 5, marginLeft: 5, height: 30, backgroundColor: nowTheme.COLORS.FACEBOOK, justifyContent: 'center'}}>
            <Text style={{color: nowTheme.COLORS.WHITE, textAlign: 'center'}}>{item.text}</Text>
            </Block>
            </TouchableOpacity>
        )} numColumns={6} keyExtractor={(item, index) => index.toString()} />) : (<Block />)
    }

    renderTimerow = (time, index) => {
        let result = []
        for(let i=0; i<5; i++){
            let item = (
                <TouchableOpacity style={{
                    borderBottomWidth: 1,
                    borderStyle: 'solid',
                    borderColor: '#ecf0f1'
                  }} onPress={() => {
                    this.press(time[index + i])
                  }}>
                <Block style={{width: 100, marginRight: 5, marginLeft: 5, height: 50, backgrounColor: 'blue'}}>
                <Text>{time[index + i].text}</Text>
                </Block>
                </TouchableOpacity>
            )

            result.push(item);
        }

        return result;
    }

    renderList = () => {
        return (
            <Block style={{ marginBottom: 5}}>
        <Block height={(height * 0.1) - nowTheme.SIZES.BASE} width={width} row>
        <Block width={width * 0.7} style={{alignItems: 'flex-start'}}>
                        <GaButton
                            shadowless
                            style={styles.loginbutton}
                            color={nowTheme.COLORS.PRIMARY}
                            disabled={(this.state.currentDate == new Date())}
                            onPress={() => this.prev()}
                        >
                            <Text
                                style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                                color={theme.COLORS.WHITE}
                            >
                                Previous Week
                            </Text>
                        </GaButton>
                      </Block>
                      <Block width={width * 0.3}  style={{alignItems: 'flex-end'}}>
                        <GaButton
                            shadowless
                            style={styles.loginbutton}
                            color={nowTheme.COLORS.PRIMARY}
                            onPress={() => this.next()}
                        >
                            <Text
                                style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                                color={theme.COLORS.WHITE}
                            >
                                Next Week
                            </Text>
                        </GaButton>
                      </Block>
        </Block>
        <Block height={(height * 0.7) - nowTheme.SIZES.BASE}>
        <FlatList data={this.state.dateList} keyExtractor={(item, index) => index.toString()} extraData={this.state} ListHeaderComponent={null} renderItem={({item}) => {
    return (
    <Block>
        <Block row>
            <GaButton
                            shadowless
                            style={styles.timebutton}
                            color={nowTheme.COLORS.PRIMARY}
                            onPress={() => this.toggle(item)}
                        >
                            <Text
                                style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                                color={theme.COLORS.WHITE}
                            >
                                {item.TimeDay}
                            </Text>
                        </GaButton>
                        <Block style={{justifyContent: 'center', paddingLeft: 20}}>
                        <Text
                                style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                            >
                                {item.dateTitle}
                            </Text>
                        </Block>
        </Block>
        <Block row style={{paddingTop: 5}}>
        {this.renderTime(item.time, item.visible)}
        </Block>
    </Block>    
    )
  }}/>
        </Block>
        </Block>
        )
    }

    renderDetail = () => {
        return (<Block style={{ marginTop: 20}} height={(height * 0.2) - nowTheme.SIZES.BASE}>
            <DetailCard Key="Schedule Date " Value={new Date(this.state.scheduledate).toLocaleDateString() + ' ' + new Date(this.state.scheduledate).toLocaleTimeString()} />
            <Block width={width * 0.2} center>
                                <GaButton
                                    shadowless
                                    style={styles.loginbutton}
                                    color={nowTheme.COLORS.PRIMARY}
                                    onPress={() => this.setState({scheduledate: null})}
                                >
                                    <Text
                                        style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                                        color={theme.COLORS.WHITE}
                                    >
                                        CHANGE DATE
                                    </Text>
                                </GaButton>
                              </Block>
        </Block>)
    }

    render () {
        this.refreshDateList();
        return  (
            <Block style={{ marginBottom: 5 }} >
                {((this.state.scheduledate == null) ? this.renderList() : this.renderDetail())} 
                <Block width={width * 0.2} height={(height * 0.1) - nowTheme.SIZES.BASE} center>
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
                                        REVIEW
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
      },
      timebutton: {
        width: ((width * 0.6)),
        height: nowTheme.SIZES.BASE * 3,
        marginTop: 10,
        shadowRadius: 0,
        shadowOpacity: 0
      }
})


export default Schedule
