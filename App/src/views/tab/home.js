
// 首页
import React, { Component } from 'react'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import { View, Text, StyleSheet, Image, ScrollView, FlatList, RefreshControl, TouchableOpacity } from 'react-native'

import SerchInput from '../../components/serchInput/serchInput'
import Swiper from '../../components/swiper/swiper'
import HomeGoods from '../../components/goods/homeGoods'
import GoodsMustBuy from '../../components/goods/goodsMustBuy'
import GoodsItem from '../../components/goods/goodsItem'

import { scaleSize, setSpText2, screenW } from '../../utils/ScreenUtil'

export default class extends Component {
    state = {
        isRefreshing: false,
        goods: [{
            id: 1,
            title: "商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1",
            price: "310.00",
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
        classifyTitle: ["白金尊享", "焕颜洗护", "全球味道", "妈咪宝贝", "轻奢生活", "精致厨房", "精品惠选", "口袋记忆"],
        countDown: "2019/2/13 12:00:00",
        leftTime: "00:00:00"
    }

    _onRefresh() {
        this.setState({
            isRefreshing: true
        })
        this.setState({
            isRefreshing: false
        })
    }
    classify() {
        this.props.navigation.navigate("Classify")
    }
    countDown() {
        clearInterval(this.timer)
        let nowtime = + new Date()
        let endtime = + new Date(this.state.countDown)
        let leftTime = endtime - nowtime
        if (leftTime >= 0) {
            this.timer = setInterval(() => {
                let d, h, m, s, str
                d = Math.floor(leftTime / 1000 / 60 / 60 / 24)
                h = Math.floor(leftTime / 1000 / 60 / 60 % 24)
                m = Math.floor(leftTime / 1000 / 60 % 60)
                s = Math.floor(leftTime / 1000 % 60)
                str = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s)
                this.setState({
                    leftTime: str
                }, () => {
                    this.countDown()
                })
            }, 1000)
        } else {
            this.setState({
                leftTime: "00:00:00"
            })
            clearInterval(this.timer)
        }
    }
    componentDidMount() {
        this.countDown()
    }
    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SerchInput />
                <ScrollableTabView
                    tabBarUnderlineStyle={{ height: scaleSize(4), borderRadius: scaleSize(2), backgroundColor: "#FF6666" }}
                    tabBarBackgroundColor='#fff'
                    tabBarActiveTextColor='#000'
                    tabBarTextStyle={{ fontSize: setSpText2(14) }}
                    style={{ marginTop: scaleSize(44) }}
                    renderTabBar={() => <ScrollableTabBar />}>
                    <View tabLabel='首页'>
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
                            style={{ backgroundColor: "#FFF" }}>
                            <Swiper />
                            {/* 分类选项 */}
                            <View style={[styles.classifyStyle]}>
                                {this.state.classifyTitle.map((item, index) => {
                                    return <TouchableOpacity key={index} activeOpacity={0.7} onPress={() => { this.classify() }} style={styles.classifyItem}>
                                        <Text style={styles.classFont}>{item}</Text>
                                    </TouchableOpacity>
                                })}
                            </View>
                            <View style={styles.dividend}>
                                <View style={{ width: scaleSize(201), height: scaleSize(90), marginTop: scaleSize(10), alignItems: "center" }}>
                                    <Text style={{ fontSize: setSpText2(12), color: "#9B9B9B" }}>分红倒计时</Text>
                                    <Text style={{ fontSize: setSpText2(36), color: "#FF4D00" }}>{this.state.leftTime}</Text>
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
                    <View tabLabel='选项1'><Text>选项1</Text></View>
                    <View tabLabel='选项2'><Text>选项2</Text></View>
                </ScrollableTabView>
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
        alignItems: "center",
        justifyContent: "center"
    },
    classFont: {
        fontSize: setSpText2(14),
        width: scaleSize(30),
        textAlign: "center",
        lineHeight: scaleSize(20)
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