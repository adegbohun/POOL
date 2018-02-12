/**
 * Created by orajiakuchukwudalu on 2018-02-11.
 */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class TripsScreen extends React.Component {

    render(){

        return (
            <View style={styles.container}>
                <Text style={styles.text}> Welcome to the home screen </Text>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2896d3',
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 150,
    },
    text: {
        color: '#fff',
    },


});