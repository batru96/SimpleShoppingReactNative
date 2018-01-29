import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import icMenu from '../../../icons/ic_menu_black.png';
import icBack from '../../../icons/ic_back.png';
import icSearch from '../../../icons/ic_search.png';

class Header extends Component {
    onPress() {
        const { isHome, navigation } = this.props;
        if (isHome) {
            navigation.navigate('DrawerOpen');
        } else {
            navigation.goBack();
        }
    }

    onSearchingPress() {
        this.props.dispatch({ type: 'TOGGLE_SEARCHING' });
    }

    render() {
        const { container, title } = styles;
        const { isHome } = this.props;
        return (
            <View style={container}>
                <TouchableOpacity onPress={this.onPress.bind(this)}>
                    <Image source={isHome ? icMenu : icBack} />
                </TouchableOpacity>
                <Text style={title}>SIMPLE SHOPPING</Text>
                <TouchableOpacity onPress={this.onSearchingPress.bind(this)}>
                    <Image source={isHome ? icSearch : null} />
                </TouchableOpacity>
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

export default connect()(Header);
