import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'



import { scaleSize, setSpText2, screenW } from '../../utils/ScreenUtil'

import HeaderTitle from '../../components/common/headerTitle'

export default class extends Component {
    render() {
        return (
            <View>
                <HeaderTitle title="个人资料" back={() => { this.props.navigation.goBack() }} />
                <ScrollView style={{ marginTop: scaleSize(44) }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => { console.log("修改头像") }} style={[styles.tab, { height: scaleSize(66) }]}>
                        <Text style={styles.tabText}>头像</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Image style={styles.headImg} source={require("../../static/images/header_img.jpg")} />
                            <Image style={styles.icon} style={{ width: scaleSize(6), height: scaleSize(11) }} source={require('../../static/images/icon/right_icon.png')} />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.tab}>
                        <Text style={styles.tabText}>用户名</Text>
                        <Text style={{ fontSize: setSpText2(13), color: "#999" }}>180****7654</Text>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => { this.props.navigation.navigate("NicknameChange") }} style={styles.tab}>
                        <Text style={styles.tabText}>昵称</Text>
                        <Image style={styles.icon} style={{ width: scaleSize(6), height: scaleSize(11) }} source={require('../../static/images/icon/right_icon.png')} />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tab: {
        height: scaleSize(44),
        borderTopWidth: scaleSize(1),
        borderTopColor: "#E7E7E7",
        paddingLeft: scaleSize(20),
        paddingRight: scaleSize(10),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFF"
    },
    headImg: {
        width: scaleSize(50),
        height: scaleSize(50),
        borderRadius: scaleSize(100),
        marginRight: scaleSize(24)
    },
    tabText: {
        fontSize: setSpText2(14),
        color: "#333"
    },
    icon: {
        width: scaleSize(6),
        height: scaleSize(11)
    }
})