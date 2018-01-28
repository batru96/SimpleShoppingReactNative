import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

class ProductCart extends Component {
    onPress(itemId) {
        this.props.navigation.navigate('PRODUCT_DETAIL');
    }
    render() {
        const { container, img } = styles;
        const { id, name, price, image } = this.props.item;
        return (
            <View style={container}>
                <TouchableOpacity onPress={() => this.onPress(id)}>
                    <Image style={img} source={image} />
                </TouchableOpacity>
                <View style={{ alignItems: 'center' }}>
                    <Text>{name}</Text>
                    <Text>{price}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 4,
        paddingVertical: 8,
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 4,
        marginTop: 8
    },
    img: {
        width: (width / 2) - 8,
        height: (width / 2) - 8
    }
});

export default ProductCart;
