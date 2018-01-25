import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import icMenu from '../../../icons/ic_menu_black.png';
import icBack from '../../../icons/ic_back.png';

export default class Header extends Component {
    onPress() {
        const { navigation, type } = this.props;
        if (type === 0) {
            navigation.navigate('DrawerOpen');
        }
    }

    render() {
        const { container, title } = styles;
        const icon = this.props.type === 0 ? icMenu : icBack;
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
