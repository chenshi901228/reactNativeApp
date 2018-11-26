

import React, { Component } from 'react'

import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native'


import { scaleSize, setSpText2, screenH, screenW } from '../../utils/ScreenUtil'



class Merchant_login extends Component {
    getVerificationCode() {
        console.log("1234")
    }
    login() {
        console.log("登录")
    }
    render() {
        return (
            <ImageBackground style={styles.bgimg}
                source={{ uri: "https://alipic.lanhuapp.com/bb704d8d79ba49875a74f68b85a6f77d" }}>
                <View style={{ paddingHorizontal: scaleSize(20), paddingTop: scaleSize(20) }}>
                    <TouchableOpacity
                        style={{ marginBottom: scaleSize(97) }}
                        onPress={() => { this.props.navigation.goBack() }}
                    >
                        <Image style={{ width: scaleSize(8), height: scaleSize(15) }} source={require('../../static/images/icon/backBtn.png')} />
                    </TouchableOpacity>
                    <View style={styles.logo}>
                        <Image style={{ width: scaleSize(15), height: scaleSize(28), marginLeft: scaleSize(21) }} source={require("../../static/images/icon/phone_icon.png")} />
                        <TextInput style={styles.inputStyle}
                            underlineColorAndroid='transparent'
                            placeholderTextColor="#9B9B9B"
                            keyboardType="numeric"
                            maxLength={20}
                            placeholder="请输入您的手机号" />
                    </View>
                    <View style={styles.logo}>
                        <Image style={{ width: scaleSize(16), height: scaleSize(19), marginLeft: scaleSize(21) }} source={require("../../static/images/icon/verificationCode.png")} />
                        <TextInput style={styles.inputStyle}
                            underlineColorAndroid='transparent'
                            placeholderTextColor="#9B9B9B"
                            keyboardType="numeric"
                            maxLength={10}
                            placeholder="请输入验证码" />
                        <TouchableOpacity
                            style={styles.position_btn}
                            onPress={() => { this.getVerificationCode() }}
                        >
                            <Text style={{ fontSize: setSpText2(12) }}>获取验证码</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={{ marginTop: scaleSize(143) }}
                        onPress={() => { this.login() }}
                        activeOpacity={0.8}
                    >
                        <View style={styles.loginBtn}>
                            <Text style={{ color: "#4A4A4A", fontSize: setSpText2(16) }}>登录</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    bgimg: {
        width: screenW,
        height: screenH,
    },
    loginBtn: {
        height: scaleSize(36),
        borderRadius: scaleSize(18),
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        paddingVertical: scaleSize(7)
    },
    logo: {
        width: scaleSize(335),
        height: scaleSize(36),
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: scaleSize(20),
        alignItems: "center",
        marginTop: scaleSize(17)
    },
    position_btn: {
        position: "absolute",
        right: scaleSize(10),
        height: scaleSize(36),
        justifyContent: "center"
    },
    inputStyle: {
        flex: 1, height: scaleSize(36),
        textAlign: "center",
        fontSize: setSpText2(14),
        paddingVertical: scaleSize(8),
        marginRight: scaleSize(37)
    }
})

export default Merchant_login