import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'


export default class extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: setSpText2(14), color: "#FFF" }}>账户余额(元)</Text>
                <Text style={styles.money}>0</Text>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Withdraw") }} activeOpacity={0.8} style={styles.btn}>
                    <Text style={{ fontSize: setSpText2(12), color: "#FF6666" }}>立即提现</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#9B9B9B",
        height: scaleSize(150),
        alignItems: "center",
        paddingTop: scaleSize(20)
    },
    money: {
        fontSize: setSpText2(30),
        color: "#FFF",
        lineHeight: scaleSize(42),
        marginBottom: scaleSize(12),
        marginTop: scaleSize(14)
    },
    btn: {
        paddingHorizontal: scaleSize(17),
        paddingVertical: scaleSize(4),
        borderRadius: scaleSize(12),
        backgroundColor: "#FFF"
    }
})