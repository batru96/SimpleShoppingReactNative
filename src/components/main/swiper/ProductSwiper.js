import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import pic1 from '../../../icons/1.jpg';
import pic2 from '../../../icons/2.jpg';
import pic3 from '../../../icons/3.jpg';

const { width } = Dimensions.get('window');
class ProductSwiper extends Component {
    render() {
        const { swiper, imageSwiper } = styles;
        return (
            <View style={swiper}>
                <Swiper showButtons={false} autoplay autoplayTimeout={4}>
                    <Image source={pic1} style={imageSwiper} />
                    <Image source={pic2} style={imageSwiper} />
                    <Image source={pic3} style={imageSwiper} />
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
