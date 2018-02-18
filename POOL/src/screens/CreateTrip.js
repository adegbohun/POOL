/**
 * Created by orajiakuchukwudalu on 2018-02-11.
 */
import React                    from 'react';
import {
    View,
    Text,
    StyleSheet,
    Picker,
    TextInput,
    Dimensions
}                               from 'react-native';

const { height, width } = Dimensions.get('window');

export default class CreateTripScreen extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            language: "java"
        }
    }

    render(){

        return (
            <View style={styles.container}>
                <View
                    style={styles.innerContainer}
                >
                </View>
                <Text style={styles.text}> Welcome to the home screen </Text>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    wrapper: {
        height,
        width
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cbddec',
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 150,
    },
    innerContainer: {
        margin: 10,
        height: '100%',
        width: '100%'
    },
    text: {
        color: '#fff',
    },


});