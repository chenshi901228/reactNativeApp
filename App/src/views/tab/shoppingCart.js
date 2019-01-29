import React, { Component } from 'react'
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ScrollView, } from 'react-native'
import Modal from 'react-native-modalbox'


import HeaderTitle from '../../components/common/headerTitle'
import Item from '../../components/shoppingCart/goodsItem'
import Bottom from '../../components/shoppingCart/bottom'

import { scaleSize, setSpText2, screenH } from '../../utils/ScreenUtil'

export default class extends Component {
    state = {
        bottomHandle: "去结算",
        headerRight: "管理",
        selectAll: false,
        goods: [{
            id: 1,
            title: "商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1",
            price: "390.00",
            imgUrl: "../../static/images/goods.png",
            size: "100ml",
            isactive: false
        }, {
            id: 2,
            title: "商品1",
            price: "390.00",
            imgUrl: "../../static/images/goods.png",
            isactive: false
        }, {
            id: 3,
            title: "商品1",
            price: "390.00",
            imgUrl: "../../static/images/goods.png",
            size: "150ml",
            isactive: false
        }, {
            id: 4,
            title: "商品1",
            price: "390.00",
            imgUrl: "../../static/images/goods.png"
        }, {
            id: 5,
            title: "商品1",
            price: "390.00",
            imgUrl: "../../static/images/goods.png",
            isactive: false
        }, {
            id: 6,
            title: "商品1",
            price: "390.00",
            imgUrl: "../../static/images/goods.png",
            isactive: false
        }, {
            id: 7,
            title: "商品1",
            price: "390.00",
            imgUrl: "../../static/images/goods.png",
            isactive: false
        }],
    }
    manage() {
        if (this.state.headerRight == "管理") {
            this.setState({
                headerRight: "完成",
                bottomHandle: "删除"
            })
        } else {
            this.setState({
                headerRight: "管理",
                bottomHandle: "去结算"
            })
        }
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
    handleActive(index) {
        this.state.goods[index].isactive = !this.state.goods[index].isactive
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
    bottomBtn() {
        if (this.state.bottomHandle == "删除") {
            this.refs.modal.open()
        }
    }
    cancel() {
        this.refs.modal.close()
    }
    delete() {
        let newGoods = this.state.goods.filter(item => {
            return item.isactive == false
        })
        this.setState({
            goods: newGoods
        })
        this.refs.modal.close()
    }
    render() {
        return (
            <View style={{ backgroundColor: "#F3F3F3", flex: 1 }}>
                <HeaderTitle title='购物车' right={this.state.headerRight} rightColor="#9B9B9B" color="#fff" handle={() => { this.manage() }} />
                <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: scaleSize(44), marginBottom: scaleSize(46) }}>
                    {this.state.goods.map((item, i) => {
                        return <Item key={i} goods={item} handleActive={() => { this.handleActive(i) }} />
                    })}
                </ScrollView>
                <Bottom handleMsg={this.state.bottomHandle} selectAll={() => { this.selectAll() }} isactive={this.state.selectAll} bottomBtn={() => { this.bottomBtn() }} />
                <Modal style={styles.modal}
                    ref={"modal"}
                    backdropPressToClose={true}
                    backButtonClose={true}
                    backdropOpacity={0.2}
                    coverScreen>
                    <View style={{ height: scaleSize(68), borderBottomWidth: scaleSize(2), borderBottomColor: "#F2F3F2", justifyContent: "center" }}>
                        <Text style={{ fontSize: setSpText2(14), color: "#666", textAlign: "center" }}>确认删除这些宝贝吗？</Text>
                        <Text style={{ fontSize: setSpText2(12), color: "#999", textAlign: "center" }}>删除之后不能再找回哦</Text>
                    </View>
                    <View style={{ height: scaleSize(48), flexDirection: "row", alignItems: 'center' }}>
                        <TouchableOpacity style={styles.btn} onPress={() => { this.cancel() }}>
                            <Text style={{ fontSize: setSpText2(14), color: "#666" }}>取消</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={() => { this.delete() }}>
                            <Text style={{ fontSize: setSpText2(14), color: "#FF5959" }}>删除</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    modal: {
        width: scaleSize(275),
        height: scaleSize(118),
        borderRadius: scaleSize(5),
        justifyContent: "center"
    },
    btn: {
        width: scaleSize(137),
        alignItems: "center",
        justifyContent: "center"
    }
})
