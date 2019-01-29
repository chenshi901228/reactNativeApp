import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'


import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'


export default class extends Component {
    render() {
        const _this = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{_this.title}</Text>
                {_this.right ? <TouchableOpacity onPress={() => { _this.navigation.navigate(_this.route) }} style={{ flexDirection: "row", alignItems: "center", height: scaleSize(44) }}>
                    {_this.rightText ? <Text style={styles.text}>{_this.rightText}</Text> : <Text></Text>}
                    <Image style={styles.img} source={require('../../static/images/icon/choice.png')} />
                </TouchableOpacity> : <Text></Text>}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: scaleSize(44),
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: scaleSize(10),
        borderBottomWidth: scaleSize(1),
        borderBottomColor: "#F2F3F2",
        paddingHorizontal: scaleSize(10)
    },
    title: {
        fontSize: setSpText2(15),
        color: "#000"
    },
    text: {
        fontSize: setSpText2(12),
        color: "#999"
    },
    img: {
        width: scaleSize(6),
        height: scaleSize(11),
        marginLeft: scaleSize(10)
    }
})