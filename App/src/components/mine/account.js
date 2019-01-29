import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'

export default class extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <Text style={{ fontSize: setSpText2(14), color: "#FF6666" }}>0.00</Text>
                    <Text style={{ fontSize: setSpText2(13), color: "#666" }}>累积收益(元)</Text>
                </View>
                <View style={styles.item}>
                    <Text style={{ fontSize: setSpText2(14), color: "#FF6666" }}>0.00</Text>
                    <Text style={{ fontSize: setSpText2(13), color: "#666" }}>即将到账(元)</Text>
                </View>
                <View style={styles.item}>
                    <Text style={{ fontSize: setSpText2(14), color: "#FF6666" }}>0.00</Text>
                    <Text style={{ fontSize: setSpText2(13), color: "#666" }}>账户余额(元)</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: scaleSize(71),
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    item: {
        alignItems: "center"
    }
})