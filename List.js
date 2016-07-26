/**
 * Created by Administrator on 2016/7/22.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    View
} from 'react-native';

var List = React.createClass({
    render(){
        return(
            <View  style = {styles.list_item}>
                <Text style = {styles.list_item_font}>{this.props.title} </Text>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    flex :{
        flex : 1
    },
    list_item : {
        height : 40 ,
        marginLeft : 10,
        marginRight : 10,
        borderBottomWidth : 1,
        borderBottomColor : '#ddd' ,
        justifyContent : 'center'
    } ,
    list_item_font : {
        fontSize : 16
    }
});

module.exports = List ;