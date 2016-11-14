/**
 * Created by mac on 16/10/30.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS
} from 'react-native';

var Home = require('../Component/XMGHome');
var Find = require('../Component/XMGFind');
var Message = require('../Component/XMGMessage');
var Mine = require('../Component/XMGMine');

var Main = React.createClass({
    
    getInitialState(){
        return{
            selectedItem:'home'
        }
    },

    render(){
        return (
              <TabBarIOS tintColor="orange">
                  <TabBarIOS.Item
                  icon = {require('image!tabbar_home')}
                  title="首页"
                  selected={this.state.selectedItem == 'home'}
                  onPress={()=>{this.setState({selectedItem:'home'})}}
                  >
                    <NavigatorIOS
                        style={{flex:1}}
                       initialRoute ={
                          {
                             component:Home,
                             title:'网易'
                          }
                       }
                    />
                  </TabBarIOS.Item>

                  <TabBarIOS.Item
                      icon = {require('image!tabbar_discover')}
                      title="发现"
                      selected={this.state.selectedItem == 'discover'}
                      onPress={()=>{this.setState({selectedItem:'discover'})}}
                  >
                      <NavigatorIOS
                          style={{flex:1}}
                          initialRoute ={
                          {
                             component:Find,
                             title:'发现'
                          }
                       }
                      />
                  </TabBarIOS.Item>

                  <TabBarIOS.Item
                      icon = {require('image!tabbar_message_center')}
                      title="消息"
                      selected={this.state.selectedItem == 'message'}
                      onPress={()=>{this.setState({selectedItem:'message'})}}
                  >
                      <NavigatorIOS
                          style={{flex:1}}
                          initialRoute ={
                          {
                             component:Message,
                             title:'消息'
                          }
                       }
                      />
                  </TabBarIOS.Item>

                  <TabBarIOS.Item
                      icon = {require('image!tabbar_profile')}
                      title="我的"
                      selected={this.state.selectedItem == 'profile'}
                      onPress={()=>{this.setState({selectedItem:'profile'})}}
                  >
                      <NavigatorIOS
                          style={{flex:1}}
                          initialRoute ={
                          {
                             component:Mine,
                             title:'我的'
                          }
                       }
                      />
                  </TabBarIOS.Item>
              </TabBarIOS>
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