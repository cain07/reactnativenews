/**
 * Created by mac on 16/10/30.
 */
/**
 * Created by mac on 16/10/30.
 */
/**
 * Created by mac on 16/10/30.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


var Home = React.createClass({

    getDefaultProps(){
        return{
            url_api:"http://api.iclient.ifeng.com/ClientNews?id=SYLB10,SYDT10,SYRECOMMEND&page=1&newShowType=1&province=%E5%8C%97%E4%BA%AC%E5%B8%82&city=%E5%8C%97%E4%BA%AC%E5%B8%82&district=%E6%9C%9D%E9%98%B3%E5%8C%BA&gv=5.3.1&av=5.3.1&uid=867066026378151&deviceid=867066026378151&proid=ifengnews&os=android_23&df=androidphone&vt=5&screen=1080x1812&publishid=2006&nw=wifi",
            key_word:'item'
        }
    },

    getInitialState(){
        return{
            //cell 的数据源
        }
    },

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Home
                </Text>
            </View>
        );
    },

    //请求网络数据
    componentDidMount(){
        this.loadDataFromNet();
    },

    loadDataFromNet(){
        fetch(this.props.url_api,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then((response)=>response.json())
            .then((responseData)=>{
               console.log(responseData);
            })
           /* .catch((error) => {
                console.warn(error)
            })*/

        ;
    },


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

module.exports = Home;