import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'



import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'


export default class extends Component {
    render() {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => { this.props.link() }} style={styles.container}>
                <Image style={styles.headImg} source={require('../../static/images/header_img.jpg')} />
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: setSpText2(12), color: "#333" }}>用户昵称</Text>
                    <Text style={{ fontSize: setSpText2(12), color: "#999" }}>180****7654</Text>
                </View>
                <Image style={{ width: scaleSize(6), height: scaleSize(11) }} source={require('../../static/images/icon/right_icon.png')} />
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: scaleSize(76),
        backgroundColor: "#FFF",
        paddingLeft: scaleSize(20),
        paddingTop: scaleSize(14),
        paddingBottom: scaleSize(12),
        paddingRight: scaleSize(10),
        borderTopWidth: scaleSize(1),
        borderTopColor: "#E7E7E7",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    headImg: {
        width: scaleSize(50),
        height: scaleSize(50),
        marginRight: scaleSize(5),
        borderRadius: scaleSize(100)
    }
})