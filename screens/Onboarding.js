import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';

const { height, width } = Dimensions.get('screen');
import { Images, nowTheme } from '../constants/';
import { HeaderHeight } from '../constants/utils';

export default class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Block flex>
        <ImageBackground
            source={Images.Onboarding}
            style={{ flex: 1, height: height, width, zIndex: 1 }}
          />
          <Block space="between" style={styles.padded}>
            <Block>
              <Block middle>
                <Image source={Images.Logo} style={{ width: 138, height: 124, bottom: 100, position: 'absolute' }} />
              </Block>
              <Block>
                <Block middle>
                  <Text
                    style={{
                      fontFamily: 'montserrat-regular', letterSpacing: 1, paddingHorizontal: 10, textAlign: 'center'
                    }}
                    color="white"
                    size={24}
                  >
                    Welcome to Toyota (Nig.) Limited
                    End User Mobile App.
                  </Text>
                </Block>
              </Block>
              <Block middle style={{
                  marginTop: theme.SIZES.BASE * 1.5,
                }}>
                <Text
                  color="white"
                  size={16}
                  style={{ fontFamily: 'montserrat-regular' }}
                >
                  To enjoy the full features available on this app, you are required to register
                </Text>
                
              </Block>
              

              <Block
              
                style={{
                  marginTop: theme.SIZES.BASE * 3.5,
                  marginBottom: theme.SIZES.BASE * 2
                }}
              >
                <Block row>
                <Button
                  shadowless
                  style={styles.loginbutton}
                  color={nowTheme.COLORS.PRIMARY}
                  onPress={() => navigation.navigate('Home')}
                >
                  <Text
                    style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                    color={theme.COLORS.WHITE}
                  >
                    Login
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
                    Create Account
                  </Text>
                </Button>
                </Block>
                <Block>
                <Button
                  shadowless
                  style={styles.button}
                  color={nowTheme.COLORS.PRIMARY}
                  onPress={() => navigation.navigate('Home')}
                >
                  <Text
                    style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                    color={theme.COLORS.WHITE}
                  >
                    No Thanks, Maybe later
                  </Text>
                </Button>
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
  container: {
    backgroundColor: theme.COLORS.BLACK,
    marginTop: Platform.OS === 'android' ? 0 : 0
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 1.5,
    zIndex: 3,
    position: 'absolute',
    bottom: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    marginTop: 5
  },

  loginbutton: {
    width: (width /2) - (theme.SIZES.BASE * 2 + 2.5),
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
    marginRight: 5
  },

  registerbutton: {
    width: (width /2) - (theme.SIZES.BASE * 2 + 2.5),
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },

  gradient: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 66
  }
});
