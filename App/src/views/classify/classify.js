import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'


import { scaleSize, screenW, setSpText2 } from '../../utils/ScreenUtil'


import StoreHead from '../../components/store/store_head'
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
                <ScrollableTabView
                    tabBarUnderlineStyle={{ height: scaleSize(4), borderRadius: scaleSize(2), backgroundColor: "#FF6666" }}
                    tabBarBackgroundColor='#fff'
                    tabBarActiveTextColor='#000'
                    tabBarTextStyle={{ fontSize: setSpText2(14) }}
                    style={{ marginTop: scaleSize(44) }}
                    renderTabBar={() => <ScrollableTabBar />}>
                    <View tabLabel='默认' style={{ padding: scaleSize(7) }}>
                        <FlatList
                            numColumns={2}
                            data={this.state.goods}
                            ItemSeparatorComponent={() => { return <View style={{ height: scaleSize(7) }}></View> }}
                            renderItem={({ item }) => (
                                <StoreGoods goods={item} navigation={this.props.navigation} />
                            )}
                        />
                    </View>
                    <View tabLabel='销量'></View>
                    <View tabLabel='价格'></View>
                </ScrollableTabView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: scaleSize(44)
    }
})