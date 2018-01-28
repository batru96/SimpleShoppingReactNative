import React, { Component } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Header from './header/Header';
import ProductCart from './product/ProductCart';
import image1 from '../../icons/image1.jpg';

export default class ListProduct extends Component {
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
        const { container } = styles;
        const { products } = this.state;
        const { navigation } = this.props;
        return (
            <View style={container}>
                <Header isHome={false} navigation={navigation} />
                <FlatList
                    data={products}
                    keyExtractor={item => item}
                    numColumns={2}
                    renderItem={({ item }) =>
                        <ProductCart item={item} navigation={this.props.navigation} />
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
