// 商品详情 标题

import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'


import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'


export default class extends Component {
    _choose() {
        console.log("选择规格")
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.currentStyle, { borderBottomWidth: scaleSize(1), borderBottomColor: "#F2F3F2" }]}>
                    <Text style={styles.textStyle}>促销</Text>
                    <Image style={{ width: scaleSize(36), height: scaleSize(18), marginRight: scaleSize(12) }} source={require("../../static/images/icon/pinkage.png")} />
                    <Text numberOfLines={1} style={styles.textStyle1}>满98元，部分地区享包邮满98元，部分地区享包邮满98元，部分地区享包邮</Text>
                </View>
                <TouchableOpacity activeOpacity={1} onPress={() => { this._choose() }}>
                    <View style={[styles.currentStyle, { justifyContent: "space-between" }]}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={styles.textStyle}>已选</Text>
                            <Text numberOfLines={1} style={styles.textStyle1}>100ml×1</Text>
                        </View>
                        <Image style={{ width: scaleSize(6), height: scaleSize(11) }} source={require("../../static/images/icon/choice.png")} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        marginTop: scaleSize(10)
    },
    currentStyle: {
        paddingVertical: scaleSize(13),
        paddingHorizontal: scaleSize(10),
        flexDirection: "row",
        alignItems: "center"
    },
    textStyle: {
        fontSize: setSpText2(14),
        color: "#666",
        marginRight: scaleSize(12)
    },
    textStyle1: {
        fontSize: setSpText2(13),
        color: "#666",
        width: scaleSize(267)
    }
})