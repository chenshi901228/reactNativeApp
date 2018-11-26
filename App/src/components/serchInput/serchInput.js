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
                <Image style={{ width: scaleSize(17), height: scaleSize(17) }} source={require('../../static/images/icon/sys.png')} />
                <Image style={{ width: scaleSize(16), height: scaleSize(16), position: 'absolute', left: scaleSize(66), zIndex: 10 }} source={require('../../static/images/icon/serch.png')} />
                <TextInput
                    style={{ flex: 1, fontSize: setSpText2(10), height: scaleSize(36), backgroundColor: "#f6f6f6", borderRadius: scaleSize(50), marginHorizontal: scaleSize(17), paddingLeft: scaleSize(45) }}
                    underlineColorAndroid='transparent'
                    placeholder="输入关键词或粘贴淘宝天猫宝贝标题找券"
                    placeholderTextColor="#acacac"
                    multiline={true}
                />
                <Image style={{ width: scaleSize(17), height: scaleSize(17) }} source={require('../../static/images/icon/classfy.png')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    borderbottom: {
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: scaleSize(9),
        paddingHorizontal: scaleSize(10),
        backgroundColor: "#fff",
        borderBottomWidth:scaleSize(1),
        borderBottomColor: "#e8e8e8",
    }
})

