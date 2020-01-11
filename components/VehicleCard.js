import React from 'react';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Block, Text, theme, Button } from 'galio-framework';
import { Icon } from '../components';
import { nowTheme } from '../constants';

const {width, height } = Dimensions.get('screen');
class VehicleCard extends React.Component {
  render() {
    const {
      navigation,
      item,
      appoint,
      status,
      style,
      titleStyle
    } = this.props;
    const cardContainer = [styles.card, styles.shadow, style];

    return (
      <Block card flex style={cardContainer}>
          <Block row flex style={{width:width}}>
            <Block style={{width:width * 0.1}}>
              <Icon
                size={32} color="#ADB5BD" name="phone" family="NowExtra"
              />
            </Block>
            <Block style={{width: width * 0.57}}>
            <TouchableOpacity
    onPress={() => navigation.navigate('VehicleDetail')}
  >
            <Text
                style={{ fontFamily: 'montserrat-regular' }}
                size={14}
                color={nowTheme.COLORS.SECONDARY}
              >
                {item.vin}
              </Text>
              <Text
                style={{ fontFamily: 'montserrat-regular' }}
                size={14}
                color={nowTheme.COLORS.SECONDARY}
              >
                {item.model}
              </Text>
              </TouchableOpacity>
            </Block>
            { ((!appoint && item.status != '1') || (status && item.status != '1')) ? (<Block style={{width: width * 0.1}}>
            <Button
                  shadowless
                  color='transparent'
                  size='small'
                  style={{width: 80}}
                  onPress={() => navigation.navigate('AddAppointment', item)}
                >
                  <Text
                    style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                    color={nowTheme.COLORS.PRIMARY}
                  >
                    Book Now
                  </Text>
                </Button>
            </Block>) : (
                  <Block />
                )}
          </Block>
          <Block flex  style={styles.cardDescription}>
            <Block style={{width: width}}>
              <Text
                style={{ fontFamily: 'montserrat-regular' }}
                size={15}
                bold
                color={nowTheme.COLORS.SECONDARY}
              >
                Service Due
              </Text>
            </Block>
            <Block row flex >
              <Block flex style={{width: width * 0.6}}>
              
              {item.serviceduedate ? (
                <Block row flex>
                  <Icon
                    size={16} color="#000000" name="book" family="NowExtra" style={{marginRight: 5}}
                  />
                  <Text
                    style={{ fontFamily: 'montserrat-regular' }}
                    size={14}
                    color={nowTheme.COLORS.BLACK}
                  >
                    {item.serviceduedate}
                  </Text>
                </Block>
              ) : (
                  <Block />
                )}
              
            </Block>
              <Block row flex style={{width: width * 0.4}}>
            <Icon
                    size={16} color="#000000" name="assignment" family="NowExtra"  style={{marginRight: 5}}
                  />
              <Text
                size={12}
                color={nowTheme.COLORS.BLACK}
                bold
              >
                {item.mileage}
              </Text>
            </Block>
            </Block>
          </Block>
          { appoint ? (<Block row style={{width:width}}>
            <Block>
            <Button
                  shadowless
                  color='transparent'
                  size='small'
                  style={{width: width * 0.45}}
                  onPress={() => navigation.navigate('Home')}
                >
                  <Text
                    style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                    color={nowTheme.COLORS.PRIMARY}
                  >
                    Confirm Reschedule
                  </Text>
                </Button>
            </Block>
            <Block>
            <Button
                  shadowless
                  color='transparent'
                  size='small'
                  style={{width: width * 0.45}}
                  onPress={() => navigation.navigate('Home')}
                >
                  <Text
                    style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                    color={nowTheme.COLORS.PRIMARY}
                  >
                    Get Estimate
                  </Text>
                </Button>
            </Block>
            
          </Block>) : (
                  <Block />
                ) }
          { status ? (<Block row style={{width:width}}>
            <Block style={{width: width * 0.5}}>
                  <Text
                    style={{ fontFamily: 'montserrat-bold', fontSize: 14, paddingTop: 12 }}
                    color={nowTheme.COLORS.PRIMARY}
                  >
                    {(item.status == '4') ? 'Service is awaiting' : (item.status == '2') ? 'Vehicle arrived' : (item.status == '1') ? 'Service is in progress' : ''}
                  </Text>
            </Block>
            <Block>
            <Button
                  shadowless
                  color='transparent'
                  size='small'
                  style={{width: width * 0.35}}
                  onPress={() => navigation.navigate('Home')}
                >
                  <Text
                    style={{ fontFamily: 'montserrat-bold', fontSize: 14 }}
                    color={nowTheme.COLORS.PRIMARY}
                  >
                    Confirm Reschedule
                  </Text>
                </Button>
            </Block>
            
            
          </Block>) : (
                  <Block />
                ) }
      </Block>
    );
  }
}

VehicleCard.propTypes = {
  item: PropTypes.object,
  appoint: PropTypes.bool,
  status: PropTypes.bool,
  titleStyle: PropTypes.any,
  textBodyStyle: PropTypes.any
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 4,
    padding: 10
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2,
    backgroundColor: nowTheme.COLORS.BODY
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden'
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: 122,
    width: 'auto'
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    height: 215
  },
  shadow: {
    shadowColor: '#8898AA',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    elevation: 2
  },
  articleButton: {
    fontFamily: 'montserrat-bold',
    paddingHorizontal: 9,
    paddingVertical: 7
  }
});

export default withNavigation(VehicleCard);
