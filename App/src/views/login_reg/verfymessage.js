

import React, { Component } from 'react'

import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native'


import { scaleSize, setSpText2, screenH, screenW } from '../../utils/ScreenUtil'
import HeaderTitle from '../../components/headerTitle/headerTitle'



class Reg extends Component {
    verfy() {
        console.log("验证")
    }
    render() {
        return (
            <View style={{ paddingHorizontal: scaleSize(10) }}>
                <HeaderTitle title="手机号" navigation={this.props.navigation} />
                <Image style={{ width: scaleSize(12), height: scaleSize(23), position: 'absolute', top: scaleSize(80), left: scaleSize(12) }} source={require("../../static/images/icon/phone_icon_1.png")} />
                <TextInput style={styles.inputStyle}
                    underlineColorAndroid='#E75F5B'
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    maxLength={20}
                    placeholder="请输入手机号" />
                <TouchableOpacity
                    style={{ marginTop: scaleSize(10) }}
                    onPress={() => {
                        Alert.alert(
                            '提示',
                            'message',
                            [
                                { text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                { text: '注册', onPress: () => console.log('OK Pressed') },
                            ],
                            { cancelable: false }
                        )
                    }}
                    activeOpacity={0.8}
                >
                    <View style={styles.btn}>
                        <Text style={{ color: "#666", fontSize: setSpText2(14) }}>下一步</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bgimg: {
        width: screenW,
        height: screenH,
    },
    btn: {
        height: scaleSize(40),
        borderRadius: scaleSize(2),
        backgroundColor: "#D8D8D8",
        alignItems: "center",
        paddingVertical: scaleSize(10)
    },
    inputStyle: {
        height: scaleSize(50),
        fontSize: setSpText2(14),
        paddingBottom: scaleSize(20),
        marginTop: scaleSize(30),
        paddingLeft: scaleSize(22),
    }
})

export default Reg