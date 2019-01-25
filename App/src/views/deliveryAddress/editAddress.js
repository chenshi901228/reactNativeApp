// 编辑收货地址

import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import { scaleSize } from '../../utils/ScreenUtil'

import HeaderTitle from '../../components/common/headerTitle'

export default class extends Component {
    back() {
        this.props.navigation.goBack()
    }
    saveBtn() {
        console.log("保存")
    }
    render() {
        return (
            <View>
                <HeaderTitle color="#FFF" right="保存" title="编辑收获地址" rightColor="#666" back={this.back.bind(this)} handle={this.saveBtn.bind(this)} />
                <ScrollView style={styles.container}>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: scaleSize(44)
    }
})