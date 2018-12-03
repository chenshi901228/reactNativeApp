// 商品详情 标题

import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'


import { scaleSize, screenW } from '../../utils/ScreenUtil'


export default class extends Component {
    _addshopping() {
        console.log("加入购物车")
    }
    _nowbuy() {
        console.log("立即购买")
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity activeOpacity={1} onPress={() => { this._addshopping() }}>
                    <Image style={styles.imgStyle} source={require("../../static/images/icon/addShopping.png")} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => { this._nowbuy() }}>
                    <Image style={styles.imgStyle} source={require("../../static/images/icon/nowBuy.png")} />
                </TouchableOpacity>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        width: screenW,
        backgroundColor: "#FFF",
        paddingTop: scaleSize(6),
        paddingRight: scaleSize(4),
        paddingBottom: scaleSize(4),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        position: "absolute",
        bottom: 0,
        left: 0
    },
    imgStyle: {
        width: scaleSize(104),
        height: scaleSize(38)
    }
})