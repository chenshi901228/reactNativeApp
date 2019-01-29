import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'


import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'

import HeaderTitle from '../../components/common/headerTitle'
import UserInfo from '../../components/dividend/userInfo'
import Item from '../../components/dividend/item'



export default class extends Component {
    state = {
        stock: [
            {
                title: { name: "我的股权", num: 12300 },
                content: [
                    {
                        name: "自有股(达到2倍出局，自动清盘)",
                        num: 10000
                    },
                    {
                        name: "直属粉丝股",
                        num: 1500
                    },
                    {
                        name: "直属粉丝邀请股",
                        num: 800
                    }
                ]
            },
            {
                title: { name: "未到账股权", num: 0 },
                content: [
                    {
                        name: "直属粉丝邀请股",
                        num: 0
                    }
                ]
            }
        ]
    }
    render() {
        return (
            <View>
                <HeaderTitle title="分红中心" back={() => { this.props.navigation.goBack() }} />
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: scaleSize(44) }}>
                    <UserInfo />
                    {this.state.stock.map((item, i) => {
                        return <Item key={i} stock={item} />
                    })}
                </ScrollView>
            </View>
        )
    }
}