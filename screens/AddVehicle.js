import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated,
  ImageBackground
} from 'react-native';
import { Block, Text, Button as GaButton, theme } from 'galio-framework';
import { Input, Icon } from '../components';
import { nowTheme } from '../constants';
const { width } = Dimensions.get('screen');
class AddVehicle extends React.Component {

    render () {
        return (
        <Block flex center>
            <Block flex={1} space="between">
                    <Block center flex={0.9}>
                      <Block flex space="between">
                        <Block>
                          <Block width={width * 0.8} style={{ marginBottom: 5, marginTop: 25 }}>
                            <Text>VIN (Chassis No)</Text>
                            <Input
                              right
                              placeholder="vin no"
                              color="black"
                              style={styles.inputs}
                              iconContent={
                                <Icon
                                  size={16}
                                  color="#ADB5BD"
                                  name="phone"
                                  family="NowExtra"
                                  style={styles.inputIcons}
                                />
                              }
                            />
                          </Block>
                          <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                            <Text>Year</Text>
                            <Input
                              placeholder="Year"
                              color="black"
                              style={styles.inputs}
                              noicon
                            />
                          </Block>
                          <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                          <Text>Model</Text>
                            <Input
                              placeholder="Model"
                              color="black"
                              style={styles.inputs}
                              noicon
                            />
                          </Block>
                          <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                          <Text>Registration Number</Text>
                            <Input
                              placeholder="reg no"
                              color="black"
                              style={styles.inputs}
                              noicon
                            />
                          </Block>
                          <Block style={{marginBottom:  10}}></Block>
                          <Block width={width * 0.8} center>
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
                                    SUBMIT
                                </Text>
                            </GaButton>
                          </Block>
                        </Block>
                    </Block>
                </Block>
            </Block>
        </Block>
    );
    }
}

const styles = StyleSheet.create({
    inputs: {
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 0
      },
      loginbutton: {
        width: ((width * 0.8) /2),
        height: nowTheme.SIZES.BASE * 3,
        shadowRadius: 0,
        shadowOpacity: 0
      }
})

export default AddVehicle