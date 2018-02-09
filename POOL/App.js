import React from 'react';
import { StyleSheet, Text, View , Image } from 'react-native';
import Login from './Login';
import HomeScreen from './HomeScreen';
import Expo from 'expo';
import {StackNavigator} from 'react-navigation';

const NavigationApp = StackNavigator({
  Login: { screen: Login},
  Home: {screen: HomeScreen}
  
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




