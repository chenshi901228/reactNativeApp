import { AppRegistry } from 'react-native';
import App from './App';



// 关闭黄色警告
console.ignoredYellowBox = ['Warning: BackAndroid is deprecated. Please use BackHandler instead.','source.uri should not be an empty string','Invalid props.style key'];
console.disableYellowBox = true 

AppRegistry.registerComponent('App', () => App);
