import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { scaleSize } from '../../utils/ScreenUtil'

import Title from './itemTitle'
import Tab from './itemtab'

export default class extends Component {
    render() {
        const _this = this.props.stock
        return (
            <View style={{ marginBottom: scaleSize(10) }}>
                <Title title={_this.title} />
                {
                    _this.content.map((item, i) => {
                        return <Tab key={i} content={item} />
                    })
                }
            </View>
        )
    }
}