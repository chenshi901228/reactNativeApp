import React, { Component } from 'react'
import {
    View,
    Text,
    Picker,
    TextInput,
    Image,
    StyleSheet
} from 'react-native'
import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'


export default class Serch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            language: ""
        }
    }
    render() {
        return (
            <View style={styles.borderbottom}>
                <View style={{ width: scaleSize(43) }}><Text style={{ fontSize: setSpText2(15), color: "#9B9B9B" }}>成都</Text></View>
                <View style={[styles.logo, { marginLeft: scaleSize(10) }]}>
                    <Image style={{ width: scaleSize(18), height: scaleSize(18), marginLeft: scaleSize(20) }} source={require('../../static/images/icon/serch.png')} />
                    <TextInput style={[styles.inputStyle]}
                        underlineColorAndroid='transparent'
                        placeholderTextColor="#acacac"
                        placeholder="搜你喜欢的" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    borderbottom: {
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: scaleSize(8),
        paddingHorizontal: scaleSize(10),
        backgroundColor: "#fff",
        position: 'absolute',
        top: 0,
        zIndex:20
    },
    logo: {
        width: scaleSize(300),
        height: scaleSize(28),
        flexDirection: "row",
        backgroundColor: "#F3F3F3",
        borderRadius: scaleSize(15),
        alignItems: "center",
    },
    inputStyle: {
        flex: 1,
        height: scaleSize(36),
        fontSize: setSpText2(15),
        paddingVertical: scaleSize(8),
    }
})

