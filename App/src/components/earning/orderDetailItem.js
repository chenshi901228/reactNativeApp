import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'


import HeaderTitle from '../../components/common/headerTitle'

import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'


export default class extends Component {
    render() {
        const _this = this.props.item
        return (
            <View style={styles.container}>
                <View style={{ justifyContent: "space-between" }}>
                    <Text style={{ fontSize: setSpText2(14), color: "#4A4A4A" }}>{_this.title}</Text>
                    <Text style={{ fontSize: setSpText2(12), color: "#999" }}>{_this.name}</Text>
                </View>
                <View style={{ justifyContent: "space-between" }}>
                    <Text style={{ fontSize: setSpText2(12), color: "#999" }}>{_this.date}</Text>
                    <Text style={{ fontSize: setSpText2(14), color: "#4A4A4A", alignSelf: "flex-end" }}>+{_this.earnings}元</Text>
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