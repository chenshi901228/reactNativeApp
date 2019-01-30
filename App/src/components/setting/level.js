import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'



import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'


export default class extends Component {
    state = {
        level: 3
    }
    renderStar() {
        let newArr = []
        for (let i = 0; i < this.state.level; i++) {
            newArr.push(
                <Image key={i} style={styles.star} source={require('../../static/images/icon/star.png')} />
            )
        }
        return newArr
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: setSpText2(14), color: "#333" }}>等级</Text>
                <View style={{ flexDirection: "row" }}>
                    {this.renderStar()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: scaleSize(44),
        backgroundColor: "#FFF",
        paddingHorizontal: scaleSize(10),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopWidth: scaleSize(1),
        borderTopColor: "#E7E7E7",
        marginTop: scaleSize(10)
    },
    star: {
        width: scaleSize(15),
        height: scaleSize(14),
        marginLeft: scaleSize(3)
    }
})