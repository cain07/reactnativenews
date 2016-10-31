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
    getDefaultProps(){
        return{
           url_api:"http://c1.m.163.com/nc/article/headline/T1348647853363/0-20.html?from=toutiao&fn=2&passport=&devId=nTM86EPlcxZu09VdpTEh6aR3%2B%2FQX6x8vHBD3ne3k5bbgOrg%2FIP5DcguSDmtYyWbs&size=20&version=8.1&spever=false&net=wifi&lat=5OtqEKiivwW4K%2BGMt6DBdA%3D%3D&lon=jKlRVyYkSNti2wwsjGQHrw%3D%3D&ts=1463384311&sign=TtD7IZllDljVzBs2E4sa9fQyKTKF021w2EUC6qx1gEN48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore",
            key_word:'T1348647853363'
        }
    },

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