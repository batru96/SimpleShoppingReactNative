import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import ListCartItem from './listcart/ListCartItem';
import Header from './header/Header';

class ListCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [1, 2, 3, 4, 5, 6]
        };
    }

    render() {
        const { container, button, buttonText } = styles;
        const { products } = this.state;
        return (
            <View style={container}>
                <Header navigation={this.props.navigation} isHome={false} />
                <FlatList
                    data={products}
                    renderItem={({ item }) => <ListCartItem item={item} />}
                    keyExtractor={item => item}
                />
                <TouchableOpacity style={button}>
                    <Text style={buttonText}>Thanh toan</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        backgroundColor: 'green',
        padding: 8,
        margin: 4
    },
    buttonText: {
        color: 'white',
        alignSelf: 'center'
    },
});

export default ListCart;
