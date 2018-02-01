import React from 'react';
import {View, Text, Image} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',

    };  
    render(){
        const { navigate } = this.props.navigatation
        return (
            <View>
               
            <Text>WELCOME TO POOL HOME</Text>
            </View>
        );
    }
}