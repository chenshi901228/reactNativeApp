import React, { Component } from 'react'
import { TouchableOpacity, View, Image, Text } from 'react-native'
import { scaleSize, setSpText2, screenH, screenW } from '../../utils/ScreenUtil'
export default class extends Component {
    render() {
        const _this = this.props
        return (
            <View style={{ height: scaleSize(44), alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity
                    style={{ position: "absolute", left: scaleSize(-10), paddingHorizontal: scaleSize(10) }}
                    onPress={() => { _this.navigation.goBack() }}
                >
                    <Image style={{ width: scaleSize(8), height: scaleSize(15) }} source={require('../../static/images/icon/backBtn_1.png')} />
                </TouchableOpacity>
                <Text style={{ fontSize: scaleSize(16), color: "#333" }}>{_this.title}</Text>
            </View>
        )
    }
}