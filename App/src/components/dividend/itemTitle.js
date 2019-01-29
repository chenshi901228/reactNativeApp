import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'

export default class extends Component {
    render() {
        const _this = this.props.title
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: setSpText2(15), color: "#000" }}>{_this.name}</Text>
                <Text style={{ fontSize: setSpText2(18), color: "#EFCC6F" }}>{_this.num}股 </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: scaleSize(40),
        backgroundColor: "#FFF",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: scaleSize(10)
    }
})