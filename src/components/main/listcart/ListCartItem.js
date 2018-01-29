import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import picture from '../../../icons/image1.jpg';
import icAdd from '../../../icons/ic_add.png';
import icMinus from '../../../icons/ic_minus.png';

export default class ListCartItem extends Component {
    showDetail() {

    }

    removeItem() {

    }

    render() {
        const {
            cart, productName, image, content, price, stateContainer, plusButton,
            buttonsContainer, count, removeContainer, removeText
        } = styles;
        return (
            <View style={cart}>
                <TouchableOpacity onPress={this.showDetail.bind(this)}>
                    <Image style={image} source={picture} />
                </TouchableOpacity>
                <View style={content}>
                    <Text style={productName}>Samsung Galaxy S8 HD</Text>
                    <Text style={price}>Price: 12.499.000 Đ</Text>
                    <View style={stateContainer}>
                        <View style={buttonsContainer}>
                            <TouchableOpacity style={plusButton}>
                                <Image source={icMinus} />
                            </TouchableOpacity>
                            <Text style={count}>3</Text>
                            <TouchableOpacity style={plusButton}>
                                <Image source={icAdd} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={removeContainer} onPress={this.removeContainer.bind(this)}>
                            <Text style={removeText}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    plusButton: {
        marginHorizontal: 8
    },
    count: {
        fontSize: 20,
        color: 'black'
    },
    removeText: {
        textDecorationLine: 'underline'
    },
    removeContainer: {
        justifyContent: 'center'
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    cart: {
        borderWidth: 1,
        padding: 8,
        margin: 4,
        flexDirection: 'row'
    },
    productName: {
        color: '#3d8cc3',
        fontWeight: 'bold',
        fontSize: 20,
    },
    image: {
        width: 100,
        height: 100
    },
    content: {
        flex: 1,
        justifyContent: 'space-between'
    },
    price: {
        color: 'black',
        fontWeight: 'bold'
    },
    stateContainer: {
        flexDirection: 'row',
    },
});
