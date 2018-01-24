import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import Header from './header/Header';
import pic1 from '../../icons/1.jpg';
import pic2 from '../../icons/2.jpg';
import pic3 from '../../icons/3.jpg';

const { width } = Dimensions.get('window');
export default class Main extends Component {
    render() {
        const { container, imageSwiper, swiper } = styles;
        return (
            <View style={container}>
                <Header navigation={this.props.navigation} />
                <View style={swiper}>
                    <Swiper showButtons={false} autoplay autoplayTimeout={4}>
                        <Image source={pic1} style={imageSwiper} />
                        <Image source={pic2} style={imageSwiper} />
                        <Image source={pic3} style={imageSwiper} />
                    </Swiper>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    swiper: {
        height: (width * 354) / 800
    },
    imageSwiper: {
        flex: 1,
        width,
        alignItems: 'center'
    }
});
