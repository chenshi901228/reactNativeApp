// 立即购买

import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native'

import HeaderTitle from '../components/headerTitle/headerTitle'
import Address from '../components/nowbuy/nowbuy_address'
import Shop from '../components/nowbuy/nowbuy_shop'


import { scaleSize, setSpText2, screenW, screenH } from '../utils/ScreenUtil'

export default class extends Component {
    state = {
        goodsNumber: "1"
    }
    increment() {
        let newNum = parseInt(this.state.goodsNumber)
        newNum++
        this.setState({
            goodsNumber: newNum + ""
        })
    }
    decrement() {
        let newNum = parseInt(this.state.goodsNumber)
        if (newNum > 1) {
            newNum--
            this.setState({
                goodsNumber: newNum + ""
            })
        }
    }
    changeNum(text) {
        if (parseInt(text) >= 1) {
            this.setState({
                goodsNumber: text
            })
        } else {
            this.setState({
                goodsNumber: "1"
            })
        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#F3F3F3" }}>
                <HeaderTitle title="确认订单" navigation={this.props.navigation} color="#FFF" />
                <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                    <Address navigation={this.props.navigation} />
                    <Shop num={this.state.goodsNumber} />
                    <View style={[styles.item, styles.borderTop]}>
                        <Text style={styles.title}>购买数量</Text>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity activeOpacity={1} onPress={() => { this.decrement() }} style={styles.numberBtn}>
                                <Text style={{ fontSize: setSpText2(16) }}>-</Text>
                            </TouchableOpacity>
                            <TextInput style={styles.inputStyle} keyboardType="numeric" underlineColorAndroid="transparent" value={this.state.goodsNumber} onChangeText={(text) => this.changeNum(text)} />
                            <TouchableOpacity activeOpacity={1} onPress={() => { this.increment() }} style={styles.numberBtn}>
                                <Text style={{ fontSize: setSpText2(16) }}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={[styles.item, styles.borderTop]}>
                        <Text style={styles.title}>配送方式</Text>
                        <Text style={{ fontSize: setSpText2(13), color: "#666" }}>快递 免邮</Text>
                    </View>
                    <View style={[styles.item1, styles.borderTop]}>
                        <Text style={{ fontSize: setSpText2(12), color: "#666", marginRight: scaleSize(10) }}>共1件商品</Text>
                        <Text style={{ fontSize: setSpText2(13), color: "#999" }}>小计：</Text>
                        <Text style={{ fontSize: setSpText2(13), color: "#FF6666" }}>￥12554</Text>
                    </View>
                </ScrollView>
                <View style={styles.bottom}>
                    <Text style={{ fontSize: setSpText2(13), color: "#999" }}>合计金额：</Text>
                    <Text style={{ fontSize: setSpText2(13), color: "#FF6666" }}>￥12554</Text>
                    <TouchableOpacity style={styles.subButton} activeOpacity={1} onPress={() => { console.log(this.state) }}>
                        <Text style={{ fontSize: setSpText2(14), color: "#FFF" }}>提交订单</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        width: screenW,
        paddingTop: scaleSize(44)
    },
    title: {
        fontSize: setSpText2(14),
        color: "#666"
    },
    item: {
        height: scaleSize(44),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFF",
        paddingHorizontal: scaleSize(10),
    },
    item1: {
        height: scaleSize(44),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "#FFF",
        paddingHorizontal: scaleSize(10),
    },
    bottom: {
        width: screenW,
        height: scaleSize(44),
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: 20,
        flexDirection: "row",
        backgroundColor: "#FFF",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    subButton: {
        width: scaleSize(113),
        height: scaleSize(44),
        marginLeft: scaleSize(10),
        backgroundColor: "#4A4A4A",
        alignItems: "center",
        justifyContent: "center"
    },
    choiceBtn: {
        width: scaleSize(76),
        height: scaleSize(21),
        backgroundColor: "#E9E9E9",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: scaleSize(5),
        marginRight: scaleSize(10),
        marginBottom: scaleSize(10)
    },
    inputStyle: {
        width: scaleSize(34),
        height: scaleSize(21),
        padding: 0,
        marginLeft: scaleSize(1),
        textAlign: "center",
        backgroundColor: "#D8D8D8",
        fontSize: setSpText2(13)
    },
    numberBtn: {
        width: scaleSize(20),
        height: scaleSize(21),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D8D8D8"
    },
    borderTop: {
        borderTopWidth: scaleSize(1),
        borderTopColor: "#F2F3F2"
    }
})