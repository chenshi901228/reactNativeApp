// 商品详情 轮播图

import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'


import Swiper from 'react-native-swiper'

import { scaleSize, screenW, setSpText2 } from '../../utils/ScreenUtil'


const renderPagination = (index, total, context) => {
    return (
        <View style={styles.paginationStyle}>
            <Text style={styles.paginationText}>{index + 1}/{total}</Text>
        </View>
    )
}

export default class extends Component {
    render() {
        return <View style={styles.wrapper}>
            <Swiper renderPagination={renderPagination}>
                <Image style={styles.img} source={require('../../static/images/banner/3b3b1daed0dce0c799a32c9f36432d70.jpeg')} />
                <Image style={styles.img} source={require('../../static/images/banner/3e5c275c66be3720c22bc733a510566a.jpeg')} />
                <Image style={styles.img} source={require('../../static/images/banner/0945e0788173bab07dfba3e36f64ffeb.jpg')} />
            </Swiper>
        </View>

    }
}


const styles = StyleSheet.create({
    img: {
        flex: 1,
        width: screenW
    },
    wrapper: {
        width: screenW,
        height: scaleSize(347)
    },
    paginationStyle: {
        width: scaleSize(43),
        height: scaleSize(19),
        borderRadius: scaleSize(10),
        backgroundColor: "rgba(0,0,0,0.3)",
        alignItems: "center",
        justifyContent: "center",
        position: 'absolute',
        bottom: scaleSize(10),
        right: scaleSize(10)
    },
    paginationText: {
        color: '#FFF',
        fontSize: setSpText2(12)
    }
})