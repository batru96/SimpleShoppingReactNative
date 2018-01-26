import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './Styles';

export default class SignInForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }
    render() {
        const { title, inputTitle, input, form, buttonLogin, buttonLoginText } = styles;
        const { email, password } = this.state;
        return (
            <View style={form}>
                <Text style={title}>LOGIN</Text>
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
                <TouchableOpacity style={buttonLogin}>
                    <Text style={buttonLoginText}>LOG IN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
