import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'

import HeaderTitle from '../../components/common/headerTitle'

export default class extends Component {
    render() {
        return (
            <View>
                <HeaderTitle title="我的粉丝" back={() => { this.props.navigation.goBack() }} />
                <View style={styles.header}>
                    <Text style={{ fontSize: setSpText2(14), color: "#FFF" }}>总人数(人)</Text>
                    <Text style={{ fontSize: setSpText2(30), color: "#FFF", lineHeight: scaleSize(42), marginTop: scaleSize(14) }}>0</Text>
                </View>
                <View style={styles.table}>
                    <View style={{ flex: 1, height: scaleSize(45), borderRightWidth: scaleSize(1), borderRightColor: "#F2F3F2", alignItems: "center" }}>
                        <Text style={{ fontSize: setSpText2(13), color: "#666" }}>直属粉丝</Text>
                        <Text style={{ fontSize: setSpText2(15), color: "#666", lineHeight: scaleSize(21), marginTop: scaleSize(5) }}>0人</Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "center" }}>
                        <Text style={{ fontSize: setSpText2(13), color: "#666" }}>直属粉丝邀请</Text>
                        <Text style={{ fontSize: setSpText2(15), color: "#666", lineHeight: scaleSize(21), marginTop: scaleSize(5) }}>0人</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        height: scaleSize(150),
        backgroundColor: "#9B9B9B",
        marginTop: scaleSize(44),
        alignItems: "center",
        justifyContent: "center"
    },
    table: {
        height: scaleSize(72),
        backgroundColor: "#FFF",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"
    }
})