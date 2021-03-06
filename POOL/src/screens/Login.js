import React from 'react';
import {View, Text, Image, KeyboardAvoidingView, TouchableOpacity, AsyncStorage, TextInput, StyleSheet} from 'react-native';

export default class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',

        }
    }

    componentDidMount(){
        this._loadInitialState().done();

    }
    _loadInitialState = async () => {
        var value = await AsyncStorage.getItem('user');
        if (value !== null){
            this.props.navigation.navigate('Profile');
        }
    }
    render(){
        
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
            
                    <View style={styles.container}>
                    
                    <Text style={styles.header}> POOL LOGIN </Text>

                    <TextInput 
                        style={styles.textInput} placeholder='Username'
                        onChangeText={ (username ) => this.setState({username})}
                        underlineColorAndroid='transparent'
                    />

                    <TextInput 
                        style={styles.textInput} placeholder='Password'
                        onChangeText={ (password ) => this.setState({password})}
                        secureTextEntry= {true} underlineColorAndroid='transparent'
                    />

                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.login}>
                        <Text style={styles.white}>Log in </Text>
                    </TouchableOpacity>
                    
                    </View>


            </KeyboardAvoidingView>
        );
    }

    login = () => { 


        
        fetch('http://192.5454.25.2:3000/users', {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        })
        .then((response) => response.json())
        .then ((res) =>{
            alert(res.message);
            if (res.success == true){
                AsyncStorage.setItem('user', res.user);
                this.props.navigation.navigate('HomeScreen');

            }
            else {
                alert(res.message);
            }
        });
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
            backgroundColor: '#000000',
            paddingLeft: 40,
            paddingRight: 40,
            paddingBottom: 150,
        },
        header: {
            fontSize: 24,
            marginBottom: 60,
            color: '#fff',
            fontWeight:'bold',
        },
        textInput: {
            alignSelf: 'stretch',
            padding: 16,
            marginBottom: 20,
            backgroundColor:'#fff',
        },
        btn: {
            alignSelf: 'stretch',
            color: 'white',
            padding: 20,
            alignItems: 'center',
            backgroundColor:'#000000',
        },
        white: {
            color:'white',
        }


});