import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Drawer extends Component {
    render() {
        const { container } = styles;
        return (
            <View style={container}>
                <Text>Drawer</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
