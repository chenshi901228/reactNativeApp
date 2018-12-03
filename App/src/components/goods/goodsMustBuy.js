
// 必买好货 商品列表

import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'

import GoodsMustBuyItem from './goodsMustBuyItem'


export default class extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "#D1D1D1", paddingHorizontal: scaleSize(8) }}>
                <Text style={{ fontSize: scaleSize(14), color: "#000", textAlign: "center", marginTop: scaleSize(10) }}>必买好货</Text>
                <ScrollView style={{ marginVertical: scaleSize(9) }}
                    showsHorizontalScrollIndicator={false}
                    horizontal>
                    {this.props.goods.map(item => {
                        return <GoodsMustBuyItem key={item.id} goods={item} navigation={this.props.navigation} />
                    })}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
})