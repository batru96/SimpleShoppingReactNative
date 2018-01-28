import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Information extends Component {
    render() {
        const { container } = styles;
        return (
            <View style={container}>
                <Text>Information Page</Text>
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
