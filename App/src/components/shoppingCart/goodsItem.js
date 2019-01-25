import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'


import GoodsNumChose from '../common/goodsNumChose'

export default class extends Component {
    render() {
        const _this = this.props
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => { _this.handleActive() }}>
                    {_this.goods.isactive ?
                        <Image style={styles.choseBtn} source={require("../../static/images/icon/isactive.png")} /> :
                        <Image style={styles.choseBtn} source={require("../../static/images/icon/noactive.png")} />
                    }
                </TouchableOpacity>
                <Image style={styles.goodsImg} source={require('../../static/images/goods.jpg')} />
                <View style={{ height: scaleSize(90), justifyContent: "space-between" }}>
                    <View>
                        <Text
                            style={{ width: scaleSize(225), color: '#333', fontSize: setSpText2(12), lineHeight: scaleSize(17) }}
                            numberOfLines={2}
                        >
                            {_this.goods.title}</Text>
                        <Text style={{ color: "#9B9B9B", fontSize: setSpText2(12) }}>{_this.goods.size ? _this.goods.size : ""}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ fontSize: setSpText2(14), color: "#FF5555" }}>￥{_this.goods.price}</Text>
                        <GoodsNumChose />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        height: scaleSize(110),
        marginTop: scaleSize(10),
        paddingVertical: scaleSize(10),
        paddingHorizontal: scaleSize(10)
    },
    choseBtn: {
        width: scaleSize(17),
        height: scaleSize(17)
    },
    goodsImg: {
        width: scaleSize(90),
        height: scaleSize(90),
        marginHorizontal: scaleSize(10)
    }
})