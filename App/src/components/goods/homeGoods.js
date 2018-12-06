// 首页一般商品列表


import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'

const url = '../../static/images/goods.png'

function IsTitle(props) {
    if (props.title) {
        return <Text style={styles.textStyle}>{props.title}</Text>
    } else {
        return <View></View>
    }
}

export default class extends Component {
    _toGoodsDetails(goodsDetails) {
        this.props.navigation.navigate("GoodsDetails", { "goodsDetails": goodsDetails })
    }
    render() {
        return (
            <View style={styles.container}>
                <IsTitle title={this.props.title} />
                <View style={styles.goodsStyle}>
                    {this.props.goods.slice(0, 4).map((item, index) => {
                        return <TouchableOpacity key={index} onPress={() => { this._toGoodsDetails(item) }} activeOpacity={1}>
                            <Image style={styles.imgStyle} source={require('../../static/images/goods.png')} />
                        </TouchableOpacity>
                    })}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#F3F3F3"
    },
    textStyle: {
        fontSize: setSpText2(14),
        color: "#000",
        marginTop: scaleSize(10)
    },
    goodsStyle: {
        height: scaleSize(259),
        padding: scaleSize(8),
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignContent: "space-between"
    },
    imgStyle: {
        width: scaleSize(178),
        height: scaleSize(120)
    }
})