import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'


import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'


export default class extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <View style={styles.info}>
                    <View style={{ alignItems: "center" }}>
                        <Image style={styles.headerImg} source={require('../../static/images/header_img.jpg')} />
                        <View style={styles.honor}>
                            <Text style={{ fontSize: setSpText2(10), color: "#fff" }}>领导人</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: scaleSize(10) }}>
                        <Image style={styles.star} source={require('../../static/images/icon/star.png')} />
                        <Image style={styles.star} source={require('../../static/images/icon/star.png')} />
                        <Image style={styles.star} source={require('../../static/images/icon/star.png')} />
                    </View>
                    <View style={{ alignItems: "center", marginTop: scaleSize(2) }}>
                        <Text style={styles.text}>用户昵称</Text>
                        <Text style={styles.text}>本月消费：10000.00</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: scaleSize(180),
        backgroundColor: "#4A4A4A"
    },
    info: {
        marginTop: scaleSize(24)
    },
    headerImg: {
        width: scaleSize(60),
        height: scaleSize(60),
        borderRadius: scaleSize(100)
    },
    honor: {
        position: "absolute",
        left: scaleSize(201),
        backgroundColor: "#F5A623",
        paddingHorizontal: scaleSize(3),
        borderRadius: scaleSize(1)
    },
    star: {
        width: scaleSize(14),
        height: scaleSize(14),
        marginRight: scaleSize(4)
    },
    text: {
        fontSize: setSpText2(13),
        color: "#FFF",
        marginTop: scaleSize(5)
    }
})