// 商品详情 标题

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'


export default class extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle1}>￥{this.props.price}</Text>
                <Text numberOfLines={2} style={styles.textStyle2}>{this.props.title}</Text>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        // height: scaleSize(99),
        paddingTop: scaleSize(10),
        paddingLeft: scaleSize(10),
        paddingRight: scaleSize(23),
        paddingBottom: scaleSize(19),
        backgroundColor:"#FFF"
    },
    textStyle1: {
        fontSize: setSpText2(16),
        color: "#FF6666"
    },
    textStyle2: {
        fontSize: setSpText2(14),
        color: "#333",
        marginLeft: scaleSize(10),
        height:scaleSize(40),
        lineHeight:scaleSize(20)
    }
})