import React, { Component } from 'react'
import { View, ScrollView, Text, ProgressBarAndroid } from 'react-native'

import { scaleSize } from '../../utils/ScreenUtil'

import UserInfo from '../../components/mine/userInfo'
import Account from '../../components/mine/account'
import Title from '../../components/mine/title'
import Item from '../../components/mine/item'
import ItemPratner from '../../components/mine/itemPartner'

export default class extends Component {
    state = {
        order: [
            {
                text: "待付款",
                img: require('../../static/images/icon/obligation.png')
            },
            {
                text: "待发货",
                img: require('../../static/images/icon/delivery.png')
            },
            {
                text: "待收货",
                img: require('../../static/images/icon/receiving.png')
            }, {
                text: "已完成",
                img: require('../../static/images/icon/complete.png')
            }
        ],
        partner: [
            {
                text: "收益报表",
                img: require('../../static/images/icon/rule.png')
            },
            {
                text: "我的粉丝",
                img: require('../../static/images/icon/fans.png'),
                route: "Myfans"
            },
            {
                text: "粉丝订单",
                img: require('../../static/images/icon/order.png'),
                route: "Order",
                key: "fans"
            }
        ]
    }
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <UserInfo />
                <Account />
                <Title navigation={this.props.navigation} title="我的订单" right={true} rightText="查看全部" route="Order" />
                <Item navigation={this.props.navigation} items={this.state.order} route="Order" />
                <Title title="合伙人中心" right={false} />
                <ItemPratner navigation={this.props.navigation} items={this.state.partner} />
                <Title navigation={this.props.navigation} title="分红中心" right={true} route="Dividend" />
                <View style={{ height: scaleSize(20) }}></View>
            </ScrollView>
        )
    }
}

