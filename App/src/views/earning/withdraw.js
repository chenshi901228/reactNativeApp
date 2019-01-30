import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'


import HeaderTitle from '../../components/common/headerTitle'

import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'

export default class extends Component {
    render() {
        return (
            <View>
                <HeaderTitle title="账户余额" back={() => { this.props.navigation.goBack() }} />
                <ScrollView style={{ marginTop: scaleSize(44) }}>
                    <View style={styles.head}>
                        <Text style={{ fontSize: setSpText2(15), color: "#000" }}>账户余额(元)</Text>
                        <Text style={{ fontSize: setSpText2(24), color: "#FF6666", lineHeight: scaleSize(33), marginTop: scaleSize(16) }}>4685</Text>
                    </View>
                    <View style={{ flexDirection: "row", backgroundColor: "#FFF" }}>
                        <View style={{ height: scaleSize(60), flex: 1, alignItems: "center", justifyContent: "center", borderRightWidth: scaleSize(1), borderRightColor: "#F2F3F2" }}>
                            <Text style={{ fontSize: setSpText2(14), color: "#FF6666" }}>3654</Text>
                            <Text style={{ fontSize: setSpText2(13), color: "#999" }}>股份收益(元)</Text>
                        </View>
                        <View style={{ height: scaleSize(60), flex: 1, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ fontSize: setSpText2(14), color: "#FF6666" }}>1004</Text>
                            <Text style={{ fontSize: setSpText2(13), color: "#999" }}>现金奖励(元)</Text>
                        </View>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                        <Text style={{ fontSize: setSpText2(14), color: "#FFF" }}>我要提取</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: setSpText2(12), color: "#9B9B9B", marginLeft: scaleSize(45) }}>注意：最低提取金额为100元。</Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    head: {
        height: scaleSize(122),
        backgroundColor: "#FFF",
        paddingLeft: scaleSize(30),
        paddingTop: scaleSize(20),
        borderBottomWidth: scaleSize(1),
        borderBottomColor: "#F2F3F2"
    },
    btn: {
        width: scaleSize(325),
        height: scaleSize(40),
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4A4A4A",
        borderRadius: scaleSize(25),
        alignSelf: "center",
        marginTop: scaleSize(10),
        marginBottom: scaleSize(5)
    }
})