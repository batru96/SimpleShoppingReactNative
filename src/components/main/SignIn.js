import React, { Component } from 'react';
import {
    View, Text, StyleSheet, Dimensions, ImageBackground, TextInput, TouchableOpacity
} from 'react-native';
import Header from './header/Header';
import backgroundImage from '../../images/login_background.jpg';

const { width, height } = Dimensions.get('window');
export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    render() {
        const {
            background, container, title, inputTitle, input, form, forgotPassword,
            buttonForgot, buttonLogin, buttonLoginText
        } = styles;
        const { email, password } = this.state;
        return (
            <ImageBackground style={background} source={backgroundImage}>
                <Header type={1} />
                <View style={container}>
                    <View style={form}>
                        <Text style={title}>LOGIN</Text>
                        <Text style={inputTitle}>Email</Text>
                        <TextInput
                            value={email}
                            style={input}
                            underlineColorAndroid='transparent'
                            placeholderTextColor='white'
                            placeholder='Enter your email'
                            onChangeText={text => this.setState({ email: text })}
                        />
                        <Text style={inputTitle}>Password</Text>
                        <TextInput
                            value={password}
                            style={input}
                            underlineColorAndroid='transparent'
                            secureTextEntry
                            placeholder='Enter your password'
                            placeholderTextColor='white'
                            onChangeText={text => this.setState({ password: text })}
                        />
                        <TouchableOpacity style={buttonForgot}>
                            <Text style={forgotPassword}>Forgot your password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={buttonLogin}>
                            <Text style={buttonLoginText}>LOG IN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        width,
        height
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        margin: 8,
    },
    form: {
        borderWidth: 1,
        borderColor: 'white',
        padding: 16
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24
    },
    inputTitle: {
        color: 'white'
    },
    input: {
        color: 'white',
        borderWidth: 1,
        borderColor: 'white',
        height: 40,
        paddingHorizontal: 8,
    },
    buttonForgot: {
        marginTop: 8,
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    forgotPassword: {
        textDecorationLine: 'underline',
        color: 'white',
    },
    buttonLogin: {
        borderColor: 'white',
        borderWidth: 1,
        padding: 8,
        alignSelf: 'center',
        marginTop: 16
    },
    buttonLoginText: {
        color: 'white'
    }

});
