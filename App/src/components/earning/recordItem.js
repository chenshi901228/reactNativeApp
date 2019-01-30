import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'


export default class extends Component {
    render() {
        const _this = this.props.item
        return (
            <View style={styles.container}>
                <View style={{ justifyContent: "space-between" }}>
                    <Text style={{ fontSize: setSpText2(14), color: "#4A4A4A" }}>提现到{_this.title}</Text>
                    <Text style={{ fontSize: setSpText2(12), color: "#999" }}>{_this.date}</Text>
                </View>
                <View style={{ alignSelf: "center" }}>
                    <Text style={{ fontSize: setSpText2(14), color: "#4A4A4A" }}>-{_this.money}元</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: scaleSize(54),
        backgroundColor: "#FFF",
        paddingVertical: scaleSize(7),
        paddingHorizontal: scaleSize(10),
        borderTopWidth: scaleSize(1),
        borderTopColor: "#F2F3F2",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})