import React from 'react';
import { Block } from "galio-framework";
import { Easing, Animated } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
// screens
import Home from '../screens/Home';
import Login from '../screens/Login';
import MyAppointments from '../screens/MyAppointment';
import Register from '../screens/Register';
import Vehicles from '../screens/Products';
import Onboarding from '../screens/Onboarding';
import AddVehicle from '../screens/AddVehicle';
import MyVehicles from '../screens/MyVehicles';
import MyVehicleStatus from '../screens/MyVehicleStatus';
import MyVehicleDetail from '../screens/MyVehicleDetail';
import BookOptionModal from '../screens/BookOptionModal';
import ServiceList from '../screens/ServiceList';
import AppointmentConfirmation from '../screens/AppointmentConfirmation';

// settings
import SettingsScreen from '../screens/Settings';

// drawer
import Menu from './Menu';
import DrawerItem from '../components/DrawerItem';
import nowTheme from '../constants/Theme';

// header for screens
import Header from '../components/Header';
import AddAppointment from '../screens/AddAppointment';
import Schedule from '../screens/Schedule';

const transitionConfig = (transitionProps, prevTransitionProps) => ({
  transitionSpec: {
    duration: 400,
    easing: Easing.out(Easing.poly(4)),
    timing: Animated.timing
  },
  screenInterpolator: sceneProps => {
    const { layout, position, scene } = sceneProps;
    const thisSceneIndex = scene.index;
    const width = layout.initWidth;

    const scale = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [4, 1, 1]
    });
    const opacity = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      outputRange: [0, 1, 1]
    });
    const translateX = position.interpolate({
      inputRange: [thisSceneIndex - 1, thisSceneIndex],
      outputRange: [width, 0]
    });

    const scaleWithOpacity = { opacity };
    const screenName = 'Search';

    if (
      screenName === transitionProps.scene.route.routeName ||
      (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)
    ) {
      return scaleWithOpacity;
    }
    return { transform: [{ translateX }] };
  }
});


const AddVehicleStack = createStackNavigator(
  {
    AddVehicle: {
      screen: AddVehicle,
      navigationOptions: ({ navigation }) => ({
        header: <Header  transparent back white iconColor={nowTheme.COLORS.WHITE} title="Add Vehicle" navigation={navigation} />
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    transitionConfig
  }
);

const BookOptionStack = createStackNavigator(
  {
    BookOption: {
      screen: BookOptionModal,
      navigationOptions: ({ navigation }) => ({
        header: <Header  transparent back white iconColor={nowTheme.COLORS.WHITE} title="" navigation={navigation} />
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    transitionConfig
  }
);

const AddAppointmentStack = createStackNavigator(
  {
    AddAppointment: {
      screen: AddAppointment,
      navigationOptions: ({ navigation }) => ({
        header: <Header  transparent back white iconColor={nowTheme.COLORS.WHITE} title="Add Appointment" navigation={navigation} />
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    transitionConfig
  }
);

const ServiceListStack = createStackNavigator(
  {
    Services: {
      screen: ServiceList,
      navigationOptions: ({ navigation }) => ({
        header: <Header  transparent back white iconColor={nowTheme.COLORS.WHITE} title="Select Service(s)" navigation={navigation} />
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    transitionConfig
  }
);

const ScheduleStack = createStackNavigator(
  {
    Schedule: {
      screen: Schedule,
      navigationOptions: ({ navigation }) => ({
        header: <Header  transparent back white iconColor={nowTheme.COLORS.WHITE} title="Select Date" navigation={navigation} />
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    transitionConfig
  }
);

const ProductsStack = createStackNavigator(
  {
    Products: {
      screen: Vehicles,
      navigationOptions: ({ navigation }) => ({
        header: <Header transparent white iconColor={nowTheme.COLORS.WHITE} search title="Our Vehicles" navigation={navigation} />
      })
    }
  },
  {
    cardStyle: {
      backgroundColor: '#FFFFFF'
    },
    transitionConfig
  }
);

const MyAppointmentStack = createStackNavigator(
  {
    MyAppointments: {
      screen: MyAppointments,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header transparent white iconColor={nowTheme.COLORS.WHITE} search message title="Our Appointments"  navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    transitionConfig
  }
);

const MyVehicleStatusStack = createStackNavigator(
  {
    MyVehicleStatus: {
      screen: MyVehicleStatus,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header transparent white iconColor={nowTheme.COLORS.WHITE} search message title="My Service Status"  navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    transitionConfig
  }
);

const MyVehicleStack = createStackNavigator(
  {
    MyVehicles: {
      screen: MyVehicles,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header transparent title="My Vehicles" transparent white iconColor={nowTheme.COLORS.WHITE} search message navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    transitionConfig
  }
);

const VehicleDetailStack = createStackNavigator(
  {
    VehicleDetail: {
      screen: MyVehicleDetail,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header transparent title="Vehicle Details" transparent white iconColor={nowTheme.COLORS.WHITE} vehicle  navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    transitionConfig
  }
);

const AppointmentConfirmationStack = createStackNavigator(
  {
    AppointmentConfirmation: {
      screen: AppointmentConfirmation,
      navigationOptions: ({ navigation }) => ({
        header: (
          <Header transparent title="Appointment Confirmation" transparent white iconColor={nowTheme.COLORS.WHITE} vehicle  navigation={navigation} />
        ),
        headerTransparent: true
      })
    }
  },
  {
    cardStyle: { backgroundColor: '#FFFFFF' },
    transitionConfig
  }
);

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        header: <Header transparent iconColor={nowTheme.COLORS.WHITE} slider search title="Home" navigation={navigation} />
      })
    },
    // Pro: {
    //   screen: Pro,
    //   navigationOptions: ({ navigation }) => ({
    //     header: (
    //       <Header left={<Block />} white transparent title="" navigation={navigation} />
    //     ),
    //     headerTransparent: true
    //   })
    // }
  },
  {
    cardStyle: {
      backgroundColor: '#FFFFFF'
    },
    transitionConfig
  }
);

const AppStack = createDrawerNavigator(
  {
    Onboarding: {
      screen: Onboarding,
      navigationOptions: {
        drawerLabel: () => { }
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        drawerLabel: () => { }
      }
    },
    Register: {
      screen: Register,
      navigationOptions: {
        drawerLabel: () => { }
      }
    },
    AddVehicle: {
      screen: AddVehicleStack,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },
    AddAppointment: {
      screen: AddAppointmentStack,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },
    Services: {
      screen: ServiceListStack,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },
    Schedule: {
      screen: ScheduleStack,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },
    BookOption: {
      screen: BookOptionStack,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },
    VehicleDetail: {
      screen: VehicleDetailStack,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },
    AppointmentConfirmation: {
      screen: AppointmentConfirmationStack,
      navigationOptions: {
        drawerLabel: () => {}
      }
    },
    Home: {
      screen: HomeStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => <DrawerItem focused={focused} title="Home" />
      })
    },
    MyVehicles: {
      screen: MyVehicleStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => <DrawerItem title="My Vehicles" />
      })
    },
    MyAppointments: {
      screen: MyAppointmentStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => <DrawerItem title="My Appointments" />
      })
    },
    MyServiceStatus: {
      screen: MyVehicleStatusStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => <DrawerItem title="My Service Status" />
      })
    },
    GetEstimate: {
      screen: HomeStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => <DrawerItem title="Get Estimate" />
      })
    },
    VehicleShowroom: {
      screen: ProductsStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Products" title="Vehicle Showroom" />
        )
      })
    },
    PartsEnquiry: {
      screen: HomeStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Components" title="Parts Enquiry" />
        )
      })
    },
    DiagnosticExperts: {
      screen: HomeStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Components" title="Diagnostic Experts" />
        )
      })
    },
    TowService: {
      screen: HomeStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Articles" title="Tow Service" />
        )
      })
    },
    LatestPromos: {
      screen: HomeStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Profile" title="Latest Promos" />
        )
      })
    },
    SafetyTips: {
      screen: HomeStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Register" title="Safety Tips" />
        )
      })
    },
    Notifications: {
      screen: HomeStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Register" title="Notifications" />
        )
      })
    },
    ServiceCenters: {
      screen: HomeStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Register" title="Service Centers" />
        )
      })
    },
    AccreditedDealers: {
      screen: HomeStack,
      navigationOptions: navOpt => ({
        drawerLabel: ({ focused }) => (
          <DrawerItem focused={focused} screen="Register" title="Accredited Dealers" />
        )
      })
    }
  },
  Menu
);

const AppContainer = createAppContainer(AppStack);
export default AppContainer;
