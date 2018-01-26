import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';
import Header from './header/Header';
import SignInForm from './signIn/SignInForm';
import SignUpForm from './signIn/SignUpForm';
import backgroundImage from '../../images/login_background.jpg';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignIn: true
        };
    }

    onPress(isSignIn) {
        if (this.state.isSignIn !== isSignIn) {
            this.setState({
                isSignIn
            });
        }
    }

    render() {
        console.log('render');
        const { background, container, fragmentContainer, replaceButton, buttonText } = styles;
        const fragment = this.state.isSignIn ? <SignInForm /> : <SignUpForm />;
        return (
            <ImageBackground style={background} source={backgroundImage}>
                <Header type={1} />
                <View style={container}>
                    {fragment}
                </View>
                <View style={fragmentContainer}>
                    <TouchableOpacity style={replaceButton} onPress={() => this.onPress(true)}>
                        <Text style={buttonText}>Sign in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={replaceButton} onPress={() => this.onPress(false)}>
                        <Text style={buttonText}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'space-between'
    },
    container: {
        justifyContent: 'center',
        margin: 8,
    },
    fragmentContainer: {
        flexDirection: 'row',
    },
    replaceButton: {
        flex: 1,
        borderColor: 'white',
        borderWidth: 1,
        padding: 8,
        alignItems: 'center',
        margin: 8
    },
    buttonText: {
        color: 'white'
    }
});
