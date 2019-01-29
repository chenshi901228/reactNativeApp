import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

import { scaleSize, setSpText2, screenW, screenH } from '../../utils/ScreenUtil'


export default class extends Component {
    state = {
        selectAll: false,
        goods: [{
            id: 1,
            title: "商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1",
            price: "390.00",
            imgUrl: require("../../static/images/goods.png"),
            size: "100ml",
            isactive: false
        }, {
            id: 2,
            title: "商品1",
            price: "390.00",
            imgUrl: require("../../static/images/goods.png"),
            isactive: false
        }, {
            id: 3,
            title: "商品1",
            price: "390.00",
            imgUrl: require("../../static/images/goods.png"),
            size: "150ml",
            isactive: false
        }, {
            id: 4,
            title: "商品1",
            price: "390.00",
            imgUrl: require("../../static/images/goods.png")
        }, {
            id: 5,
            title: "商品1",
            price: "390.00",
            imgUrl: require("../../static/images/goods.png"),
            isactive: false
        }, {
            id: 6,
            title: "商品1",
            price: "390.00",
            imgUrl: require("../../static/images/goods.png"),
            isactive: false
        }, {
            id: 7,
            title: "商品1",
            price: "390.00",
            imgUrl: require("../../static/images/goods.png"),
            isactive: false
        }]
    }
    active(i) {
        this.state.goods[i].isactive = !this.state.goods[i].isactive
        this.setState(this.state)
        let t = this.state.goods.every((e) => {
            return e.isactive == true
        })
        if (t) {
            this.setState({ selectAll: true })
        } else {
            this.setState({ selectAll: false })
        }
    }
    pay() {
        console.log("付款")
    }
    selectAll() {
        if (this.state.selectAll) {
            this.state.goods.map(item => {
                item.isactive = false
            })
            this.state.selectAll = false
        } else {
            this.state.goods.map(item => {
                item.isactive = true
            })
            this.state.selectAll = true
        }
        this.setState(this.state)
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        this.state.goods.map((item, i) => {
                            return <View key={i} style={styles.item}>
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <TouchableOpacity onPress={() => { this.active(i) }}>
                                            <Image style={styles.selectBtn} source={item.isactive ? require('../../static/images/icon/isactive.png') : require('../../static/images/icon/noactive.png')} />
                                        </TouchableOpacity>
                                        <Image style={{ width: scaleSize(90), height: scaleSize(90), marginHorizontal: scaleSize(10) }} source={item.imgUrl} />
                                        <View style={{ height: scaleSize(90), justifyContent: "space-between" }}>
                                            <View>
                                                <Text numberOfLines={3} style={styles.title}>{item.title}</Text>
                                                {item.size ? <Text style={{ fontSize: setSpText2(12), color: "#9B9B9B" }}>{item.size}</Text> : <Text></Text>}
                                            </View>
                                            <View style={{ flexDirection: "row" }}>
                                                <Text style={{ fontSize: setSpText2(12), color: "#999", marginRight: scaleSize(10) }}>共2件商品</Text>
                                                <Text style={{ fontSize: setSpText2(12), color: "#666" }}>合计:￥520.00</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={{ alignSelf: "flex-start", alignItems: "flex-end", marginLeft: scaleSize(23) }}>
                                        <Text style={{ fontSize: setSpText2(12), color: "#FF5555" }}>等待付款</Text>
                                        <Text style={{ fontSize: setSpText2(11), color: "#999" }}>￥{item.price} ×2</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.goBtn}>
                                    <Text style={{ fontSize: setSpText2(12), color: "#999" }}>付款</Text>
                                </TouchableOpacity>
                            </View>
                        })
                    }
                </ScrollView>
                <View style={styles.bottom}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <TouchableOpacity style={{ marginRight: scaleSize(10) }} onPress={() => { this.selectAll() }}>
                            <Image style={[styles.selectBtn]} source={this.state.selectAll ? require('../../static/images/icon/isactive.png') : require('../../static/images/icon/noactive.png')} />
                        </TouchableOpacity>
                        <Text>全选</Text>
                    </View>
                    <TouchableOpacity onPress={() => { this.pay() }} style={styles.bottomBtn}>
                        <Text style={{ fontSize: setSpText2(13), color: "#FFF" }}>合并付款</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        height: scaleSize(142),
        backgroundColor: "#FFF",
        paddingHorizontal: scaleSize(10),
        paddingVertical: scaleSize(10),
        marginBottom: scaleSize(10)
    },
    selectBtn: {
        width: scaleSize(15),
        height: scaleSize(15)
    }
    ,
    title: {
        width: scaleSize(148),
        lineHeight: scaleSize(17),
        fontSize: setSpText2(12),
        color: "#333"
    },
    goBtn: {
        width: scaleSize(72),
        marginTop: scaleSize(10),
        borderWidth: scaleSize(1),
        borderColor: "#CDCDCD",
        paddingHorizontal: scaleSize(24),
        paddingVertical: scaleSize(3),
        borderRadius: scaleSize(11),
        alignSelf: "flex-end"
    },
    bottom: {
        width: screenW,
        height: scaleSize(46),
        backgroundColor: "#FFF",
        paddingHorizontal: scaleSize(10),
        paddingVertical: scaleSize(5),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        left: 0,
        bottom: 0
    },
    bottomBtn: {
        width: scaleSize(88),
        height: scaleSize(36),
        borderRadius: scaleSize(18),
        backgroundColor: "#FF6666",
        justifyContent: "center",
        alignItems: "center"
    }
})