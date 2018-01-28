import React, { Component } from 'react';
import { Text, StyleSheet, FlatList, TouchableOpacity, Image, View } from 'react-native';
import icHome from '../../icons/ic_home.png';
import icPhone from '../../icons/ic_smartphone.png';
import icLaptop from '../../icons/ic_laptop.png';
import icContact from '../../icons/ic_contacts.png';
import icInfo from '../../icons/ic_info.png';
import icCart from '../../icons/ic_shopping_cart.png';

class Drawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [
                { id: 1, name: 'Trang chính', icon: icHome },
                { id: 2, name: 'Điện thoại', icon: icPhone },
                { id: 3, name: 'Laptop', icon: icLaptop },
                { id: 6, name: 'Giỏ hàng của tôi', icon: icCart },
                { id: 4, name: 'Liên hệ', icon: icContact, },
                { id: 5, name: 'Thông tin', icon: icInfo },
            ],
        };
    }

    onPress(name) {
        const { navigation } = this.props;
        let label = '';
        switch (name) {
            case 'Trang chính':
                navigation.navigate('DrawerClose');
                return;
            case 'Giỏ hàng của tôi':
                label = 'LIST_CART';
                break;
            case 'Liên hệ':
                label = 'CONTACT';
                break;
            case 'Thông tin':
                label = 'INFORMATION';
                break;
            default:
                label = 'LIST_PRODUCT';
                break;
        }
        if (name !== '') this.props.navigation.navigate(label);
    }

    goToSignIn() {
        this.props.navigation.navigate('SIGN_IN');
    }

    renderItem(item) {
        const { button, image } = styles;

        return (
            <TouchableOpacity style={button} onPress={() => this.onPress(item.name)}>
                <Image style={image} source={item.icon} />
                <Text>{item.name}</Text>
            </TouchableOpacity>
        );
    }


    render() {
        const { container, signInButton } = styles;
        return (
            <View style={container}>
                <FlatList
                    data={this.state.menus}
                    renderItem={({ item }) => this.renderItem(item)}
                    keyExtractor={item => item.id}
                />
                <TouchableOpacity style={signInButton} onPress={this.goToSignIn.bind(this)}>
                    <Text style={{ color: 'white' }}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        padding: 8,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    image: {
        marginRight: 16
    },
    signInButton: {
        backgroundColor: 'green',
        borderColor: 'black',
        borderRadius: 4,
        margin: 8,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Drawer;
