import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

class ProductCard extends Component {
    render() {
        const { container, image } = styles;
        return (
            <View style={container}>
                <TouchableOpacity>
                    <Image style={image} source={this.props.img} />
                </TouchableOpacity>
                <View style={{ alignItems: 'center' }}>
                    <Text>Nokia Lumia 9520P</Text>
                    <Text>12 000 000 d</Text>
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
    },
    image: {
        width: (width / 2) - 8,
        height: (width / 2) - 8
    }
});

export default ProductCard;
