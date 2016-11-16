/**
 * Created by mac on 16/10/30.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    ListView,
    Image,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

var ScrollImage = require('../Component/XMGScrollImage');
var NewsDetail = require('../Component/XMGNewDetail');

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
            // ListView头部的数据源
            headerDataArr: [],

            // cell的数据源
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            })
        }
    },

    render(){
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderHeader={this.renderHeader}

            />

        );
    },

    renderRow(rowData){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{this.pushToNewDetail(rowData)}}>
                <View style={styles.cellViewStyle}>

                    <Image source={{uri:rowData.thumbnail}} style={styles.leftImgStyle}/>

                    <View style={styles.rightViewStyle}>
                        <Text style={styles.RtitleStyle}>{rowData.title} </Text>
                        <Text start={styles.RsubTitleStyle}>{rowData.updateTime}</Text>
                        <Text style={styles.RtitleComment}>{rowData.commentsall}回复</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );

    },

    pushToNewDetail(rowData){
      this.props.navigator.push({
          title:rowData.title,
          component:NewsDetail,
          passProps:{rowData}
      })
    },

    renderHeader(){
        if (this.state.headerDataArr.length == 0) return;
        
        return(
          <ScrollImage
                imageDataArr = {this.state.headerDataArr}
          />
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
              // console.log(responseData);
                this.dealWithData(responseData)
            })
            .catch((error) => {
                console.warn(error)
            })
    },

    dealWithData(jsonData){
        var headerArr = [],listDataArr = [];
        for (var i=0;i<jsonData.length;i++){
            var data = jsonData[i];
            if (data.type == "focus"){
                headerArr = data.item;
            }else {
                listDataArr = data.item;
            }
        }
        this.setState({
            headerDataArr:headerArr,
            dataSource:this.state.dataSource.cloneWithRows(listDataArr)
        });
        console.log(headerArr,listDataArr);
    }
});

const styles = StyleSheet.create({
    leftImgStyle:{
        width:90,
        height:90
    },
    cellViewStyle:{
        flexDirection:'row',
        padding:10,
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.8
    },
    RtitleStyle:{
        fontSize:16,
        marginBottom:5
    },
    RtitleComment:{
        position:'absolute',
        right:10,
        bottom:0,

        borderWidth:0.5,
        borderColor:'gray',
        borderRadius:5,
        padding:3
    },
    RsubTitleStyle:{
        position:'absolute',
        bottom:0,

        color:'gray'
    },
    rightViewStyle:{
        width: 260,
        marginLeft:8
    }

});

module.exports = Home;