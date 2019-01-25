import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'

export default class extends Component {
    state = {
        goodsNumber: "1"
    }
    increment() {
        let newNum = parseInt(this.state.goodsNumber)
        newNum++
        this.setState({
            goodsNumber: newNum + ""
        })
    }
    decrement() {
        let newNum = parseInt(this.state.goodsNumber)
        if (newNum > 1) {
            newNum--
            this.setState({
                goodsNumber: newNum + ""
            })
        }
    }
    changeNum(text) {
        if (parseInt(text) >= 1) {
            this.setState({
                goodsNumber: text
            })
        } else {
            this.setState({
                goodsNumber: "1"
            })
        }
    }
    render() {
        return (
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity activeOpacity={1} onPress={() => { this.decrement() }} style={styles.numberBtn}>
                    <Text style={{ fontSize: setSpText2(13) }}>-</Text>
                </TouchableOpacity>
                <TextInput style={styles.inputStyle} keyboardType="numeric" underlineColorAndroid="transparent" value={this.state.goodsNumber} onChangeText={(text) => this.changeNum(text)} />
                <TouchableOpacity activeOpacity={1} onPress={() => { this.increment() }} style={styles.numberBtn}>
                    <Text style={{ fontSize: setSpText2(13) }}>+</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    inputStyle: {
        width: scaleSize(28),
        height: scaleSize(17),
        padding: 0,
        marginHorizontal: scaleSize(1),
        textAlign: "center",
        backgroundColor: "#D8D8D8",
        fontSize: setSpText2(13)
    },
    numberBtn: {
        width: scaleSize(17),
        height: scaleSize(17),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d6d6d6"
    }
})