import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, theme, Text } from "galio-framework";

import { IconCard, Button } from "../components";
import menus from "../constants/iconmenu";
const { width } = Dimensions.get("screen");

class Home extends React.Component {
  renderIcons = () => {
    return (
      <Block>
        <Block row style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
          <IconCard item={menus[0]} styles={styles.iconCard} />
          <IconCard item={menus[1]} styles={styles.iconCard} />
          <IconCard item={menus[2]} styles={styles.iconCard} />
          
        </Block>
        <Block row style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
          <IconCard item={menus[3]} styles={styles.iconCard} />
          <IconCard item={menus[4]} styles={styles.iconCard} />
          <IconCard item={menus[5]} styles={styles.iconCard} />
          
        </Block>
      </Block>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderIcons()}
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

  }
});

export default Home;
