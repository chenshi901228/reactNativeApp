// 地址items

import React, { Component } from 'react'
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native'


import { scaleSize, setSpText2, screenH, screenW } from '../../utils/ScreenUtil'



function isdefault(type) {
    if (type) {
        return <View style={styles.tag}>
            <Text style={{ fontSize: setSpText2(12), color: "#FF7600", textAlign: "center" }}>默认</Text>
        </View>
    } else {
        return <View></View>
    }
}


export default class extends Component {
    render() {
        const _this = this.props
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => { _this.navigation.navigate("EditAddress") }}
                style={[styles.container]}>
                <View style={{ width: scaleSize(300) }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{ fontSize: setSpText2(14), color: "#333" }}>某某某 180****7654</Text>
                        {isdefault(this.props.type)}
                    </View>
                    <Text style={{ marginTop: scaleSize(7), fontSize: setSpText2(13), color: "#666" }} numberOfLines={1}>四川省成都市锦江区具体街道门牌号几栋几单元四川省成都市锦江区具体街道门牌号几栋几单元</Text>
                </View>
                <View style={{ paddingVertical: scaleSize(30), paddingLeft: scaleSize(10) }}>
                    <Image style={styles.imgStyle} source={require('../../static/images/icon/right_icon.png')} />
                </View>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        width: screenW,
        height: scaleSize(76),
        marginTop: scaleSize(10),
        backgroundColor: "#FFF",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: scaleSize(20),
        paddingRight: scaleSize(10),
        paddingVertical: scaleSize(17)
    },
    imgStyle: {
        width: scaleSize(6),
        height: scaleSize(11)
    },
    tag: {
        width: scaleSize(35),
        height: scaleSize(18),
        backgroundColor: "#FFE0AC",
        alignItems: "center",
        marginLeft: scaleSize(4)
    }
})
