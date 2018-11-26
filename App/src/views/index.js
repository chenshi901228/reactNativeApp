
import React, { Component } from 'react'
import TabNavigator from 'react-native-tab-navigator'
import { connect } from 'react-redux'


import { View, Text, StyleSheet, Image } from 'react-native'
import { scaleSize, setSpText2 } from '../utils/ScreenUtil'

import Mine from './mine'
import Home from './home'
import Classify from '../views/classify'
import Find from '../views/find'
import ShoppingCart from '../views/shoppingCart'

class Index extends Component {
    state = {
        selectedTab: "首页"
    }
    render() {
        console.log(this.props)
        return (
            <View style={styles.container}>
                <TabNavigator
                    hidesTabTouch
                    tabBarStyle={{ height: scaleSize(56), paddingVertical: scaleSize(2) }}
                >
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '首页'}
                        title="首页"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../static/images/icon/home_1.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../static/images/icon/home.png")} />}
                        onPress={() => this.setState({ selectedTab: '首页' })}>
                        <Home />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '分类'}
                        title="分类"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../static/images/icon/classify_1.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../static/images/icon/classify.png")} />}
                        onPress={() => this.setState({ selectedTab: '分类' })}>
                        <Classify />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '发现'}
                        title="发现"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../static/images/icon/find_1.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../static/images/icon/find.png")} />}
                        onPress={() => this.setState({ selectedTab: '发现' })}>
                        <Find />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '购物车'}
                        title="购物车"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../static/images/icon/shopping_1.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../static/images/icon/shopping.png")} />}
                        onPress={() => this.setState({ selectedTab: '购物车' })}>
                        <ShoppingCart />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === '我的'}
                        title="我的"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../static/images/icon/mine_1.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../static/images/icon/mine.png")} />}
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
        color: "#666666",
        fontSize: 13
    },
    selectedTabText: {
        color: "red",
        fontSize: 13
    },
    icon: {
        width: 22,
        height: 22,
    }
});
export default connect(({ login_init }) => {
    return {
        login_init
    }
})(Index)