import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'


import HeaderTitle from '../../components/common/headerTitle'

import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'


export default class extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ height: scaleSize(65), borderBottomWidth: scaleSize(1), borderBottomColor: "#F2F3F2", flexDirection: "row", alignItems: "center" }}>
                    <View style={styles.icon}>
                        <Text style={{ fontSize: setSpText2(12), color: "#FFF" }}>申通</Text>
                    </View>
                    <View style={{ height: scaleSize(40), justifyContent: "space-between" }}>
                        <Text style={{ fontSize: setSpText2(13), color: "#333" }}>申通快递</Text>
                        <Text style={{ fontSize: setSpText2(13) }}>官方电话：95543</Text>
                    </View>
                </View>
                <View style={{ height: scaleSize(33), paddingLeft: scaleSize(10), justifyContent: "center" }}>
                    <Text style={{ fontSize: setSpText2(13), color: "#333" }}>申通快递：807363552908</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: scaleSize(100),
        backgroundColor: "#FFF",
        borderRadius: scaleSize(3)
    },
    icon: {
        width: scaleSize(40),
        height: scaleSize(40),
        borderRadius: scaleSize(100),
        backgroundColor: "#4A4A4A",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: scaleSize(10),
        marginRight: scaleSize(14)
    }
})