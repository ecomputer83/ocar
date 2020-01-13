import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform, AsyncStorage } from 'react-native';
import { Block, Text, theme, Button } from 'galio-framework';

import {  DetailCard } from '../components';
import { Images, nowTheme } from '../constants';
import { HeaderHeight } from '../constants/utils';

const { width, height } = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 32) / 3;

export default class AppointmentConfirmation  extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicle :  null,
            jobType:  null,
          Selectedservice:  null,
      scheduledate:  null
    }
  }

  componentDidMount(){
    this.refreshData();
  }

  refreshData = () => {
    AsyncStorage.getItem('Params', (err, result) => {
      var param = JSON.parse(result);
      if(param != null){
      this.setState({ vehicle: JSON.parse(param.vehicle), jobType: param.jobType, Selectedservice: JSON.parse(param.service), scheduledate: param.scheduledate });
      }
    });
        
    
  }

  done = () => {
    alert("Appointment booked successfully!!!");
    AsyncStorage.removeItem('Params', () => {
      this.props.navigation.navigate('Home');
    })
    
  }
  render() {
    this.refreshData();
  return (
    <Block style={{
      flex: 1,
      flexDirection: 'column',
    }} >
      <Block />
      <Block flex={0.8} style={{ padding: theme.SIZES.BASE, marginTop: 20}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {(this.state.jobType != null) ? 
          (<Block flex style={{ marginTop: 5 }}>
            <DetailCard Key="Job Type" Value={this.state.jobType} />
            {(this.state.jobType == 'PMS' && this.state.Selectedservice != null) ? 
            (<DetailCard Key="Service" Value={this.state.Selectedservice.title} />) : (<Block />) }
            {(this.state.scheduledate != null) ? 
            (<DetailCard Key="Schedule Date" Value={new Date(this.state.scheduledate).toLocaleDateString() + ' ' + new Date(this.state.scheduledate).toLocaleTimeString()} />) : (<Block />)}
          </Block>) : (<Block />)}

          {(this.state.vehicle != null) ? 
          (<Block flex style={{ marginTop: 15 }}>
            <DetailCard Key="Vin (Chasis No)" Value={this.state.vehicle.vin} />
            <DetailCard Key="Year" Value={this.state.vehicle.year} />
            <DetailCard Key="Model" Value={this.state.vehicle.model} />
            <DetailCard Key="Reg. Number" Value={this.state.vehicle.regNo} />
            <DetailCard Key="Mileage" Value={this.state.vehicle.mileage} />
            <DetailCard Key="Last Service Date" Value={this.state.vehicle.serviceduedate} />
          </Block>) : (<Block />)}
        </ScrollView>
      </Block>

      <Block flex={0.05} >
          <Block
              
              style={{
                marginTop: 3.5,
                marginBottom: theme.SIZES.BASE * 10
              }}
            >
              <Block row>
              <Button
                shadowless
                style={styles.loginbutton}
                color={nowTheme.COLORS.PRIMARY}
                onPress={() => this.done()}
              >
                <Text
                  style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                  color={theme.COLORS.WHITE}
                >
                  Pay Now
                </Text>
              </Button>
              <Button
                shadowless
                style={styles.registerbutton}
                color={nowTheme.COLORS.PRIMARY}
                onPress={() => this.done()}
              >
                <Text
                  style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                  color={theme.COLORS.WHITE}
                >
                  Pay Later
                </Text>
              </Button>
              </Block>
            </Block>
            <Block>
                <Button
                  shadowless
                  style={styles.button}
                  color={nowTheme.COLORS.SECONDARY}
                  onPress={() => navigation.navigate('Home')}
                >
                  <Text
                    style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                    color={theme.COLORS.WHITE}
                  >
                    CANCEL
                  </Text>
                </Button>
              </Block>
      </Block>
    </Block>

  )
            }
}





const styles = StyleSheet.create({

  profileContainer: {
    width,
    height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width,
    height: height * 0.6
  },

  info: {
    marginTop: 30,
    paddingHorizontal: 10,
    height: height * 0.8
  },
  avatarContainer: {
    position: 'relative',
    marginTop: -80
  },
  nameInfo: {
    marginTop: 35
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
  social: {
    width: nowTheme.SIZES.BASE * 3,
    height: nowTheme.SIZES.BASE * 3,
    borderRadius: nowTheme.SIZES.BASE * 1.5,
    justifyContent: 'center',
    zIndex: 99,
    marginHorizontal: 5
  },
  
  loginbutton: {
    width: (width /2) - (theme.SIZES.BASE + 5),
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    marginRight: 10,
    marginLeft: 10
  },

  registerbutton: {
    width: (width /2) - (theme.SIZES.BASE + 5),
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    marginTop: 5
  },
});

