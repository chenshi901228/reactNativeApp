import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'


export default class extends Component {

    render() {
        const _this = this.props
        return (
            <View style={styles.container}>
                {
                    _this.items.map((item, i) => {
                        return <TouchableOpacity
                            onPress={() => {
                                item.key ? _this.navigation.navigate(item.route, { key: item.key }) :
                                    _this.navigation.navigate(item.route)
                            }}
                            activeOpacity={0.7}
                            style={{ alignItems: "center" }}
                            key={i}>
                            <Image style={[styles.img, item.text == "粉丝订单" ? { width: scaleSize(17) } : { width: scaleSize(20) }]} source={item.img} />
                            <Text style={styles.text}>{item.text}</Text>
                        </TouchableOpacity>
                    })
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: scaleSize(72),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#FFF"
    },
    img: {
        height: scaleSize(20),
        marginBottom: scaleSize(7)
    },
    text: {
        fontSize: setSpText2(13),
        color: "#4D4D4D"
    }
})