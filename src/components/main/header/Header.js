import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import icMenu from '../../../icons/ic_menu_black.png';

export default class Header extends Component {
    onPress() {
        this.props.navigation.navigate('DrawerOpen');
    }

    render() {
        const { container, title } = styles;
        return (
            <View style={container}>
                <TouchableOpacity onPress={this.onPress.bind(this)}>
                    <Image source={icMenu} />
                </TouchableOpacity>
                <Text style={title}>SIMPLE SHOPPING</Text>
                <View />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        backgroundColor: 'lightblue',
    },
    title: {
        fontWeight: 'bold'
    }
});
