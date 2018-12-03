import React, { Component } from 'react'
import { View, ScrollView, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'


import { scaleSize, setSpText2, screenW } from '../utils/ScreenUtil'

import Goods_head from '../components/goodsDetails/goodsDetails_head'
import Banner_goods from '../components/goodsDetails/goodsDetails_banner'
import Goods_title from '../components/goodsDetails/goodsDetails_title'
import Goods_sale from '../components/goodsDetails/goodsDetails_sale'
import Goods_store from '../components/goodsDetails/goodsDetails_store'
import Goods_bottom from '../components/goodsDetails/goodsDetails_bottom'
import Goods_show from '../components/goodsDetails/goodsDetails_show'




export default class extends Component {
    render() {
        const goods = this.props.navigation.getParam("goodsDetails")
        return (
            <View style={{ paddingBottom: scaleSize(48) }}>
                <ScrollView
                    style={styles.container}
                    showsVerticalScrollIndicator={false}>
                    <Goods_head navigation={this.props.navigation} />
                    <Banner_goods />
                    <Goods_title {...goods} />
                    <Goods_sale />
                    <Goods_store />
                    <Goods_show />
                </ScrollView>
                <Goods_bottom />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F3F3F3"
    }
})