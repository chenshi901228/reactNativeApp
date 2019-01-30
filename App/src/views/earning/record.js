import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'



import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'

import HeaderTitle from '../../components/common/headerTitle'
import Item from '../../components/earning/recordItem'


export default class extends Component {
    state = {
        list: [
            {
                title: "支付宝",
                date: "2018-11-25",
                money: 240
            },
            {
                title: "支付宝",
                date: "2018-11-22",
                money: 1000
            },
            {
                title: "支付宝",
                date: "2018-11-25",
                money: 450
            }, {
                title: "支付宝",
                date: "2018-11-5",
                money: 3000
            }
        ]
    }
    render() {
        return (
            <View>
                <HeaderTitle title="提现记录" back={() => { this.props.navigation.goBack() }} />
                <ScrollView style={{ marginTop: scaleSize(44) }}>
                    <View style={styles.head}>
                        <Text style={{ fontSize: setSpText2(13), color: "#666" }}>本月：</Text>
                        <Text style={{ fontSize: setSpText2(12), color: "#999", marginTop: scaleSize(3) }}>累计提现：￥4563.00</Text>
                    </View>
                    {
                        this.state.list.map((item, i) => {
                            return <Item key={i} item={item} />
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    head: {
        height: scaleSize(56),
        paddingTop: scaleSize(8),
        paddingLeft: scaleSize(10)
    }
})