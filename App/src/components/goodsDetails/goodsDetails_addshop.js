// 加入购物车

import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, ScrollView, TextInput, TouchableWithoutFeedback } from 'react-native'


import { RadioButtons } from 'react-native-radio-buttons'
import Modal from 'react-native-modalbox'


import { scaleSize, setSpText2, screenW, screenH } from '../../utils/ScreenUtil'

const arr = [{
    rule: "100ml"
}, {
    rule: "10ml"
}, {
    rule: "50ml"
}, {
    rule: "100ml"
}, {
    rule: "100ml"
}]

export default class extends Component {
    state = {
        sizeOption: "",
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
        function setSelectedOption(sizeOption) {
            this.setState({
                sizeOption
            });
        }

        function renderOption(option, selected, onSelect, index) {
            const styletext = selected ? styles.acticedText : styles.baseText;
            const styleback = selected ? styles.acticedBorder : styles.baseBorder;
            return (
                <TouchableOpacity activeOpacity={1} style={[styles.choiceBtn, styleback]} onPress={onSelect} key={index}>
                    <Text style={[styletext, { fontSize: setSpText2(12) }]}>{option.rule}</Text>
                </TouchableOpacity>
            );
        }
        function renderContainer(optionNodes) {
            return <View style={{ flexDirection: "row", flexWrap: "wrap", paddingRight: scaleSize(80) }}>{optionNodes}</View>;
        }



        return (
            <View>
                <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: "row", alignItems: "flex-end", marginBottom: scaleSize(21) }}>
                        <Image style={styles.imgStyle} source={require('../../static/images/cs.jpg')} />
                        <View>
                            <Text style={[styles.color, { fontSize: setSpText2(16), marginBottom: scaleSize(6) }]}>￥12564</Text>
                            <Text style={[styles.font, { color: "#666" }]}>选择颜色分类</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.title}>颜色分类</Text>
                        <RadioButtons
                            options={arr}
                            onSelection={setSelectedOption.bind(this)}
                            selectedOption={this.state.sizeOption}
                            renderOption={renderOption}
                            renderContainer={renderContainer}
                        />
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: scaleSize(100), marginRight: scaleSize(10) }}>
                        <Text style={styles.title}>购买数量</Text>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity activeOpacity={1} onPress={() => { this.decrement() }} style={styles.numberBtn}>
                                <Text style={{ fontSize: setSpText2(16) }}>-</Text>
                            </TouchableOpacity>
                            <TextInput style={styles.inputStyle} keyboardType="numeric" underlineColorAndroid="transparent" value={this.state.goodsNumber} onChangeText={(text) => this.changeNum(text)} />
                            <TouchableOpacity activeOpacity={1} onPress={() => { this.increment() }} style={styles.numberBtn}>
                                <Text style={{ fontSize: setSpText2(16) }}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <TouchableOpacity activeOpacity={1} onPress={() => { console.log(this.state) }} style={styles.enterButton}>
                    <Text style={{ fontSize: setSpText2(14), color: "#FFF" }}>确定</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        width: screenW,
        paddingLeft: scaleSize(20),
        paddingTop: scaleSize(20),
        marginBottom: scaleSize(60)
    },
    imgStyle: {
        width: scaleSize(90),
        height: scaleSize(90),
        marginRight: scaleSize(6)
    },
    color: {
        color: "#FF6666"
    },
    font: {
        fontSize: setSpText2(12)
    },
    title: {
        fontSize: setSpText2(13),
        color: "#333",
        marginBottom: scaleSize(11)
    },
    enterButton: {
        width: scaleSize(325),
        height: scaleSize(40),
        position: "absolute",
        bottom: scaleSize(19),
        left: scaleSize(25),
        zIndex: 20,
        borderRadius: scaleSize(25),
        backgroundColor: "#4A4A4A",
        justifyContent: "center",
        alignItems: "center"
    },
    choiceBtn: {
        width: scaleSize(76),
        height: scaleSize(21),
        backgroundColor: "#E9E9E9",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: scaleSize(5),
        marginRight: scaleSize(10),
        marginBottom: scaleSize(10)
    },
    baseBorder: {
        borderColor: "#E9E9E9",
        backgroundColor: "#E9E9E9"
    },
    acticedBorder: {
        borderWidth: scaleSize(1),
        borderColor: "#FF6666",
        backgroundColor: "#FFF"
    },
    baseText: {
        color: "#4A4A4A",
    },
    acticedText: {
        color: "#FF6666"
    },
    inputStyle: {
        width: scaleSize(34),
        height: scaleSize(21),
        padding: 0,
        marginHorizontal: scaleSize(1),
        textAlign: "center",
        backgroundColor: "#D8D8D8",
        fontSize: setSpText2(13)
    },
    numberBtn: {
        width: scaleSize(20),
        height: scaleSize(21),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D8D8D8"
    }
})