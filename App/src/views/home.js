import React, { Component } from 'react'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import { View, Text, StyleSheet, Image, ScrollView, FlatList, RefreshControl, TouchableOpacity } from 'react-native'

import SerchInput from '../components/serchInput/serchInput'
import Swiper from '../components/swiper/swiper'
import HomeGoods from '../components/goods/homeGoods'
import GoodsMustBuy from '../components/goods/goodsMustBuy'
import GoodsItem from '../components/goods/goodsItem'

import { scaleSize, setSpText2, screenW } from '../utils/ScreenUtil'

export default class extends Component {
    state = {
        isRefreshing: false,
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
        }],
        classifyTitle: ["白金尊享", "焕颜洗护", "全球味道", "妈咪宝贝", "轻奢生活", "精致厨房", "精品惠选", "口袋记忆"]
    }

    _onRefresh() {
        this.setState({
            isRefreshing: true
        })
        this.setState({
            isRefreshing: false
        })
    }
    _classify() {
        console.log("分类")
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SerchInput />
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={() => { this._onRefresh() }}
                            progressViewOffset={scaleSize(50)}
                            colors={['#ff0000', '#00ff00', '#0000ff', '#3ad564']}
                        />
                    }
                    showsVerticalScrollIndicator={false}
                    style={{ flex: 1, backgroundColor: "#FFF" }}>
                    <View style={{ width: screenW, height: 50, marginTop: scaleSize(44) }}>
                        <ScrollableTabView
                            renderTabBar={() => <ScrollableTabBar />}>
                            <View style={styles.back} tabLabel='20%分红'><Text></Text></View>
                            <View style={styles.back} tabLabel='30%分红'><Text></Text></View>
                            <View style={styles.back} tabLabel='40%分红'><Text></Text></View>
                        </ScrollableTabView>
                    </View>
                    <Swiper />
                    {/* 分类选项 */}
                    <View style={[styles.classifyStyle]}>
                        {this.state.classifyTitle.map(item => {
                            return <TouchableOpacity key={item} activeOpacity={1} onPress={() => { this._classify() }} style={styles.classifyItem}>
                                <View><Text style={styles.classFont}>{item}</Text></View>
                            </TouchableOpacity>
                        })}
                    </View>
                    <View style={styles.dividend}>
                        <View style={{ width: scaleSize(201), height: scaleSize(90), marginTop: scaleSize(10), alignItems: "center" }}>
                            <Text style={{ fontSize: setSpText2(12), color: "#9B9B9B" }}>分红倒计时</Text>
                            <Text style={{ fontSize: setSpText2(36), color: "#FF4D00" }}>02：58</Text>
                            <Text style={{ fontSize: setSpText2(14), color: "#FF6400" }}>今日交易：10000.00元</Text>
                        </View>
                    </View>
                    <HomeGoods goods={this.state.goods} navigation={this.props.navigation} />
                    <GoodsMustBuy goods={this.state.goods} navigation={this.props.navigation} />
                    <HomeGoods title="每日必逛" goods={this.state.goods} navigation={this.props.navigation} />
                    <HomeGoods title="潮玩推荐" goods={this.state.goods} navigation={this.props.navigation} />
                    <HomeGoods title="品质生活" goods={this.state.goods} navigation={this.props.navigation} />
                    <HomeGoods title="精品推荐" goods={this.state.goods} navigation={this.props.navigation} />
                    <View style={{ backgroundColor: "#F3F3F3", paddingHorizontal: scaleSize(8) }}>
                        <Text style={{ fontSize: setSpText2(14), color: "#000", marginVertical: scaleSize(10), textAlign: "center" }}>猜你喜欢</Text>
                        <FlatList
                            numColumns={2}
                            data={this.state.goods}
                            ItemSeparatorComponent={() => { return <View style={{ height: scaleSize(5) }}></View> }}
                            renderItem={({ item }) => (
                                <GoodsItem goods={item} navigation={this.props.navigation} />
                            )}
                            onEndReachedThreshold={0.1}
                            onEndReached={() => {
                                console.log("jiazai")
                            }}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    classifyStyle: {
        height: scaleSize(186),
        backgroundColor: "#FFF",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignContent: "space-between",
        padding: scaleSize(20)
    },
    classifyItem: {
        width: scaleSize(68),
        height: scaleSize(68),
        borderRadius: scaleSize(2),
        borderWidth: scaleSize(1),
        borderColor: "#979797",
        paddingHorizontal: scaleSize(20),
        paddingVertical: scaleSize(14)
    },
    classFont: {
        fontSize: setSpText2(14),
        width: scaleSize(28)
    },
    dividend: {
        height: scaleSize(100),
        backgroundColor: "#EEE",
        alignItems: "center"
    },
    TOP: {
        width: scaleSize(32),
        height: scaleSize(32),
        position: 'absolute',
        bottom: scaleSize(49),
        right: scaleSize(9),
        zIndex: 10
    }
})