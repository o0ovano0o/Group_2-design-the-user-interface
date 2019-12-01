import * as React from 'react';
import { Text, View, StyleSheet,ScrollView, Image, WebView,Dimensions } from 'react-native';
import Constants from 'expo-constants';
import Icon from 'react-native-vector-icons/MaterialIcons'
import HTML from 'react-native-render-html';
import { Container, Header, Left, Body, Right, Button, Segment, Content } from 'native-base';
import { Card } from 'react-native-paper';
import file from '../assets/uudaiss.json';
export default class Infor extends React.Component {
      constructor(props){
    super(props);
    this.state = {
     

    };
    }
   static navigationOptions = {
    title: 'Ưu đãi',
    headerStyle: {
      backgroundColor: '#385999',
    },
    headerTitleStyle: {
     fontWeight: 'bold',
  },
    headerTintColor: '#fff',
  };
  
  render() {
    const { navigation } = this.props;  
  const {name,time,view,content}=this.props.navigation.state.params;
  var htmlContent="<img src='https://www.pngarts.com/files/4/Attention-Free-PNG-Image.png' alt='UETPay Image' style='width:325px;height:150px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);  display: block;margin: 0 auto;margin-bottom:12px;background-color:white'>"+"<div style='marign:7px; padding:10px;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);margin-top:15px;background-color:white;border-radius:10px;'>"+name+time+view+content+"</div>";
    return (
      <Container>
        <WebView
        style={styles.container}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ html: htmlContent  }}
     /> 
     
      </Container>
      );
     
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding:10,
    backgroundColor:'#ECEFF1',
  },
 
});