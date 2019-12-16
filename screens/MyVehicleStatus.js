import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
//galio
import { Block, Text, theme } from 'galio-framework';

import { myvehicle, nowTheme } from '../constants';
import { VehicleCard } from '../components';

class MyVehicleStatus extends React.Component {
  renderVehicles = () => {
      return myvehicle.map(vehicle => {
        var keyvalue = myvehicle.indexOf(vehicle);
        return (<VehicleCard key={keyvalue} item={vehicle} status />)
      });
  }
  renderCards = () => {
    return (
      <Block style={styles.container}>
      {this.renderVehicles()}
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

export default MyVehicleStatus;
