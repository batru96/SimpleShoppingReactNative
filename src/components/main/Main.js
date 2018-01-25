import React, { Component } from 'react';
import { View, Image, StyleSheet, Dimensions, ScrollView, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import Header from './header/Header';
import ProductCard from './product/ProductCard';
import pic1 from '../../icons/1.jpg';
import pic2 from '../../icons/2.jpg';
import pic3 from '../../icons/3.jpg';
import image1 from '../../icons/image1.jpg';

const { width } = Dimensions.get('window');
export default class Main extends Component {
    render() {
        const {
            container, imageSwiper, swiper, product, productContainer, newProductTitle
        } = styles;
        return (
            <View style={container}>
                <Header navigation={this.props.navigation} />
                <ScrollView>
                    <View style={swiper}>
                        <Swiper showButtons={false} autoplay autoplayTimeout={4}>
                            <Image source={pic1} style={imageSwiper} />
                            <Image source={pic2} style={imageSwiper} />
                            <Image source={pic3} style={imageSwiper} />
                        </Swiper>
                    </View>
                    <View style={productContainer}>
                        <Text style={newProductTitle}>Sản phẩm mới nhất</Text>
                        <View style={product}>
                            <ProductCard img={image1} />
                            <ProductCard img={image1} />
                        </View>
                        <View style={product}>
                            <ProductCard img={image1} />
                            <ProductCard img={image1} />
                        </View>
                        <View style={product}>
                            <ProductCard img={image1} />
                            <ProductCard img={image1} />
                        </View>
                    </View>
                </ScrollView>
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
    },
    productContainer: {
        flex: 1,
        paddingVertical: 8,
        backgroundColor: 'lightblue'
    },
    newProductTitle: {
        marginHorizontal: 8,
        fontWeight: 'bold',
        fontSize: 20
    },
    product: {
        flexDirection: 'row',
        marginTop: 8,
    }
});
