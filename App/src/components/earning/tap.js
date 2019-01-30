import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Modal from 'react-native-modalbox'

import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'

export default class extends Component {
    render() {
        const _this = this.props.content
        return (
            <View style={[{ flex: 1, alignItems: "center" }, _this.border ? { height: scaleSize(45), borderRightWidth: scaleSize(1), borderRightColor: "#F2F3F2" } : {}]}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ fontSize: setSpText2(13), color: "#666" }}>{_this.title}</Text>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => { this.refs.modal.open() }}>
                        <Image style={styles.qImg} source={require('../../static/images/icon/questions.png')} />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: setSpText2(15), color: "#666", lineHeight: scaleSize(21), marginTop: scaleSize(6) }}>
                    {_this.money == 0 ? "0.00" : _this.money}{/元/.test(_this.title) ? "" : "元"}
                </Text>
                <Modal style={styles.modal}
                    ref={"modal"}
                    backdropPressToClose={true}
                    backButtonClose={true}
                    backdropOpacity={0.2}
                    coverScreen>
                    <View style={{ height: scaleSize(68), borderBottomWidth: scaleSize(2), borderBottomColor: "#F2F3F2", justifyContent: "center" }}>
                        <Text style={{ fontSize: setSpText2(14), color: "#666", textAlign: "center" }}>{_this.title.replace("(元)", "")}</Text>
                        <Text style={{ fontSize: setSpText2(12), color: "#999", textAlign: "center" }}>{_this.msg}</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.modalBtn} onPress={() => { this.refs.modal.close() }}>
                            <Text style={{ fontSize: setSpText2(14), color: "#FF6666" }}>确认</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    qImg: {
        width: scaleSize(12),
        height: scaleSize(13),
        marginLeft: scaleSize(2)
    },
    modal: {
        width: scaleSize(275),
        height: scaleSize(118),
        borderRadius: scaleSize(5),
        justifyContent: "center"
    },
    modalBtn: {
        height: scaleSize(48),
        alignItems: "center",
        justifyContent: "center"
    }
})