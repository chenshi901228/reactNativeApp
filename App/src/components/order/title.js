import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

import { scaleSize, setSpText2, screenW } from '../../utils/ScreenUtil'

export default class extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => { this.props.back() }} style={styles.backBtn}>
                    <Image style={styles.backImg} source={require('../../static/images/icon/backBtn_1.png')} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9}
                    onPress={() => {
                        this.props.handleClick(1)
                    }}>
                    <Image style={styles.img} source={this.props.selfOrFans ? require('../../static/images/icon/self.png') : require('../../static/images/icon/self_1.png')} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9}
                    onPress={() => {
                        this.props.handleClick(0)
                    }}>
                    <Image style={styles.img} source={this.props.selfOrFans ? require('../../static/images/icon/fansbtn.png') : require('../../static/images/icon/fansbtn_1.png')} />
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width: screenW,
        height: scaleSize(44),
        position: "absolute",
        top: 0,
        left: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF"
    },
    backBtn: {
        height: scaleSize(44),
        position: "absolute",
        left: 0,
        paddingLeft: scaleSize(10),
        paddingRight: scaleSize(20),
        justifyContent: "center"
    },
    backImg: {
        width: scaleSize(8),
        height: scaleSize(15)
    },
    img: {
        width: scaleSize(88),
        height: scaleSize(32)
    }
})