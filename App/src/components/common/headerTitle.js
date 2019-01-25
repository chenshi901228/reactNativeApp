// 头部标题

import React, { Component } from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'


import { scaleSize, setSpText2, screenH, screenW } from '../../utils/ScreenUtil'



function RightText(right, color, handle) {
    if (right) {
        return <TouchableOpacity
            activeOpacity={1}
            style={{ position: "absolute", right: scaleSize(10) }}
            onPress={handle}
        >
            <Text style={[{ fontSize: scaleSize(12) }, color ? { color: color } : { color: "#333" }]}>{right}</Text>
        </TouchableOpacity>
    } else {
        return <Text></Text>
    }
}

export default class extends Component {
    render() {
        const _this = this.props
        return (
            <View style={[styles.container, _this.color ? { backgroundColor: _this.color } : {}]}>
                {_this.back ? <TouchableOpacity
                    activeOpacity={1}
                    style={{ position: "absolute", left: 0, paddingHorizontal: scaleSize(10) }}
                    onPress={_this.back}
                >
                    <Image style={{ width: scaleSize(8), height: scaleSize(15) }} source={require('../../static/images/icon/backBtn_1.png')} />
                </TouchableOpacity> : <Text></Text>}
                <Text style={{ fontSize: scaleSize(16), color: "#333" }}>{_this.title}</Text>
                {RightText(_this.right, _this.rightColor, _this.handle)}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        width: screenW,
        height: scaleSize(44),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 20
    }
})

