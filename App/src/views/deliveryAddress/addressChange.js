
// 我的收货地址

import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'


import { scaleSize, setSpText2, screenW } from '../../utils/ScreenUtil'



import HeaderTitle from '../../components/common/headerTitle'
import AddressItem from '../../components/deliveryAddress/address_item'



export default class extends Component {
    back() {
        this.props.navigation.goBack()
    }
    newAddresss() {
        this.props.navigation.navigate("NewAddress")
    }
    render() {
        return (
            <View>
                <HeaderTitle title="我的收获地址" right="添加新地址" color="#FFF" back={this.back.bind(this)} handle={this.newAddresss.bind(this)} />
                <ScrollView style={styles.container}>
                    <AddressItem type="yes" navigation={this.props.navigation} />
                    <AddressItem navigation={this.props.navigation} />
                    <AddressItem navigation={this.props.navigation} />
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