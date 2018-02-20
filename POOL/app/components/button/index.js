import React from 'react';
import {View, Text,Button, StyleSheet} from 'react-native';

export default class index extends React.Component {

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