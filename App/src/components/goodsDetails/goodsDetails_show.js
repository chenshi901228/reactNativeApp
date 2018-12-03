// 商品详情 标题

import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'


import { scaleSize, screenW, screenH } from '../../utils/ScreenUtil'

const imgs = [
    { imgUrl: "../../static/images/goodsDetails.png" },
    { imgUrl: "../../static/images/goodsDetails1.png" }
]

export default class extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.imgStyle} source={require("../../static/images/goodsDetails.jpg")} />
                <Image style={styles.imgStyle} source={require("../../static/images/goodsDetails1.jpg")} />
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        width: screenW,
        backgroundColor: "#FFF",
        marginTop: scaleSize(10)
    },
    imgStyle: {
        width: screenW,
        height: screenH / 2,
    }
})