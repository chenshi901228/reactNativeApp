

import React, { Component } from 'react'

import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native'


import { scaleSize, setSpText2, screenH, screenW } from '../../utils/ScreenUtil'
import HeaderTitle from '../../components/headerTitle/headerTitle'

class Reg_1 extends Component {
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
            <ScrollView style={styles.bgimg}>
                <HeaderTitle title="设置密码" navigation={this.props.navigation} />
                <View style={[styles.logo, { marginTop: scaleSize(80) }]}>
                    <Image style={{ width: scaleSize(15), height: scaleSize(28), marginLeft: scaleSize(21) }} source={require("../../static/images/icon/phone_icon_1.png")} />
                    <TextInput style={[styles.inputStyle]}
                        underlineColorAndroid='transparent'
                        placeholderTextColor="#9B9B9B"
                        keyboardType="numeric"
                        maxLength={20}
                        placeholder="输入手机号" />
                </View>
                <View style={styles.logo}>
                    <Image style={{ width: scaleSize(16), height: scaleSize(19), marginLeft: scaleSize(21) }} source={require("../../static/images/icon/verificationCode.png")} />
                    <TextInput style={[styles.inputStyle]}
                        underlineColorAndroid='transparent'
                        placeholderTextColor="#9B9B9B"
                        keyboardType="numeric"
                        maxLength={10}
                        placeholder="输入验证码" />
                    <TouchableOpacity
                        style={styles.position_btn}
                        onPress={() => { this.getVerificationCode() }}
                    >
                        <Text style={{ fontSize: setSpText2(12) }}>获取验证码</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.logo}>
                    <Image style={{ width: scaleSize(15), height: scaleSize(20), marginLeft: scaleSize(21) }} source={require("../../static/images/icon/pas_icon_1.png")} />
                    <TextInput style={[styles.inputStyle]}
                        underlineColorAndroid='transparent'
                        placeholderTextColor="#9B9B9B"
                        maxLength={32}
                        secureTextEntry={this.state.ishide}
                        placeholder="设置新密码" />
                    <TouchableOpacity
                        style={styles.position_btn}
                        onPress={() => { this.changeShow() }}
                    >
                        <Image style={{ width: scaleSize(20), height: scaleSize(13) }} source={this.state.ishide ? require("../../static/images/icon/ishide_1.png") : require("../../static/images/icon/isopen.png")} />
                    </TouchableOpacity>
                </View>
                <View style={styles.logo}>
                    <Image style={{ width: scaleSize(15), height: scaleSize(20), marginLeft: scaleSize(21) }} source={require("../../static/images/icon/pas_icon_1.png")} />
                    <TextInput style={[styles.inputStyle]}
                        underlineColorAndroid='transparent'
                        placeholderTextColor="#9B9B9B"
                        maxLength={32}
                        secureTextEntry={this.state.ishide1}
                        placeholder="确认新密码" />
                    <TouchableOpacity
                        style={styles.position_btn}
                        onPress={() => { this.changeShow1() }}
                    >
                        <Image style={{ width: scaleSize(20), height: scaleSize(13) }} source={this.state.ishide1 ? require("../../static/images/icon/ishide_1.png") : require("../../static/images/icon/isopen.png")} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{ marginTop: scaleSize(50) }}
                    onPress={() => { this.reg() }}
                    activeOpacity={0.8}
                >
                    <View style={styles.isokBtn}>
                        <Text style={{ color: "#FFFFFF", fontSize: setSpText2(16) }}>完成</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    bgimg: {
        width: screenW,
        height: screenH,
        paddingHorizontal: scaleSize(10),
        backgroundColor: "#FFF"
    },
    isokBtn: {
        height: scaleSize(36),
        borderRadius: scaleSize(18),
        backgroundColor: "#9B9B9B",
        alignItems: "center",
        paddingVertical: scaleSize(7)
    },
    logo: {
        // width: scaleSize(335),
        height: scaleSize(36),
        flexDirection: "row",
        backgroundColor: "#C5C5C5",
        borderRadius: scaleSize(18),
        alignItems: "center",
        marginBottom: scaleSize(20)
    },
    inputStyle: {
        flex: 1,
        height: scaleSize(36),
        textAlign: "center",
        fontSize: setSpText2(14),
        paddingVertical: scaleSize(8),
        marginRight: scaleSize(37)
    },
    position_btn: {
        position: "absolute",
        right: scaleSize(10),
        height: scaleSize(36),
        justifyContent: "center"
    }
})

export default Reg_1