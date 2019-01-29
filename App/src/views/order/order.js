import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'

import { scaleSize, setSpText2, screenW } from '../../utils/ScreenUtil'

import Title from '../../components/order/title'
import Obligation from '../../components/order/obligation'
import Delivery from '../../components/order/delivery'
import Receiving from '../../components/order/receiving'
import Complete from "../../components/order/complete";



export default class extends Component {
    state = {
        initTabPage: 0,
        selfOrFans: true
    }
    back() {
        this.props.navigation.goBack()
    }
    selfOrFans(e) {
        if (e) {
            this.setState({ selfOrFans: true })
        } else {
            this.setState({ selfOrFans: false })
        }
    }
    componentDidMount() {
        const initTabPage = this.props.navigation.getParam("tabIndex") || 0
        const isFans = this.props.navigation.getParam("key")
        if (isFans) {
            this.setState({
                selfOrFans: false
            })
        }
        this.setState({
            initTabPage
        })
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Title selfOrFans={this.state.selfOrFans} handleClick={(e) => { this.selfOrFans(e) }} back={() => { this.back() }} />
                <ScrollableTabView
                    page={this.state.initTabPage}
                    tabBarUnderlineStyle={{ height: scaleSize(4), borderRadius: scaleSize(2), backgroundColor: "#FF6666" }}
                    tabBarBackgroundColor='#fff'
                    tabBarTextStyle={{ fontSize: setSpText2(14), color: "#4A4A4A" }}
                    style={{ marginTop: scaleSize(44) }}
                    renderTabBar={() => <ScrollableTabBar />}>
                    <Obligation navigation={this.props.navigation} tabLabel='待付款' />
                    <Delivery navigation={this.props.navigation} tabLabel='待发货' />
                    <Receiving navigation={this.props.navigation} tabLabel='待收货' />
                    <Complete navigation={this.props.navigation} tabLabel='已完成' />
                </ScrollableTabView>
            </View>
        )
    }
}