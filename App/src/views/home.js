import React, { Component } from 'react'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import { View, Text, StyleSheet, Image } from 'react-native'

import SerchInput from '../components/serchInput/serchInput'
import Swiper from '../components/swiper/swiper'

import { scaleSize, setSpText2, screenW } from '../utils/ScreenUtil'

export default class extends Component {
    render() {
        return (
            <View>
                <SerchInput />
                <Swiper />
                <View style={{ width: screenW, height: 150 }}>
                    <ScrollableTabView
                        renderTabBar={() => <ScrollableTabBar />}>
                        <View style={styles.back} tabLabel='Tab1'><Text>1111111111</Text></View>
                        <View style={styles.back} tabLabel='Tab2'><Text>2222222222</Text></View>
                        <View style={styles.back} tabLabel='Tab3'><Text>333333333</Text></View>
                        <View style={styles.back} tabLabel='Tab4'><Text>3333333333</Text></View>
                        <View style={styles.back} tabLabel='Tab5'><Text>333333</Text></View>
                        <View style={styles.back} tabLabel='Tab6'><Text>333333333</Text></View>
                    </ScrollableTabView>
                </View>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    back:{
        backgroundColor:"red",
        height:500
    }
})