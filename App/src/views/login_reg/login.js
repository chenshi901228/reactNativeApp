

import React, { Component } from 'react'

import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, TextInput, ScrollView } from 'react-native'


import { scaleSize, setSpText2, screenH, screenW } from '../../utils/ScreenUtil'
import { fetchRequest } from '../../utils/HttpUtil'



class Phone_login extends Component {

    login() {
        this.props.navigation.navigate('Index')
    }
    render() {
        return (
            <ImageBackground style={styles.bgimg}
                source={{ uri: "https://alipic.lanhuapp.com/bb704d8d79ba49875a74f68b85a6f77d" }}>
                <ScrollView style={styles.container}>
                    <View style={styles.logo}>
                        <Image style={{ width: scaleSize(15), height: scaleSize(28), marginLeft: scaleSize(21) }} source={require("../../static/images/icon/phone_icon.png")} />
                        <TextInput style={{ flex: 1, height: scaleSize(36), textAlign: "center", fontSize: setSpText2(14), paddingVertical: scaleSize(8) }}
                            underlineColorAndroid='transparent'
                            placeholderTextColor="#FFF"
                            maxLength={20}
                            placeholder="输入账号" />
                    </View>
                    <View style={styles.logo}>
                        <Image style={{ width: scaleSize(15), height: scaleSize(20), marginLeft: scaleSize(21) }} source={require("../../static/images/icon/pas_icon.png")} />
                        <TextInput style={{ flex: 1, height: scaleSize(36), textAlign: "center", fontSize: setSpText2(14), paddingVertical: scaleSize(8) }}
                            underlineColorAndroid='transparent'
                            placeholderTextColor="#FFF"
                            maxLength={32}
                            secureTextEntry={true}
                            placeholder="输入密码" />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => { this.props.navigation.navigate("forgetpass") }}>
                            <Text style={{ fontSize: setSpText2(12), color: "#FFF" }}>忘记密码</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => { this.props.navigation.navigate("verfymessage") }}>
                            <Text style={{ fontSize: setSpText2(12), color: "#FFF" }}>快速注册</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={{ marginTop: scaleSize(104) }}
                        onPress={() => { this.login() }}
                        activeOpacity={0.8}
                    >
                        <View style={styles.loginBtn}>
                            <Text style={{ color: "#FFF", fontSize: setSpText2(14) }}>立即登录</Text>
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
        paddingTop: scaleSize(143)
    },
    loginBtn: {
        height: scaleSize(44),
        backgroundColor: "rgba(0,0,0,0)",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: scaleSize(1),
        borderColor: "#FFF",
    },
    logo: {
        width: scaleSize(335),
        height: scaleSize(44),
        flexDirection: "row",
        backgroundColor: "rgba(0,0,0,0)",
        alignItems: "center",
        borderWidth: scaleSize(1),
        borderColor: "#FFF",
        marginBottom: scaleSize(10)
    }
})

export default Phone_login