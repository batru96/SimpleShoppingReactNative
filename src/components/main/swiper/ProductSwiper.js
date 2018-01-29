import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import pic1 from '../../../icons/1.jpg';
import pic2 from '../../../icons/2.jpg';
import pic3 from '../../../icons/3.jpg';

const { width } = Dimensions.get('window');
class ProductSwiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mang: [
                { id: 1, image: pic1 },
                { id: 2, image: pic2 },
                { id: 3, image: pic3 },
            ]
        };
    }
    
    render() {
        const { swiper, imageSwiper } = styles;
        return (
            <View style={swiper}>
                <Swiper showButtons={false} autoplay autoplayTimeout={4}>
                    {this.state.mang.map(item =>
                        <TouchableOpacity key={item.id} style={imageSwiper}>
                            <Image source={item.image} style={imageSwiper} />
                        </TouchableOpacity>)}
                </Swiper>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    swiper: {
        height: (width * 354) / 800
    },
    imageSwiper: {
        flex: 1,
        width,
        alignItems: 'center'
    },
});

export default ProductSwiper;
