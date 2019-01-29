import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'



import { scaleSize } from '../../utils/ScreenUtil'

import HeaderTitle from '../../components/common/headerTitle'
import Msg from '../../components/logistics/message'

export default class extends Component {
    componentDidMount() {
        const goods = this.props.navigation.getParam("goods")
        console.log(goods)
    }
    render() {
        return (
            <View>
                <HeaderTitle title="查看物流" back={() => { this.props.navigation.goBack() }} />
                <ScrollView style={{ marginTop: scaleSize(44), paddingHorizontal: scaleSize(10), paddingVertical: scaleSize(10) }}>
                    <Msg />
                </ScrollView>
            </View>
        )
    }
}