import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform } from 'react-native';
import { Block, Text, theme, Button } from 'galio-framework';

import {  DetailCard } from '../components';
import { Images, nowTheme } from '../constants';
import { HeaderHeight } from '../constants/utils';

const { width, height } = Dimensions.get('screen');

const thumbMeasure = (width - 48 - 32) / 3;

export default class MyVehicleDetail  extends React.Component {
  render() {
  return (
    <Block style={{
      flex: 1,
      flexDirection: 'column',
    }} >
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
                onPress={() => navigation.navigate('Register')}
              >
                <Text
                  style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                  color={theme.COLORS.WHITE}
                >
                  Service History
                </Text>
              </Button>
              <Button
                shadowless
                style={styles.registerbutton}
                color={nowTheme.COLORS.PRIMARY}
                onPress={() => navigation.navigate('Home')}
              >
                <Text
                  style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                  color={theme.COLORS.WHITE}
                >
                  Appointments
                </Text>
              </Button>
              </Block>
            </Block>
      </Block>
      <Block />
      <Block flex={0.8} style={{ padding: theme.SIZES.BASE, marginTop: 20}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block flex style={{ marginTop: 5 }}>
            <DetailCard Key="Vin (Chasis No)" Value="2T3B42DV4BW064422" />
            <DetailCard Key="Year" Value="2017" />
            <DetailCard Key="Model" Value="COROLLA" />
            <DetailCard Key="Reg. Number" Value="APP 321 CN" />
          </Block>

          <Block flex style={{ marginTop: 15 }}>
            <DetailCard Key="Last Know Mileage" Value="78,956 KM" />
            <DetailCard Key="Last Service" Value="10,000 KM Service" />
            <DetailCard Key="Last Service Date" Value="Wed, 10 Jun. 2019" />
            <DetailCard Key="Next Service Date" Value="Thur, 10 Sep. 2019" />
          </Block>
        </ScrollView>
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
});

