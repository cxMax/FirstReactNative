/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    PixelRatio,
    View,
    TouchableHeightlight
} from 'react-native';

/*================================Touchable样式===========================================*/
var mainText = "点击屏幕任意位置"
function show(text) {
    alert(text);
}
class Hello extends Component {
    render() {
        return (
            <View style={[styles.flex]}>
                <TouchableHeightlight
                    onPress={() => show("输入")}
                    underlayColor="#E1F6FF">
                    <Text style={styles.item}>{mainText}</Text>
                </TouchableHeightlight>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    flex: {
        flex: 1,
        marginTop: 25,
    },
    item: {
        fontSize: 18,
        marginLeft: 5,
        color: '#434343'
    }
});

/*================================TextInput样式===========================================*/

//var Search = React.createClass({
//    render(){
//        return(
//            <View  style = {[styles.flex , styles.flexDirection]}>
//                <View  style = {styles.flex}>
//                    <TextInput style = {styles.input} returnKeyType = "search"> </TextInput>
//                </View>
//                <View  style = {styles.btn}>
//                    <Text style = {styles.search}> 搜索 </Text>
//                </View>
//            </View>
//        );
//    }
//});
//
//class Hello extends Component {
//    render() {
//        return (
//            <View  style = {[styles.flex , styles.topStatus]}>
//                <Search></Search>
//            </View>
//        );
//    }
//}
//
//var styles = StyleSheet.create({
//    flex : {
//        flex : 1 ,
//    } ,
//    flexDirection : {
//        flexDirection:'row'
//    } ,
//    topStatus : {
//        marginTop : 25,
//    } ,
//    input : {
//        height : 45 ,
//        borderWidth : 1,
//        marginLeft : 5,
//        paddingLeft : 5,
//        borderColor : "#ccc" ,
//        borderRadius : 4
//    } ,
//    btn : {
//        width : 55,
//        marginLeft : -5 ,
//        marginRight : 5,
//        backgroundColor : '#23BEFF' ,
//        height : 45 ,
//        justifyContent : 'center' ,
//        alignItems : 'center'
//    } ,
//    search :{
//        color : '#fff' ,
//        fontSize : 15 ,
//        fontWeight : 'bold'
//    }
//});

/*================================list样式===========================================*/

//var Header = require('./Header');
//var List = require('./List');
//var Navigator = require('./Navigator');
//
//class Hello extends Component {
//    render() {
//        return (
//            <View style={styles.flex}>
//                <Navigator />
//                <Header > </Header>
//                <List title = '宇航员在太空宣布“三体”获奖'> </List>
//                <List title = 'NASA发短片纪念火星征程50年'> </List>
//                <List title = '男友连续做一周苦瓜吃吐女友'> </List>
//                <List title = '女童遭鲨鱼袭击又下海救火伴'> </List>
//            </View>
//        );
//    }
//}
//
//const styles = StyleSheet.create({
//    flex: {
//        flex: 1
//    },
//});

AppRegistry.registerComponent('Hello', () => Hello);