import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, theme,Button, Text } from "galio-framework";
import { IconCard } from "../components";
import {iconmenu, nowTheme } from "../constants";

const { width } = Dimensions.get("screen");

class Home extends React.Component {
  renderIcons = () => {
    return (
      <Block>
        <Block row style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
          <IconCard key="icon-card-1" item={iconmenu[0]} styles={styles.iconCard} />
          <IconCard  key="icon-card-2" item={iconmenu[1]} styles={styles.iconCard} />
          <IconCard  key="icon-card-3" item={iconmenu[2]} styles={styles.iconCard} />
          
        </Block>
        <Block row style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
          <IconCard key="icon-card-4" item={iconmenu[3]} styles={styles.iconCard} />
          <IconCard key="icon-card-5" item={iconmenu[4]} styles={styles.iconCard} />
          <IconCard key="icon-card-6" item={iconmenu[5]} styles={styles.iconCard} />
          
        </Block>
      </Block>
    );
  };

  renderButtons = () => {
    const { navigation } = this.props;
    return (
      <Block row style={{marginTop: 10}}>
                <Button
                  shadowless
                  style={styles.loginbutton}
                  color={nowTheme.COLORS.PRIMARY}
                  onPress={() => navigation.navigate('Login')}
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
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <Block flex center style={styles.home}>
        {this.renderIcons()}
        {this.renderButtons()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width
  },
  iconCard: {
    width: (width / 3) - 25,
    paddingHorizontal: 2,
    fontFamily: 'montserrat-regular'

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
});

export default Home;
