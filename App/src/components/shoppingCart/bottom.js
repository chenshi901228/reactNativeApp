import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'

import { scaleSize, screenW, setSpText2 } from '../../utils/ScreenUtil'


export default class extends Component {
    render() {
        const _this = this.props
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <TouchableOpacity style={{ marginRight: scaleSize(10) }} onPress={() => { _this.selectAll() }}>
                        {_this.isactive ?
                            <Image style={styles.img} source={require("../../static/images/icon/isactive.png")} /> :
                            <Image style={styles.img} source={require("../../static/images/icon/noactive.png")} />
                        }
                    </TouchableOpacity>
                    <Text style={{ fontSize: setSpText2(13), color: "#9B9B9B" }}>全选</Text>
                </View>
                <TouchableOpacity style={styles.btn} activeOpacity={0.7} onPress={() => { _this.bottomBtn() }}>
                    <Text style={{ fontSize: setSpText2(13), color: "#FFF" }}>{_this.handleMsg}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: screenW,
        height: scaleSize(46),
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "#FFF",
        paddingVertical: scaleSize(5),
        paddingHorizontal: scaleSize(10),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    img: {
        width: scaleSize(17),
        height: scaleSize(17)
    },
    btn: {
        width: scaleSize(88),
        height: scaleSize(36),
        borderRadius: scaleSize(18),
        backgroundColor: "#FF6666",
        alignItems: "center",
        justifyContent: "center"
    }
})