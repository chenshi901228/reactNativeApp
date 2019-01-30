import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'



import { scaleSize, setSpText2, screenW } from '../../utils/ScreenUtil'


import HeaderTitle from '../../components/common/headerTitle'
import User from '../../components/setting/user'
import Address from '../../components/setting/address'
import Level from '../../components/setting/level'

export default class extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderTitle title="设置" back={() => { this.props.navigation.goBack() }} />
                <ScrollView style={{ marginTop: scaleSize(44) }}>
                    <User link={() => { this.props.navigation.navigate("PersonalInfo") }} />
                    <Address link={() => { this.props.navigation.navigate("AddressChange") }} />
                    <Level />
                </ScrollView>
                <TouchableOpacity activeOpacity={0.8} onPress={() => { console.log("退出当前用户") }} style={styles.bottomBtn}>
                    <Text style={{ fontSize: setSpText2(14), color: "#FFF" }}>退出当前用户</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bottomBtn: {
        width: screenW,
        height: scaleSize(44),
        backgroundColor: "#4A4A4A",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        left: 0
    }
})