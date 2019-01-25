
// 店铺 头部banner

import React, { Component } from 'react'
import {
    View,
    Text,
    Picker,
    TextInput,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { scaleSize, setSpText2, screenW } from '../../utils/ScreenUtil'





export default class extends Component {
    state = {
        textLine: 3
    }
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.bannerImg} source={require('../../static/images/banner/3b3b1daed0dce0c799a32c9f36432d70.jpeg')} />
                <Image style={styles.storeImg} source={require('../../static/images/storeImg.png')} />
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => { this.setState({ textLine: 50 }) }}
                    style={{ marginLeft: scaleSize(20), marginTop: scaleSize(35), marginBottom: scaleSize(10) }}>
                    <Text numberOfLines={this.state.textLine} style={styles.textStyle}>
                        英国知名品牌祖·玛珑JO MALONE LONDON，属于雅诗兰黛 集团，其香水以简单而纯粹为诸多明星喜爱。质朴的包装，透 露着浓厚的英伦风情。JO MALONE是一家位于伦敦的…
                        英国知名品牌祖·玛珑JO MALONE LONDON，属于雅诗兰黛 集团，其香水以简单而纯粹为诸多明星喜爱。质朴的包装，透 露着浓厚的英伦风情。JO MALONE是一家位于伦敦的…
                </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // width: screenW,
        backgroundColor: "#FFF"
    },
    bannerImg: {
        width: screenW,
        height: scaleSize(155)
    },
    storeImg: {
        width: scaleSize(60),
        height: scaleSize(60),
        position: "absolute",
        left: scaleSize(20),
        top: scaleSize(120)
    },
    textStyle: {
        fontSize: setSpText2(12),
        color: "#9B9B9B",
        width: scaleSize(324)
    }
})

