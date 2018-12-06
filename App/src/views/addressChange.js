import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'


import { scaleSize, setSpText2, screenW } from '../utils/ScreenUtil'



import AddressTitle from '../components/addressChange/address_title'
import AddressItem from '../components/addressChange/address_item'



export default class extends Component {
    render() {
        return (
            <View>
                <AddressTitle title="我的收获地址" right="添加新地址" color="#FFF" navigation={this.props.navigation} />
                <ScrollView style={styles.container}>
                    <AddressItem type="yes" />
                    <AddressItem />
                    <AddressItem />
                    <AddressItem />
                    <AddressItem />
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: scaleSize(44)
    }
})