// 立即购买 地址栏

import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'



import { scaleSize, setSpText2, screenW } from '../../utils/ScreenUtil'


export default class extends Component {
    render() {
        return (
            <View style={styles.position}>
                <TouchableOpacity activeOpacity={1} onPress={() => { console.log("定位") }}>
                    <Image style={{ width: scaleSize(12), height: scaleSize(18) }} source={require('../../static/images/icon/position.png')} />
                </TouchableOpacity>
                <View style={{ width: scaleSize(300) }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: scaleSize(6) }}>
                        <Text style={styles.textStyle}>收货人：某某某</Text>
                        <Text style={styles.textStyle}>13678900742</Text>
                    </View>
                    <Text numberOfLines={2} style={[styles.textStyle, { lineHeight: scaleSize(17) }]}>收货地址：四川省成都市锦江区某某街道具体地址多少号几单元几栋几楼</Text>
                </View>
                <TouchableOpacity style={{ paddingVertical: scaleSize(40), paddingLeft: scaleSize(10) }} activeOpacity={1} onPress={() => { this.props.navigation.navigate("AddressChange") }}>
                    <Image style={{ width: scaleSize(6), height: scaleSize(11) }} source={require('../../static/images/icon/right_icon.png')} />
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    position: {
        width: screenW,
        height: scaleSize(94),
        backgroundColor: "#FFF",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: scaleSize(10),
        marginVertical: scaleSize(10)
    },
    textStyle: {
        fontSize: setSpText2(12),
        color: "#333"
    }
})