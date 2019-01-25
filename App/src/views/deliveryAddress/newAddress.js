
// 添加新地址

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
                <HeaderTitle color="#FFF" right="保存" title="添加收获地址" rightColor="#FF6666" back={this.back.bind(this)} handle={this.saveBtn.bind(this)} />
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