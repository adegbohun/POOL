/**
 * Created by orajiakuchukwudalu on 2018-02-11.
 */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ListView, Dimensions} from 'react-native';
const { height, width } = Dimensions.get('window');

export default class BaseScreen extends React.Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(
                [
                    {
                        name: "Home",
                        route: "home"
                    },
                    {
                        name: "Login",
                        route: "login"
                    },
                    {
                        name: "Profile",
                        route: "profile"
                    },
                    {
                        name: "Location info",
                        route: "location_info"
                    },
                    {
                        name: "Trips",
                        route: "trips"
                    },
                    {
                        name: "TripSetup",
                        route: "trip_setup"
                    },
                    {
                        name: "Messages",
                        route: "messages"
                    },
                    {
                        name: "Create trip",
                        route: "create_trip"
                    },
                    {
                        name: "Sign Up",
                        route: "sign_up"
                    }
                ]
            ),
        };
    }

    render(){

        return (
            <View style={styles.container}>
                <ListView
                    contentContainerStyle={styles.listView}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                this.props.navigation.navigate(rowData.route);
                            }}
                        >
                            <Text
                                style={styles.buttonText}
                            >
                                {rowData.name}
                            </Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        );
    }


}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    listView: {
        width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        width: '80%',
        height: 50,
        backgroundColor: 'white',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    buttonText: {
        width: '100%',
        textAlign: 'center'
    },
    container: {
        height,
        width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2896d3',
    },
    text: {
        color: '#fff',
    },


});