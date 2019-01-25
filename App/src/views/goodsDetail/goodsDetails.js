
// 商品详情
import React, { Component } from 'react'
import Modal from 'react-native-modalbox'
import { View, ScrollView, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

import { scaleSize, setSpText2, screenW, screenH } from '../../utils/ScreenUtil'

import Goods_head from '../../components/goodsDetails/goodsDetails_head'
import Banner_goods from '../../components/goodsDetails/goodsDetails_banner'
import Goods_title from '../../components/goodsDetails/goodsDetails_title'
import Goods_sale from '../../components/goodsDetails/goodsDetails_sale'
import Goods_store from '../../components/goodsDetails/goodsDetails_store'
import Goods_bottom from '../../components/goodsDetails/goodsDetails_bottom'
import Goods_show from '../../components/goodsDetails/goodsDetails_show'
import Goods_addshop from '../../components/goodsDetails/goodsDetails_addshop'




export default class extends Component {
    handleAddshop() {
        this.refs.modal.open()
    }
    toNowBuy(goods) {
        this.props.navigation.navigate("BuyNow", { goods })
    }
    render() {
        const goods = this.props.navigation.getParam("goodsDetails")
        return (
            <View style={{ paddingBottom: scaleSize(48), flex: 1 }}>
                <ScrollView
                    style={styles.container}
                    showsVerticalScrollIndicator={false}>
                    <Goods_head navigation={this.props.navigation} />
                    <Banner_goods />
                    <Goods_title {...goods} />
                    <Goods_sale />
                    <Goods_store navigation={this.props.navigation} />
                    <Goods_show />
                </ScrollView>
                <Goods_bottom handleNowBuy={() => { this.toNowBuy(goods) }} handleAddshop={this.handleAddshop.bind(this)} navigation={this.props.navigation} />
                <Modal style={[styles.modal]}
                    position={"bottom"}
                    ref={"modal"}
                    backdropPressToClose={true}
                    backButtonClose={true}
                    swipeArea={scaleSize(20)}>
                    <Goods_addshop />
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F3F3F3"
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        height: screenH / 2
    }
})