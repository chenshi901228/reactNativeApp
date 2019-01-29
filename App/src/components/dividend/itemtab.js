import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'

export default class extends Component {
    render() {
        const _this = this.props.content
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: setSpText2(14), color: "#666" }}>{_this.name}</Text>
                <Text style={{ fontSize: setSpText2(14), color: "#EFCC6F" }}>{_this.num}股 </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: scaleSize(44),
        backgroundColor: "#FFF",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: scaleSize(10),
        borderTopWidth: scaleSize(1),
        borderTopColor: "#F2F3F2"
    }
})