import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'



import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'


export default class extends Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => { this.props.link() }} style={styles.container}>
                <Text style={{ fontSize: setSpText2(14), color: "#333" }}>我的收获地址</Text>
                <Image style={{ width: scaleSize(6), height: scaleSize(11) }} source={require('../../static/images/icon/right_icon.png')} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: scaleSize(44),
        backgroundColor: "#FFF",
        paddingHorizontal: scaleSize(10),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopWidth: scaleSize(1),
        borderTopColor: "#E7E7E7",
    }
})