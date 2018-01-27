import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import ProductSwiper from './swiper/ProductSwiper';
import Header from './header/Header';

class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details: [
                'Thương hiệu: Samsung', 'Model: Galaxy J2 Prime',
                'Phụ kiện đi kèm: Sạc, tai nghe, sách hướng dẫn',
                'Loại / Công nghệ màn hình: IPS LCD', 'Kích thước màn hình: 5 inch',
                'Độ phân giải màn hình: 540 x 960 pixels', 'Camera: 8MP - 5MP',
                'Tính năng camera: Tự động lấy nét, Chạm lấy nét, Nhận diện khuôn mặt',
                'Đèn Flash: Có', 'Videocall: Hỗ trợ VideoCall thông qua ứng dụng',
                'Bộ Nhớ RAM: 1.5Gb',
            ]
        };
    }
    render() {
        const { content, container, addCartButton, addCartText, title } = styles;
        return (
            <View style={container}>
                <Header navigation={this.props.navigation} isHome={false} />
                <ProductSwiper />
                <Text style={title}>Thông tin chi tiết</Text>
                <FlatList
                    style={content}
                    data={this.state.details}
                    renderItem={({ item }) => <Text>{item}</Text>}
                    keyExtractor={item => item}
                />
                <TouchableOpacity style={addCartButton}>
                    <Text style={addCartText}>Thêm vào giỏ</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue'
    },
    title: {
        fontSize: 20,
        fontStyle: 'italic',
        alignSelf: 'center'
    },
    content: {
        flex: 1,
        paddingHorizontal: 8
    },
    addCartButton: {
        backgroundColor: 'yellow',
        padding: 8,
        alignItems: 'center',
        margin: 4,
        borderWidth: 1,
        borderRadius: 4,
    },
    addCartText: {
        fontWeight: 'bold',
        color: 'black'
    }
});

export default ProductDetail;
