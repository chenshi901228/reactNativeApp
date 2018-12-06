
// 必买好货 商品Item

import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'

import Tag from './tag'


export default class extends Component {
    _toGoodsDetails(goodsDetails) {
        this.props.navigation.navigate("GoodsDetails", { "goodsDetails": goodsDetails })
    }
    render() {
        return (
            <TouchableOpacity activeOpacity={1} onPress={() => { this._toGoodsDetails(this.props.goods) }} style={styles.goodsStyle}>
                <Image style={styles.imgStyle} source={require('../../static/images/goods.png')} />
                <View style={{ width: scaleSize(144) }}>
                    <Text style={{ fontSize: setSpText2(12), marginBottom: scaleSize(4), height: scaleSize(34) }} numberOfLines={2}>{this.props.goods.title}</Text>
                    <Tag title="今日特价" />
                    <Text style={{ fontSize: setSpText2(12), color: "#FF6666", marginTop: scaleSize(10) }}>￥{this.props.goods.price}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    goodsStyle: {
        flexDirection: "row",
        paddingVertical: scaleSize(10),
        width: scaleSize(245),
        height: scaleSize(103),
        backgroundColor: "#FFF",
        borderRadius: scaleSize(2),
        marginRight: scaleSize(8)
    },
    imgStyle: {
        width: scaleSize(65),
        height: scaleSize(83),
        marginHorizontal: scaleSize(10)
    }
})