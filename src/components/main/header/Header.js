import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import icMenu from '../../../icons/ic_menu_black.png';
import icBack from '../../../icons/ic_back.png';

export default class Header extends Component {
    onPress() {
        const { isHome, navigation } = this.props;
        if (isHome) {
            navigation.navigate('DrawerOpen');
        } else {
            navigation.goBack();
        }
    }

    render() {
        const { container, title } = styles;
        const icon = this.props.isHome ? icMenu : icBack;
        return (
            <View style={container}>
                <TouchableOpacity onPress={this.onPress.bind(this)}>
                    <Image source={icon} />
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
