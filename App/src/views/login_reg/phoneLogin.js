

import React, { Component } from 'react'

import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native'


import { scaleSize, setSpText2, screenH, screenW } from '../../utils/ScreenUtil'
import { fetchRequest } from '../../utils/HttpUtil'



class Phone_login extends Component {
    
    login() {
        this.props.navigation.navigate('Index')
        // fetchRequest("ctl=login&act=do_login", "POST", {
        //     mobile: "13730602376",
        //     // user_password: "123456"
        // })
        //     .then(res => { console.log(res) })
        //     .catch(error => {
        //         console.error(error);
        //     });
    }
    render() {
        return (
            <ImageBackground style={styles.bgimg}
                source={{ uri: "https://alipic.lanhuapp.com/bb704d8d79ba49875a74f68b85a6f77d" }}>
                <ScrollView style={{ paddingHorizontal: scaleSize(20), paddingTop: scaleSize(20) }}>
                    <TouchableOpacity
                        style={{ marginBottom: scaleSize(97) }}
                        onPress={() => { this.props.navigation.goBack() }}
                    >
                        <Image style={{ width: scaleSize(8), height: scaleSize(15) }} source={require('../../static/images/icon/backBtn.png')} />
                    </TouchableOpacity>
                    <View style={styles.logo}>
                        <Image style={{ width: scaleSize(15), height: scaleSize(28), marginLeft: scaleSize(21) }} source={require("../../static/images/icon/phone_icon.png")} />
                        <TextInput style={{ flex: 1, height: scaleSize(36), textAlign: "center", fontSize: setSpText2(14), paddingVertical: scaleSize(8) }}
                            underlineColorAndroid='transparent'
                            placeholderTextColor="#9B9B9B"
                            keyboardType="numeric"
                            maxLength={20}
                            placeholder="请输入您的手机号" />
                    </View>
                    <View style={styles.logo}>
                        <Image style={{ width: scaleSize(15), height: scaleSize(20), marginLeft: scaleSize(21) }} source={require("../../static/images/icon/pas_icon.png")} />
                        <TextInput style={{ flex: 1, height: scaleSize(36), textAlign: "center", fontSize: setSpText2(14), paddingVertical: scaleSize(8) }}
                            underlineColorAndroid='transparent'
                            placeholderTextColor="#9B9B9B"
                            maxLength={32}
                            secureTextEntry={true}
                            placeholder="请输入6-32位密码" />
                    </View>
                    <View style={{ marginTop: scaleSize(10), flexDirection: "row", justifyContent: "space-between", paddingHorizontal: scaleSize(22) }}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => { this.props.navigation.navigate("forgetpass") }}>
                            <Text style={{ fontSize: setSpText2(12), color: "#fff" }}>忘记密码</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => { this.props.navigation.navigate("verfymessage") }}>
                            <Text style={{ fontSize: setSpText2(12), color: "#fff" }}>短信验证码登录</Text>
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
    }
})

export default Phone_login