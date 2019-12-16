import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
//galio
import { Block, Text, theme } from 'galio-framework';

import { Products, nowTheme } from '../constants';
import { ProductCard } from '../components';

class Vehicles extends React.Component {
  renderProducts = () => {
      return Products.map(product => {
        var keyvalue = Products.indexOf(product);
        return (<ProductCard key={keyvalue} item={product} horizontal ctaRight />)
      });
  }
  renderCards = () => {
    return (
      <Block style={styles.container}>
      {this.renderProducts()}
      </Block>
    );
  };

  render() {
    return (
      <Block flex>
        <ScrollView showsVerticalScrollIndicator={false}>{this.renderCards()}</ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.SIZES.BASE
  },
  title: {
    fontFamily: 'montserrat-bold',
    paddingBottom: theme.SIZES.BASE,
    marginTop: 44,
    color: nowTheme.COLORS.HEADER
  }
});

export default Vehicles;
