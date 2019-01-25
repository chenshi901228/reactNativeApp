


// 底部导航
import React, { Component } from 'react'
import TabNavigator from 'react-native-tab-navigator'
import { connect } from 'react-redux'


import { View, Text, StyleSheet, Image } from 'react-native'
import { scaleSize, setSpText2 } from '../../utils/ScreenUtil'

import Mine from './mine'
import Home from './home'
import ShoppingCart from './shoppingCart'

class Index extends Component {
    state = {
        selectedTab: "首页"
    }
    render() {
        return (
            <View style={styles.container}>
                <TabNavigator
                    hidesTabTouch
                    tabBarStyle={{ paddingBottom: scaleSize(2), backgroundColor: "#FFF", borderTopWidth: 0 ,height:scaleSize(50)}}
                >
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '首页'}
                        title="首页"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon1} source={require("../../static/images/icon/home_1.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon1} source={require("../../static/images/icon/home.png")} />}
                        onPress={() => this.setState({ selectedTab: '首页' })}>
                        <Home navigation={this.props.navigation} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '购物车'}
                        title="购物车"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../../static/images/icon/shopping_1.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../../static/images/icon/shopping.png")} />}
                        onPress={() => this.setState({ selectedTab: '购物车' })}>
                        <ShoppingCart />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '我的'}
                        title="我的"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../../static/images/icon/mine_1.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../../static/images/icon/mine.png")} />}
                        onPress={() => this.setState({ selectedTab: '我的' })}>
                        <Mine />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabText: {
        color: "#9B9B9B",
        fontSize: setSpText2(12)
    },
    selectedTabText: {
        color: "#4A4A4A",
        fontSize: setSpText2(12)
    },
    icon1: {
        width: scaleSize(22),
        height: scaleSize(21),
    },
    icon: {
        width: scaleSize(21),
        height: scaleSize(21),
    }
});
export default connect(({ login_init }) => {
    return {
        login_init
    }
})(Index)