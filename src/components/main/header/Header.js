import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import icMenu from '../../../icons/ic_menu_black.png';
import icBack from '../../../icons/ic_back.png';

class Header extends Component {  
    onPress() {
        this.props.dispatch({ type: 'GO_TO_SIGN_IN' });
    }

    render() {
        const { container, title } = styles;
        const icon = this.props.screeName === 'HOME' ? icMenu : icBack;
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

function mapStateToProps(state) {
    return {
        screeName: state.screeReducer,
    };
}

export default connect(mapStateToProps)(Header);
