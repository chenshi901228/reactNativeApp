
// 店铺头部搜索框


import React, { Component } from 'react'
import {
    View,
    Text,
    Picker,
    TextInput,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { scaleSize, setSpText2, screenW } from '../../utils/ScreenUtil'


export default class extends Component {
    render() {
        const _this = this.props
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={{ position: "absolute", left: 0, paddingHorizontal: scaleSize(10), zIndex: 10 }}
                    onPress={() => { _this.navigation.goBack() }}
                >
                    <Image style={{ width: scaleSize(8), height: scaleSize(15) }} source={require('../../static/images/icon/backBtn_1.png')} />
                </TouchableOpacity>
                <View style={[styles.logo]}>
                    <Image style={{ width: scaleSize(18), height: scaleSize(18), marginLeft: scaleSize(10) }} source={require('../../static/images/icon/serch.png')} />
                    <TextInput style={[styles.inputStyle]}
                        underlineColorAndroid='transparent'
                        placeholderTextColor="#C2C2C2"
                        placeholder="搜索品牌内商品" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: screenW,
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: scaleSize(9),
        backgroundColor: "#FFF",
        position: 'absolute',
        top: 0,
        left: 0
    },
    logo: {
        width: scaleSize(295),
        height: scaleSize(28),
        flexDirection: "row",
        backgroundColor: "#F3F3F3",
        borderRadius: scaleSize(15),
        alignItems: "center",
        marginHorizontal: scaleSize(40)
    },
    inputStyle: {
        flex: 1,
        height: scaleSize(28),
        fontSize: setSpText2(14),
        paddingVertical: 0,
    }
})

