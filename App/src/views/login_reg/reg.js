

import React, { Component } from 'react'

import { View, Text, Image, StyleSheet, TouchableOpacity, Alert, TextInput } from 'react-native'


import { scaleSize, setSpText2, screenH, screenW } from '../../utils/ScreenUtil'
import HeaderTitle from '../../components/headerTitle/headerTitle'


class Reg extends Component {
    state = {
        code: "1234",
        defaultBtn: "请输入正确的邀请码"
    }
    writeDetail() {
        if (this.state.defaultBtn == "下一步") {
            this.props.navigation.navigate("Reg_1")
        } else {
            Alert.alert(
                '提示',
                '请输入正确的邀请码',
                [
                    { text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                    { text: '确定', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false }
            )
        }
    }
    render() {
        return (
            <View style={{ paddingHorizontal: scaleSize(10) }}>
                <HeaderTitle title="邀请码" navigation={this.props.navigation} />
                <TextInput style={styles.inputStyle}
                    underlineColorAndroid='#E75F5B'
                    placeholderTextColor="#999"
                    keyboardType="numeric"
                    maxLength={10}
                    onChangeText={(text) => {
                        if (text == this.state.code) {
                            this.setState({
                                defaultBtn: "下一步"
                            })
                        } else {
                            this.setState({
                                defaultBtn: "请输入正确的邀请码"
                            })
                        }
                    }}
                    placeholder="请输入邀请码" />
                <TouchableOpacity
                    onPress={() => { this.writeDetail() }}
                    activeOpacity={0.8}
                >
                    <View style={styles.btn}>
                        <Text style={{ color: "#666", fontSize: setSpText2(14) }}>{this.state.defaultBtn}</Text>
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
        marginTop: scaleSize(10),
        borderRadius: scaleSize(2),
        backgroundColor: "#D8D8D8",
        alignItems: "center",
        paddingVertical: scaleSize(10)
    },
    inputStyle: {
        height: scaleSize(50),
        fontSize: setSpText2(14),
        paddingBottom: scaleSize(20),
        marginTop: scaleSize(30)
    }
})

export default Reg