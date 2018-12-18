/**
 * Created by Administrator on 2016/7/25.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    Navigator,
    Text,
    BackAndroid,
    StyleSheet
} from 'react-native';

var Navigator = React.createClass({
    configureScene(route){
        return Navigator.SceneConfigs.FadeAndroid;
    },

    renderScene(router, navigator){
        var Component = null;this._navigator = navigator;
        switch(router.name){
            case "welcome":
                Component = WelcomeView;
                break;
            case "feed":
                Component = FeedView;
                break;
            default: //default view
                Component = DefaultView;
        }

        return <Component navigator={navigator} />
    },

    componentDidMount() {
        var navigator = this._navigator;
        BackAndroid.addEventListener('hardwareBackPress', function() {
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                navigator.pop();
                return true;
            }
            return false;
        });
    },


    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress');
    },
    render(){
        return(
            <Navigator
                initialRoute={{name: 'welcome'}}
                configureScene={this.configureScene}
                renderScene={this.renderScene} />
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

var FeedView = React.createClass({
    goBack(){
        this.props.navigator.push({name:"default"});
    },

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.goBack} >
                    I am Feed View! Tab to default view!
                </Text>
            </View>
        )
    }
});


var WelcomeView = React.createClass({
    onPressFeed() {
        this.props.navigator.push({name: 'feed'});
    },


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.onPressFeed} >
                    This is welcome view.Tap to go to feed view.
                </Text>
            </View>
        );
    }

});

var DefaultView = React.createClass({

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Default view</Text>
            </View>
        )
    }
});
module.exports = Navigator ;