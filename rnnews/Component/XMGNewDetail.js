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


var NewDetail = React.createClass({

    getDefaultProps(){
        return{

        }
    },

    getInitialState(){
        return{
            // 具体的数据
            detailData: ''
        }
    },

    render(){
        return (
            <WebView
                automaticallyAdjustContentInsets={true}
                style={styles.webView}
                source={{html: this.state.detailData, baseUrl: ''}}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                startInLoadingState={true}
                scalesPageToFit={this.state.scalesPageToFit}
            />
        );
    },


    componentDidMount(){
        // 请求的路径
        var url_api = this.props.rowData.id;
        // console.log(url_api);

        // 发送请求
        fetch(url_api)
            .then((response) => response.json())
            .then((responseData)=>{
                // 处理拿到的数据
                var allData = responseData["body"];

                console.log(allData);

                // 拿到body
                var bodyHtml = allData['text'];


                // 更新状态机
                this.setState({
                    detailData:bodyHtml
                });

            })
            .catch((error) => {
                alert('请求数据失败');
            })


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

module.exports = NewDetail;