// 今日特价标签

import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'



export default class extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>{this.props.title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: scaleSize(53),
        borderWidth: scaleSize(1),
        borderRadius: scaleSize(2),
        borderColor: "#FF5555",
        alignItems: "center",
        justifyContent: "center"
    },
    textStyle: {
        fontSize: setSpText2(12),
        color: "#FF5555",
    }
})