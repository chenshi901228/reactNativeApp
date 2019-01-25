// 立即购买 商品参数


import React, { Component } from 'react'
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'



import { scaleSize, setSpText2, screenW } from '../../utils/ScreenUtil'


export default class extends Component {
    render() {
        const _this = this.props
        return (
            <View style={[styles.shop]}>
                <Image style={styles.imgStyle} source={require('../../static/images/goodsDetails.jpg')} />
                <View style={{ width: scaleSize(263), height: scaleSize(82), justifyContent: "space-between" }}>
                    <Text style={{ fontSize: setSpText2(12), color: "#333", lineHeight: scaleSize(17) }} numberOfLines={2}>{_this.goods.title}</Text>
                    <Text style={{ fontSize: setSpText2(12), color: "#999" }}>商品参数：100ml</Text>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: scaleSize(10) }}>
                        <Text style={{ fontSize: setSpText2(14), color: "#FF6666" }}>￥{_this.goods.price}</Text>
                        <Text style={{ fontSize: setSpText2(12), color: "#999" }}>×{_this.goodsNumber}</Text>
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    shop: {
        width: screenW,
        height: scaleSize(100),
        flexDirection: "row",
        alignItems: "flex-end",
        backgroundColor: "#FAFAFA",
        paddingHorizontal: scaleSize(10),
        paddingVertical: scaleSize(9)
    }, imgStyle: {
        width: scaleSize(82),
        height: scaleSize(82),
        marginRight: scaleSize(10)
    }
})