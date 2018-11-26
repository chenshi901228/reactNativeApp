

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, Alert, Modal } from 'react-native'


import { scaleSize, setSpText2, screenH, screenW } from '../../utils/ScreenUtil'



class Hello extends Component {
    state = {
        modalVisible: false
    }
    componentDidMount() {
        // this.props.dispatch(login())
    }
    toIndex() {
        this.props.navigation.navigate('Index', { name: "chenshi" })
    }
    merchant_login() {
        this.props.navigation.navigate('Merchant_login')
    }
    render() {
        return (
            <ImageBackground style={styles.bgimg}
                source={{ uri: "https://alipic.lanhuapp.com/bb704d8d79ba49875a74f68b85a6f77d" }}>
                <Modal
                    animationType="fade"
                    transparent={true}
                    // presentationStyle="overFullScreen"
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        this.setState({
                            modalVisible: false
                        })
                    }}>
                    <TouchableOpacity activeOpacity={1} style={{ flex: 1 }} onPress={() => { this.setState({ modalVisible: false }) }}>
                        <View style={{ flex: 1, justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.5)", padding: 50 }}>
                            <View style={{ backgroundColor: "#fff" }}>
                                <Text>111111111111</Text>
                                <Text>111111111111</Text>
                                <Text>111111111111</Text>
                                <Text>111111111111</Text>
                                <Text>111111111111</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>
                <View style={{ paddingHorizontal: scaleSize(20), paddingTop: scaleSize(20) }}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <TouchableOpacity onPress={() => {
                            Alert.alert(
                                '提示',
                                '确定要离开牛动店铺吗？',
                                [
                                    { text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                    { text: '确定', onPress: () => console.log('OK Pressed') },
                                ],
                                { cancelable: false }
                            )
                        }}>
                            <Image style={{ width: scaleSize(15), height: scaleSize(15) }} source={require('../../static/images/icon/closeBtn.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.merchant_login() }}>
                            <Text style={{ fontSize: setSpText2(14), color: "#fff" }}>商家登录</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={{ marginTop: scaleSize(245) }} activeOpacity={0.8} onPress={() => { this.props.navigation.navigate("Reg") }}>
                        <View style={styles.loginBtn}>
                            <Text style={{ color: "#fff", fontSize: setSpText2(18) }}>注册</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: scaleSize(17) }}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => { this.props.navigation.navigate("Phone_login") }}>
                            <View style={styles.logo}>
                                <Image style={{ width: scaleSize(32), height: scaleSize(32), marginLeft: scaleSize(18), marginRight: scaleSize(17) }} source={require("../../static/images/icon/wxlogo.png")} />
                                <Text style={{ color: "#fff", fontSize: setSpText2(14) }}>手机登录</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => { this.setState({ modalVisible: true }) }}>
                            <View style={styles.logo}>
                                <Image style={{ width: scaleSize(32), height: scaleSize(32), marginLeft: scaleSize(18), marginRight: scaleSize(17) }} source={require("../../static/images/icon/phonelogo.png")} />
                                <Text style={{ color: "#fff", fontSize: setSpText2(14) }}>微信登录</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
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
        borderRadius: scaleSize(22),
        backgroundColor: "#E75F5B",
        paddingVertical: scaleSize(6),
        alignItems: "center"
    },
    logo: {
        width: scaleSize(155),
        height: scaleSize(36),
        flexDirection: "row",
        backgroundColor: "#4A4A4A",
        borderRadius: scaleSize(20),
        alignItems: "center",
    }
})

export default connect(({ helloReducer }) => {
    return { helloReducer }
})(Hello)