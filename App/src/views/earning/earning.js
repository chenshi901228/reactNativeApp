import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Text } from 'react-native'



import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'


import HeaderTitle from '../../components/common/headerTitle'
import Head from '../../components/earning/head'
import Tap from '../../components/earning/tap'
import Option from '../../components/earning/option'

export default class extends Component {
    state = {
        tap: [
            {
                title: "累计股权收益",
                money: 3690,
                msg: "通过自购或粉丝消费获得的所有股权"
            },
            {
                title: "累计现金奖励",
                money: 3690,
                msg: "通过推荐粉丝消费获得的所有现金奖励"
            },
            {
                title: "股权收益(元)",
                money: 0.00,
                msg: "通过自购或粉丝消费获得对应的股权"
            },
            {
                title: "现金奖励(元)",
                money: 0.00,
                msg: "通过推荐粉丝消费获得对应的现金奖励"
            }
        ]
    }
    render() {
        return (
            <View>
                <HeaderTitle title="收益报表" back={() => { this.props.navigation.goBack() }} />
                <ScrollView style={{ marginTop: scaleSize(44) }}>
                    <Head navigation={this.props.navigation} />
                    <View style={styles.table}>
                        <Tap content={this.state.tap[0]} border={true} />
                        <Tap content={this.state.tap[1]} />
                    </View>
                    <View style={styles.title}><Text style={{ fontSize: setSpText2(14), color: "#000" }}>今日收益</Text></View>
                    <View style={styles.table}>
                        <Tap content={this.state.tap[2]} border={true} />
                        <Tap content={this.state.tap[3]} />
                    </View>
                    <View style={{ height: scaleSize(10) }}></View>
                    <Option navigation={this.props.navigation} route="OrderDetail" title="订单结算明细" />
                    <Option navigation={this.props.navigation} route="Record" title="提现记录" />
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    title: {
        height: scaleSize(44),
        paddingHorizontal: scaleSize(10),
        backgroundColor: "#FFF",
        marginTop: scaleSize(10),
        borderBottomWidth: scaleSize(1),
        borderBottomColor: "#F2F3F2",
        justifyContent: "center"
    },
    table: {
        height: scaleSize(72),
        backgroundColor: "#FFF",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    },
})