
// 猜你喜欢商品

import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'



export default class extends Component {
    _toGoodsDetails(goodsDetails) {
        this.props.navigation.navigate("goodsDetails", { "goodsDetails": goodsDetails })
    }
    render() {
        return (
            <TouchableOpacity style={styles.goodsStyle} activeOpacity={1} onPress={() => { this._toGoodsDetails(this.props.goods) }}>
                <View>
                    <Image style={styles.imgStyle} source={require('../../static/images/cs.jpg')} />
                    <View style={{ padding: scaleSize(10) }}>
                        <Text numberOfLines={2} style={{ fontSize: scaleSize(12), color: "#000", height: scaleSize(34) }}>{this.props.goods.title}</Text>
                        <Text style={{ fontSize: setSpText2(14), color: "#FF5555", marginTop: scaleSize(5) }}>￥{this.props.goods.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    goodsStyle: {
        width: scaleSize(177),
        height: scaleSize(256),
        backgroundColor: "#FFF",
        borderRadius: scaleSize(3),
        marginRight: scaleSize(5)
    },
    imgStyle: {
        width: scaleSize(177),
        height: scaleSize(177)
    }
})