import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'


import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'


export default class extends Component {
    render() {
        const _this = this.props
        return (
            <TouchableOpacity activeOpacity={0.9} onPress={() => { _this.navigation.navigate(_this.route) }} style={styles.container}>
                <Text style={styles.title}>{_this.title}</Text>
                <Image style={styles.img} source={require('../../static/images/icon/choice.png')} />
            </TouchableOpacity>
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
        borderBottomWidth: scaleSize(1),
        borderBottomColor: "#F2F3F2",
        paddingHorizontal: scaleSize(10)
    },
    title: {
        fontSize: setSpText2(14),
        color: "#666"
    },
    img: {
        width: scaleSize(6),
        height: scaleSize(11)
    }
})