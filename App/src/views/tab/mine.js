import React, { Component } from 'react'
import { View, Text, ProgressBarAndroid } from 'react-native'


export default class extends Component {
    render() {
        return (
            <View>
                <ProgressBarAndroid />
                <ProgressBarAndroid styleAttr="Horizontal" />
                <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
                <ProgressBarAndroid
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.5}
                />
            </View>
        )
    }
}
