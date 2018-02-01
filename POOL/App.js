import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import HomeScreen from './HomeScreen';
import Login from './Login';
import Expo from 'expo';
import {StackNavigator} from 'react-navigation';

const NavigationApp = StackNavigator({
  Home: { screen: Login},
},
  { navigationOptions: {
    header: false,
  }

});
export default class App extends React.Component {
  render() {
    return (
      <NavigationApp/>
    );
  }
}




