import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Image, TextInput } from 'react-native'



import { scaleSize, setSpText2, screenW } from '../../utils/ScreenUtil'

import HeaderTitle from '../../components/common/headerTitle'

export default class extends Component {
    render() {
        return (
            <View>
                <HeaderTitle title="修改昵称" back={() => { this.props.navigation.goBack() }} />
                <ScrollView style={styles.container}>
                    <View style={{ flex: 1, height: scaleSize(44), backgroundColor: "#FFF", paddingHorizontal: scaleSize(10), borderRadius: scaleSize(2) }}>
                        <TextInput ref="textInput" style={styles.input} placeholder="输入昵称" placeholderTextColor="#999" underlineColorAndroid='transparent' />
                        <TouchableOpacity onPress={() => { this.refs.textInput.clear() }} activeOpacity={0.8} style={styles.cleanBtn}>
                            <Image style={{ width: scaleSize(16), height: scaleSize(16) }} source={require('../../static/images/icon/clean.png')} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: setSpText2(12), color: "#999", marginTop: scaleSize(5) }}>注意：与商城业务或卖家冲突的昵称，商城将有权收回</Text>
                    <View style={styles.saveBtn}>
                        <Text style={{ fontSize: setSpText2(14), color: "#FFF" }}>保存</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: scaleSize(44),
        paddingHorizontal: scaleSize(10),
        paddingTop: scaleSize(10)
    },
    input: {
        fontSize: setSpText2(14)
    },
    cleanBtn: {
        width: scaleSize(36),
        height: scaleSize(44),
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: 0
    },
    saveBtn: {
        flex: 1,
        height: scaleSize(44),
        backgroundColor: "#4A4A4A",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: scaleSize(2),
        marginTop: scaleSize(52)
    }
})