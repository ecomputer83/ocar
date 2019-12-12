import React, { Component } from 'react';
import { Dimensions, StyleSheet} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {Block} from 'galio-framework';

import {nowTheme} from '../constants';
import SliderEntry from '../components';

export default class CarouselView extends Component {
  _renderItemWithParallax ({item, index}, parallaxProps) {
    return (
        <SliderEntry
          data={item}
          even={(index + 1) % 2 === 0}
          parallax={true}
          parallaxProps={parallaxProps}
        />
    );
}

  render() {
    const { width, item } = this.props;
    // const { slider1ActiveSlide } = this.state;

    return (
      <Block style={styles.Container}>
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={item}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={width + 20}
                  itemWidth={width}
                  hasParallaxImages={true}
                  firstItem='1'
                  inactiveSlideScale={0.94}
                  inactiveSlideOpacity={0.7}
                  // inactiveSlideShift={20}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  loop={true}
                  loopClonesPerSide={2}
                  autoplay={true}
                  autoplayDelay={500}
                  autoplayInterval={3000}
                  // onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                <Pagination
                  dotsLength={item.length}
                  activeDotIndex='1'
                  containerStyle={styles.paginationContainer}
                  dotColor={'rgba(255, 255, 255, 0.92)'}
                  dotStyle={styles.paginationDot}
                  inactiveDotColor={nowTheme.COLORS.BLACK}
                  inactiveDotOpacity={0.4}
                  inactiveDotScale={0.6}
                  carouselRef={this._slider1Ref}
                  tappableDots={!!this._slider1Ref}
                />
            </Block>
    );
  }
}

const styles = StyleSheet.create({
  slider: {
    marginTop: 15,
    overflow: 'visible' // for custom animations
},
sliderContentContainer: {
  paddingVertical: 10 // for custom animation
},
paginationContainer: {
  paddingVertical: 8
},
paginationDot: {
  width: 8,
  height: 8,
  borderRadius: 4,
  marginHorizontal: 8
},
Container: {
  paddingVertical: 30
},
});

