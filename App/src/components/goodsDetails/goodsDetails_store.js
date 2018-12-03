// 商品详情 标题

import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'


import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'


export default class extends Component {
    _goBrand() {
        console.log("进入店铺")
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.currentStyle}>
                    <Image style={{ width: scaleSize(48), height: scaleSize(48), marginRight: scaleSize(11) }} source={require("../../static/images/storeImg.png")} />
                    <Text numberOfLines={1} style={styles.textStyle}>Jo Malone LondonJo Malone LondonJo Malone LondonJo Malone LondonJo Malone LondonJo Malone LondonJo Malone London</Text>
                </View>
                <TouchableOpacity activeOpacity={1} onPress={() => { this._goBrand() }}>
                    <Image style={{ width: scaleSize(66), height: scaleSize(24) }} source={require("../../static/images/icon/goBrand.png")} />
                </TouchableOpacity>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        padding: scaleSize(10),
        marginTop: scaleSize(10),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    currentStyle: {
        flexDirection: "row",
        alignItems: "center"
    },
    textStyle: {
        width: scaleSize(231),
        fontSize: setSpText2(13),
        color: "#000"
    }
})