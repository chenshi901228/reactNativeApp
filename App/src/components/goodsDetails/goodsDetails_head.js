// 商品详情 标题

import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'


import { scaleSize, setSpText2, screenW } from '../../utils/ScreenUtil'


export default class extends Component {
    render() {
        return (
            <View style={styles.headerStyle}>
                <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.goBack() }}>
                    <Image style={{ width: scaleSize(30), height: scaleSize(30) }} source={require("../../static/images/icon/back.png")} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.goBack() }}>
                    <Image style={{ width: scaleSize(30), height: scaleSize(30) }} source={require("../../static/images/icon/share.png")} />
                </TouchableOpacity>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    headerStyle: {
        width: screenW,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: scaleSize(10),
        paddingTop: scaleSize(13),
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 10
    }
})