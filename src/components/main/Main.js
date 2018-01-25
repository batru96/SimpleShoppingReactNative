import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, FlatList } from 'react-native';
import Header from './header/Header';
import ProductCard from './product/ProductCard';
import ProductSwiper from './swiper/ProductSwiper';
import image1 from '../../icons/image1.jpg';

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                { id: 1, name: 'Nokia Lumia 9520', price: '12.000.000d', image: image1 },
                { id: 2, name: 'Nokia Lumia 9520', price: '12.500.000d', image: image1 },
                { id: 3, name: 'Nokia Lumia 9520', price: '12.000.000d', image: image1 },
                { id: 4, name: 'Nokia Lumia 9520', price: '12.000.000d', image: image1 },
                { id: 5, name: 'Nokia Lumia 9520', price: '12.000.000d', image: image1 },
                { id: 6, name: 'Nokia Lumia 9520', price: '12.000.000d', image: image1 },
            ],
        };
    }
    render() {
        const { container, productContainer, newProductTitle } = styles;
        const { products } = this.state;
        return (
            <View style={container}>
                <Header navigation={this.props.navigation} type={0} />
                <ScrollView>
                    <ProductSwiper />
                    <View style={productContainer}>
                        <Text style={newProductTitle}>Sản phẩm mới nhất</Text>
                        <FlatList
                            data={products}
                            keyExtractor={item => item.id}
                            numColumns={2}
                            renderItem={({ item }) => <ProductCard item={item} />}
                        />
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
    productContainer: {
        flex: 1,
        paddingVertical: 8,
        backgroundColor: 'lightblue'
    },
    newProductTitle: {
        marginHorizontal: 8,
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
    },
    product: {
        flexDirection: 'row',
        marginTop: 8,
    }
});
