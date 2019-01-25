
// 轮播图组件

import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'


import Swiper from 'react-native-swiper'

import { scaleSize, screenW } from '../../utils/ScreenUtil'


export default class extends Component {
    render() {
        return <View style={styles.wrapper}>
            <Swiper
                activeDotColor="#4a4a4a"
                dotColor="#9B9B9B"
                paginationStyle={{ bottom: scaleSize(10) }}
                autoplay >
                <Image style={styles.img} source={require('../../static/images/banner/3b3b1daed0dce0c799a32c9f36432d70.jpeg')} />
                <Image style={styles.img} source={require('../../static/images/banner/3e5c275c66be3720c22bc733a510566a.jpeg')} />
                <Image style={styles.img} source={require('../../static/images/banner/0945e0788173bab07dfba3e36f64ffeb.jpg')} />
            </Swiper>
        </View>

    }
}


const styles = StyleSheet.create({
    img: {
        width: screenW,
        height: scaleSize(150)
    },
    wrapper: {
        width: screenW,
        height: scaleSize(150),
        marginTop: scaleSize(4)
    }
})