import React from 'react';
import { Image } from 'react-native';
import { Block, GalioProvider } from 'galio-framework';

import Screens from './navigation/Screens';
import { Images, nowTheme } from './constants';

// cache app images
const assetImages = [
  Images.Onboarding,
  Images.Logo,
  Images.Pro,
  Images.NowLogo,
  Images.iOSLogo,
  Images.androidLogo,
  Images.ProfilePicture,
  Images.CreativeTimLogo,
  Images.InvisionLogo,
  Images.RegisterBackground,
  Images.ProfileBackground
];
Images.Viewed.map(image => assetImages.push(image));
function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    }
  });
}

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    _loadResourcesAsync();
  }

  render() {
  
      return (
        <GalioProvider theme={nowTheme}>
          <Block flex>
            <Screens />
          </Block>
        </GalioProvider>
      );
    
  }

  _loadResourcesAsync = async () => {
    return Promise.all([...cacheImages(assetImages)]);
  };
}
