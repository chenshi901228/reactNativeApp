

import React, { Component } from 'react'

import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ToastAndroid } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import ImagePicker from 'react-native-image-picker';

import { scaleSize, setSpText2, screenH, screenW } from '../../utils/ScreenUtil'
import HeaderTitle from '../../components/common/headerTitle'

class Forgetpass extends Component {
    state = {
        ishide: true,
        ishide1: true
    }
    back() {
        this.props.navigation.goBack()
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

        // ToastAndroid.showWithGravity("修改成功", ToastAndroid.SHORT, ToastAndroid.CENTER)
        const options = {
            title: '选择图片',
            cancelButtonTitle: '取消',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '选择照片',
            customButtons: [
                { name: 'fb', title: 'Choose Photo from Facebook' },
            ],
            cameraType: 'back',
            mediaType: 'photo',
            videoQuality: 'high',
            durationLimit: 10,
            maxWidth: 300,
            maxHeight: 300,
            quality: 0.8,
            angle: 0,
            allowsEditing: false,
            noData: false,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
    }
    render() {
        return (
            <View style={{ flex: 1, paddingTop: scaleSize(44), backgroundColor: "#FFF" }}>
                <HeaderTitle title="设置密码" back={this.back.bind(this)} />
                <KeyboardAwareScrollView style={styles.bgimg}>
                    <View style={[styles.logo, { marginTop: scaleSize(49) }]}>
                        <Image style={[styles.imgStyle, { width: scaleSize(15), height: scaleSize(28) }]} source={require("../../static/images/icon/phone_icon_1.png")} />
                        <TextInput style={[styles.inputStyle]}
                            underlineColorAndroid='transparent'
                            placeholderTextColor="#9B9B9B"
                            keyboardType="numeric"
                            maxLength={20}
                            placeholder="输入手机号" />
                    </View>
                    <View style={styles.logo}>
                        <Image style={[styles.imgStyle, { width: scaleSize(16), height: scaleSize(19) }]} source={require("../../static/images/icon/verificationCode.png")} />
                        <TextInput style={[styles.inputStyle]}
                            underlineColorAndroid='transparent'
                            placeholderTextColor="#9B9B9B"
                            keyboardType="numeric"
                            maxLength={10}
                            placeholder="输入验证码" />
                        <TouchableOpacity
                            style={[styles.position_btn]}
                            activeOpacity={1}
                            onPress={() => { this.getVerificationCode() }}
                        >
                            <View style={{ borderRadius: scaleSize(13), backgroundColor: "#9B9B9B", paddingHorizontal: scaleSize(5), paddingVertical: scaleSize(4) }}>
                                <Text style={{ fontSize: setSpText2(12), color: "#4A4A4A" }}>获取验证码</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.logo}>
                        <Image style={[styles.imgStyle, { width: scaleSize(15), height: scaleSize(20) }]} source={require("../../static/images/icon/pas_icon_1.png")} />
                        <TextInput style={[styles.inputStyle]}
                            underlineColorAndroid='transparent'
                            placeholderTextColor="#9B9B9B"
                            maxLength={32}
                            secureTextEntry={this.state.ishide}
                            placeholder="设置新密码" />
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={[styles.position_btn]}
                            onPress={() => { this.changeShow() }}
                        >
                            <Image style={{ width: scaleSize(20), height: scaleSize(13) }} source={this.state.ishide ? require("../../static/images/icon/ishide_1.png") : require("../../static/images/icon/isopen_1.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.logo}>
                        <Image style={[styles.imgStyle, { width: scaleSize(15), height: scaleSize(20) }]} source={require("../../static/images/icon/pas_icon_1.png")} />
                        <TextInput style={[styles.inputStyle]}
                            underlineColorAndroid='transparent'
                            placeholderTextColor="#9B9B9B"
                            maxLength={32}
                            secureTextEntry={this.state.ishide1}
                            placeholder="确认新密码" />
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={[styles.position_btn]}
                            onPress={() => { this.changeShow1() }}
                        >
                            <Image style={{ width: scaleSize(20), height: scaleSize(13) }} source={this.state.ishide1 ? require("../../static/images/icon/ishide_1.png") : require("../../static/images/icon/isopen_1.png")} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        style={{ marginTop: scaleSize(10) }}
                        onPress={() => { this.reg() }}
                        activeOpacity={1}
                    >
                        <View style={styles.isokBtn}>
                            <Text style={{ color: "#9B9B9B", fontSize: setSpText2(14) }}>完成</Text>
                        </View>
                    </TouchableOpacity>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bgimg: {
        paddingHorizontal: scaleSize(10)
    },
    isokBtn: {
        height: scaleSize(44),
        backgroundColor: "rgba(0,0,0,0)",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: scaleSize(7),
        borderWidth: scaleSize(1),
        borderColor: "#9B9B9B"
    },
    logo: {
        // width: scaleSize(335),
        height: scaleSize(44),
        flexDirection: "row",
        backgroundColor: "rgba(0,0,0,0)",
        alignItems: "center",
        marginBottom: scaleSize(10),
        borderWidth: scaleSize(1),
        borderColor: "#9B9B9B"
    },
    inputStyle: {
        flex: 1,
        height: scaleSize(44),
        textAlign: "center",
        fontSize: setSpText2(14),
        paddingVertical: scaleSize(8)
    },
    position_btn: {
        height: scaleSize(44),
        position: "absolute",
        right: 0,
        justifyContent: "center",
        paddingHorizontal: scaleSize(10)
    },
    imgStyle: {
        position: "absolute",
        left: scaleSize(10)
    }
})

export default Forgetpass