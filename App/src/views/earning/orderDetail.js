import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'



import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'

import HeaderTitle from '../../components/common/headerTitle'
import Item from '../../components/earning/orderDetailItem'

export default class extends Component {
    state = {
        list: [
            {
                title: "直属粉丝邀请订单",
                name: "800股",
                date: "2018-11-25",
                earnings: 240
            },
            {
                title: "直属粉丝订单奖励",
                name: "1000元现金奖励",
                date: "2018-11-22",
                earnings: 1000
            },
            {
                title: "直属粉丝订单",
                name: "1500股",
                date: "2018-11-25",
                earnings: 450
            }, {
                title: "自购订单",
                name: "10000股",
                date: "2018-11-5",
                earnings: 3000
            }
        ]
    }
    render() {
        return (
            <View>
                <HeaderTitle title="订单结算明细" back={() => { this.props.navigation.goBack() }} />
                <ScrollView style={{ marginTop: scaleSize(44) }}>
                    <View style={styles.head}>
                        <Text style={{ fontSize: setSpText2(13), color: "#666" }}>本月：</Text>
                        <Text style={{ fontSize: setSpText2(12), color: "#999", marginTop: scaleSize(3) }}>累计收益：￥4563.00</Text>
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