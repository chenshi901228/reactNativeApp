

import React, { Component } from 'react'

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, ImageBackground } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { scaleSize, setSpText2, screenH, screenW } from '../../utils/ScreenUtil'
import { fetchRequest } from '../../utils/HttpUtil'



class Reg extends Component {

    state = {
        ishide: true,
        ishide1: true
    }
    getVerificationCode() {
        console.log("1234")
    }
    changeShow() {
        this.setState({
            ishide: !this.state.ishide
        })
    }
    changeShow1() {
        this.setState({
            ishide1: !this.state.ishide1
        })
    }
    reg() {
        console.log("修改成功")
    }
    render() {
        return (
            <ImageBackground style={styles.bgimg}
                source={{ uri: "https://alipic.lanhuapp.com/bb704d8d79ba49875a74f68b85a6f77d" }}>
                <ScrollView style={styles.container}>
                    <View style={[styles.logo]}>
                        <Image style={[styles.imgStyle, { width: scaleSize(15), height: scaleSize(28) }]} source={require("../../static/images/icon/phone_icon.png")} />
                        <TextInput style={[styles.inputStyle]}
                            underlineColorAndroid='transparent'
                            placeholderTextColor="#FFF"
                            keyboardType="numeric"
                            maxLength={20}
                            placeholder="输入手机号" />
                    </View>
                    <View style={styles.logo}>
                        <Image style={[styles.imgStyle, { width: scaleSize(16), height: scaleSize(19) }]} source={require("../../static/images/icon/verificationCode_1.png")} />
                        <TextInput style={[styles.inputStyle]}
                            underlineColorAndroid='transparent'
                            placeholderTextColor="#FFF"
                            keyboardType="numeric"
                            maxLength={10}
                            placeholder="输入验证码" />
                        <TouchableOpacity
                            style={[styles.position_btn]}
                            activeOpacity={1}
                            onPress={() => { this.getVerificationCode() }}
                        >
                            <View style={{ borderRadius: scaleSize(13), backgroundColor: "rgba(155, 155, 155, 0.3)", paddingHorizontal: scaleSize(5), paddingVertical: scaleSize(4) }}>
                                <Text style={{ fontSize: setSpText2(12), color: "#FFF" }}>获取验证码</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.logo}>
                        <Image style={[styles.imgStyle, { width: scaleSize(15), height: scaleSize(20) }]} source={require("../../static/images/icon/pas_icon.png")} />
                        <TextInput style={[styles.inputStyle]}
                            underlineColorAndroid='transparent'
                            placeholderTextColor="#FFF"
                            maxLength={32}
                            secureTextEntry={this.state.ishide}
                            placeholder="设置密码" />
                        <TouchableOpacity
                            activeOpacity={1}
                            style={[styles.position_btn]}
                            onPress={() => { this.changeShow() }}
                        >
                            <Image style={{ width: scaleSize(20), height: scaleSize(13) }} source={this.state.ishide ? require("../../static/images/icon/ishide_2.png") : require("../../static/images/icon/isopen_2.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.logo}>
                        <Image style={[styles.imgStyle, { width: scaleSize(15), height: scaleSize(20) }]} source={require("../../static/images/icon/pas_icon.png")} />
                        <TextInput style={[styles.inputStyle]}
                            underlineColorAndroid='transparent'
                            placeholderTextColor="#FFF"
                            maxLength={32}
                            secureTextEntry={this.state.ishide1}
                            placeholder="确认密码" />
                        <TouchableOpacity
                            activeOpacity={1}
                            style={[styles.position_btn]}
                            onPress={() => { this.changeShow1() }}
                        >
                            <Image style={{ width: scaleSize(20), height: scaleSize(13) }} source={this.state.ishide1 ? require("../../static/images/icon/ishide_2.png") : require("../../static/images/icon/isopen_2.png")} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={{ marginTop: scaleSize(10) }}
                        onPress={() => { this.reg() }}
                        activeOpacity={1}
                    >
                        <View style={styles.isokBtn}>
                            <Text style={{ color: "#FFF", fontSize: setSpText2(14) }}>注册</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    bgimg: {
        width: screenW,
        height: screenH,
    },
    container: {
        paddingHorizontal: scaleSize(20),
        paddingTop: scaleSize(113),
        backgroundColor: "rgba(0,0,0,0.7)"
    },
    isokBtn: {
        height: scaleSize(44),
        backgroundColor: "rgba(0,0,0,0)",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: scaleSize(7),
        borderWidth: scaleSize(1),
        borderColor: "#FFF"
    },
    logo: {
        // width: scaleSize(335),
        height: scaleSize(44),
        flexDirection: "row",
        backgroundColor: "rgba(0,0,0,0)",
        alignItems: "center",
        marginBottom: scaleSize(10),
        borderWidth: scaleSize(1),
        borderColor: "#FFF"
    },
    inputStyle: {
        flex: 1,
        height: scaleSize(44),
        textAlign: "center",
        fontSize: setSpText2(14),
        paddingVertical: scaleSize(8),
        color:"#FFF"
    },
    position_btn: {
        height: scaleSize(44),
        position: "absolute",
        right: 0,
        justifyContent: "center",
        paddingRight: scaleSize(10)
    },
    imgStyle: {
        position: "absolute",
        left: scaleSize(10)
    }
})

export default Reg