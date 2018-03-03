/**
 * Created by Feyijimi Adegbohun on 2018-02-11.
 */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity
}                           from 'react-native';

// Trip SetUp Screens
export default class TripSetup extends React.Component {

    render(){

        return (
            <View style={styles.container}>
                    <Text
                        style={[styles.text, {paddingBottom: 3}]}
                    >
                            Set Up Trip
                    </Text>
                <View style={styles.bodycontainer}>
                    
                    <TextInput
                            placeholder={'Enter Destination or city'}
                            style={styles.searchInput}
                    />
                    <TextInput
                            placeholder={'Enter pick up location'}
                            style={styles.searchInput}
                    />
                </View>
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
        justifyContent: 'center',
        backgroundColor: '#000000',
        paddingBottom: 50,
        paddingTop: 10,
        alignItems: 'stretch'
    },
    bodycontainer: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#FAFAFA',
       
    },
    text: {
        color: '#fff',
        
    },
    headContainer: {
        marginTop: 30,
        width: '95%',
        backgroundColor: 'transparent'
    },
    searchInput: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        marginBottom: 10,
        paddingLeft: 15
    },



});