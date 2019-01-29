import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'


export default class extends Component {
    state = {
        goods: [{
            id: 1,
            title: "商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1",
            price: "390.00",
            imgUrl: require("../../static/images/goods.png"),
            size: "100ml"
        }, {
            id: 2,
            title: "商品1",
            price: "390.00",
            imgUrl: require("../../static/images/goods.png")
        }, {
            id: 3,
            title: "商品1",
            price: "390.00",
            imgUrl: require("../../static/images/goods.png"),
            size: "150ml"
        }, {
            id: 4,
            title: "商品1",
            price: "390.00",
            imgUrl: require("../../static/images/goods.png")
        }, {
            id: 5,
            title: "商品1",
            price: "390.00",
            imgUrl: require("../../static/images/goods.png")
        }, {
            id: 6,
            title: "商品1",
            price: "390.00",
            imgUrl: require("../../static/images/goods.png")
        }, {
            id: 7,
            title: "商品1",
            price: "390.00",
            imgUrl: require("../../static/images/goods.png")
        }]
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
                                    <View style={{ alignSelf: "flex-start", alignItems: "flex-end" }}>
                                        <Text style={{ fontSize: setSpText2(12), color: "#FF5555", marginBottom: scaleSize(2) }}>买家已付款</Text>
                                        <Text style={{ fontSize: setSpText2(11), color: "#999" }}>￥{item.price} ×2</Text>
                                    </View>
                                </View>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Logistics", { goods: item }) }} style={styles.goBtn}>
                                    <Text style={{ fontSize: setSpText2(12), color: "#999" }}>查看物流</Text>
                                </TouchableOpacity>
                            </View>
                        })
                    }
                </ScrollView>
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
    title: {
        width: scaleSize(160),
        lineHeight: scaleSize(17),
        fontSize: setSpText2(12),
        color: "#333"
    },
    goBtn: {
        width: scaleSize(72),
        marginTop: scaleSize(10),
        borderWidth: scaleSize(1),
        borderColor: "#CDCDCD",
        paddingHorizontal: scaleSize(12),
        paddingVertical: scaleSize(3),
        borderRadius: scaleSize(11),
        alignSelf: "flex-end"
    },
})