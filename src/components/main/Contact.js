import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Contact extends Component {
    render() {
        const { container } = styles;
        return (
            <View style={container}>
                <Text>Contact Page</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    }
});
