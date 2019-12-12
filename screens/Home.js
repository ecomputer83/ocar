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
          <IconCard key="icon-card-1" item={menus[0]} styles={styles.iconCard} />
          <IconCard  key="icon-card-2" item={menus[1]} styles={styles.iconCard} />
          <IconCard  key="icon-card-3" item={menus[2]} styles={styles.iconCard} />
          
        </Block>
        <Block row style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
          <IconCard key="icon-card-4" item={menus[3]} styles={styles.iconCard} />
          <IconCard key="icon-card-5" item={menus[4]} styles={styles.iconCard} />
          <IconCard key="icon-card-6" item={menus[5]} styles={styles.iconCard} />
          
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
