
// 门店

import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native'

import { scaleSize, screenW } from '../../utils/ScreenUtil'


import StoreHead from '../../components/store/store_head'
import StoreBanner from '../../components/store/store_banner'
import StoreGoods from '../../components/store/store_goods'




export default class extends Component {
    state = {
        goods: [{
            id: 1,
            title: "商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1",
            price: "390.00",
            imgUrl: "../../static/images/goods.png"
        }, {
            id: 2,
            title: "商品1",
            price: "390.00",
            imgUrl: "../../static/images/goods.png"
        }, {
            id: 3,
            title: "商品1",
            price: "390.00",
            imgUrl: "../../static/images/goods.png"
        }, {
            id: 4,
            title: "商品1",
            price: "390.00",
            imgUrl: "../../static/images/goods.png"
        }, {
            id: 5,
            title: "商品1",
            price: "390.00",
            imgUrl: "../../static/images/goods.png"
        }, {
            id: 6,
            title: "商品1",
            price: "390.00",
            imgUrl: "../../static/images/goods.png"
        }, {
            id: 7,
            title: "商品1",
            price: "390.00",
            imgUrl: "../../static/images/goods.png"
        }]
    }
    render() {
        return (
            <View style={{ flex: 1, width: screenW, backgroundColor: "#F1F1F1" }}>
                <StoreHead navigation={this.props.navigation} />
                <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                    <StoreBanner />
                    <View style={{ padding: scaleSize(7) }}>
                        <FlatList
                            numColumns={2}
                            data={this.state.goods}
                            ItemSeparatorComponent={() => { return <View style={{ height: scaleSize(7) }}></View> }}
                            renderItem={({ item }) => (
                                <StoreGoods goods={item} navigation={this.props.navigation} />
                            )}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: scaleSize(44)
    }
})
