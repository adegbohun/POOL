import React from 'react';
import { StyleSheet, Text, View , Image }   from 'react-native';
import Expo                                 from 'expo';
import Login                                from './src/screens/Login';
import HomeScreen                           from './src/screens/HomeScreen';
import TripsScreen                          from './src/screens/Trips';
import ProfileScreen                        from './src/screens/Profile';
import SignUpScreen                         from './src/screens/SignUp';
import LocationInfoScreen                   from './src/screens/LocationInfo';
import MessagesScreen                       from './src/screens/Messages';
import CreateTripScreen                     from './src/screens/CreateTrip';
import TripSetup                            from './src/screens/TripSetup';
import BaseScreen                           from './src/screens/base';
import {StackNavigator} from 'react-navigation';

const NavigationApp = StackNavigator(
    {
        base: {
            screen: BaseScreen
        },
        profile: {
            screen: ProfileScreen
        },
        sign_up: {
            screen: SignUpScreen
        },
        location_info: {
            screen: LocationInfoScreen
        },
        trips: {
            screen: TripsScreen
        },
        trip_setup: {
            screen: TripSetup
        },
        messages: {
            screen: MessagesScreen
        },
        create_trip: {
            screen: CreateTripScreen
        },
        login: {
            screen: Login
        },
        home: {
            screen: HomeScreen
        }
    },
    {
      navigationOptions:
          {
            header: false,
          }

    }
);
export default class App extends React.Component {
  render() {
    return (
      <NavigationApp/>
    );
  }
}




