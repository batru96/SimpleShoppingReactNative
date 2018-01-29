import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, FlatList, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Header from './header/Header';
import ProductCart from './product/ProductCart';
import ProductSwiper from './swiper/ProductSwiper';
import image1 from '../../icons/image1.jpg';

class Main extends Component {
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
            searchText: '',
        };
    }

    render() {
        const { container, productContainer, newProductTitle, input } = styles;
        const { products, searchText } = this.state;
        const { navigation, isSearching } = this.props;
        return (
            <View style={container}>
                <ScrollView>
                    <Header isHome navigation={navigation} />
                    {
                        isSearching ?
                            <TextInput
                                style={input}
                                value={searchText}
                                placeholder="What are you looking for?"
                                onChangeText={text => this.setState({ searchText: text })}
                            /> : null
                    }
                    <ProductSwiper />
                    <View style={productContainer}>
                        <Text style={newProductTitle}>Sản phẩm mới nhất</Text>
                        <FlatList
                            data={products}
                            keyExtractor={item => item.id}
                            numColumns={2}
                            renderItem={({ item }) =>
                                <ProductCart navigation={navigation} item={item} />
                            }
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
    input: {
        backgroundColor: 'lightblue',
        paddingHorizontal: 8
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

function mapStateToProps(state) {
    return {
        isSearching: state.isSearching
    };
}

export default connect(mapStateToProps)(Main);
