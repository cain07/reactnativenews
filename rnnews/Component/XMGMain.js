/**
 * Created by mac on 16/10/30.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS
} from 'react-native';


var Main = React.createClass({
    render(){
        return (
            <View style={styles.container}>
              <TabBarIOS tintColor="orange">
                  <TabBarIOS.Item
                  icon = {require('image!')}
                  title="首页"

                  >

                  </TabBarIOS.Item>
              </TabBarIOS>
            </View>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

module.exports = Main;