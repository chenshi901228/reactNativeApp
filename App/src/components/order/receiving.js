import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import Modal from 'react-native-modalbox'

import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'


export default class extends Component {
    state = {
        select: null,
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
    sure() {
        let i = this.state.select
        let newGoods = this.state.goods.filter((item, index) => {
            return index !== i
        })
        this.setState({
            goods: newGoods
        })
        this.refs.modal.close()
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
                                        <Text style={{ fontSize: setSpText2(12), color: "#FF5555", marginBottom: scaleSize(2) }}>卖家已发货</Text>
                                        <Text style={{ fontSize: setSpText2(11), color: "#999" }}>￥{item.price} ×2</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: "row", alignSelf: "flex-end", alignItems: "center" }}>
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("Logistics", { goods: item }) }} activeOpacity={0.7} style={[styles.goBtn, { borderColor: "#CDCDCD", marginRight: scaleSize(10) }]}>
                                        <Text style={{ fontSize: setSpText2(12), color: "#999" }}>查看物流</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity activeOpacity={0.7}
                                        onPress={() => {
                                            this.refs.modal.open()
                                            this.setState({ select: i })
                                        }}
                                        style={[styles.goBtn, { borderColor: "#FF5555" }]}>
                                        <Text style={{ fontSize: setSpText2(12), color: "#FF5555" }}>确认收货</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        })
                    }
                </ScrollView>
                <Modal style={styles.modal}
                    ref={"modal"}
                    backdropPressToClose={true}
                    backButtonClose={true}
                    backdropOpacity={0.2}
                    coverScreen>
                    <View style={{ height: scaleSize(68), borderBottomWidth: scaleSize(2), borderBottomColor: "#F2F3F2", justifyContent: "center" }}>
                        <Text style={{ fontSize: setSpText2(14), color: "#666", textAlign: "center" }}>确认收货吗？</Text>
                        <Text style={{ fontSize: setSpText2(12), color: "#999", textAlign: "center" }}>确认之后才能结算股权及分红哦</Text>
                    </View>
                    <View style={{ height: scaleSize(48), flexDirection: "row", alignItems: 'center' }}>
                        <TouchableOpacity style={styles.modalBtn} onPress={() => { this.refs.modal.close() }}>
                            <Text style={{ fontSize: setSpText2(14), color: "#666" }}>取消</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalBtn} onPress={() => { this.sure() }}>
                            <Text style={{ fontSize: setSpText2(14), color: "#FF5959" }}>确认</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
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
        paddingHorizontal: scaleSize(12),
        paddingVertical: scaleSize(3),
        borderRadius: scaleSize(11)
    },
    modal: {
        width: scaleSize(275),
        height: scaleSize(118),
        borderRadius: scaleSize(5),
        justifyContent: "center"
    },
    modalBtn: {
        width: scaleSize(137),
        height: scaleSize(48),
        alignItems: "center",
        justifyContent: "center"
    }
})