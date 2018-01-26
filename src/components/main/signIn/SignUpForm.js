import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from './Styles';

export default class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    render() {
        const {
            title, inputTitle, input, form, buttonLogin, buttonLoginText
        } = styles;
        const { email, password, confirmPassword } = this.state;
        return (
            <View style={form}>
                <Text style={title}>REGISTER</Text>
                <Text style={inputTitle}>Email</Text>
                <TextInput
                    value={email}
                    style={input}
                    underlineColorAndroid='transparent'
                    onChangeText={text => this.setState({ email: text })}
                />
                <Text style={inputTitle}>Password</Text>
                <TextInput
                    value={password}
                    style={input}
                    underlineColorAndroid='transparent'
                    secureTextEntry
                    onChangeText={text => this.setState({ password: text })}
                />
                <Text style={inputTitle}>Confirm Password</Text>
                <TextInput
                    value={confirmPassword}
                    style={input}
                    underlineColorAndroid='transparent'
                    secureTextEntry
                    onChangeText={text => this.setState({ confirmPassword: text })}
                />
                <TouchableOpacity style={buttonLogin}>
                    <Text style={buttonLoginText}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
