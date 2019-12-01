import React, { Component } from 'react';
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import QRCode from 'react-native-qrcode';
import { Content, Item, Input, Container, Button, Header, I, CardItem,Card } from 'native-base';
import Barcode from 'react-native-barcode-builder';

export default class QrCodeComponent extends Component {
  static navigationOptions = {
    title: 'Mã thanh toán',
    headerStyle: {
      backgroundColor: '#385999',
     

    },
    headerTintColor: '#fff',
  }
  constructor(props){
     super(props);
    this.state = {time: 60};
  }
  time=()=>{
    if(this.state.time>0){
      this.setState({time: this.state.time-1});
    }else{
      this.setState({time: 60});
    }
  }
  render() {
    const { navigate } = this.props.navigation;
    setTimeout(this.time
      
   

    ,1000)
    return (


      <ScrollView>
    
   <Card  rounded  style={{borderColor:"#385999"}}>
   
     <CardItem style={{flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'}}>
         
      <QRCode style ={{backgroundColor:"red"}} 
            value="http://awesome.link.qr"
            size={200 }
          /> 
     </CardItem>
     
    <CardItem style={{ alignSelf: 'stretch',
              justifyContent: 'center',}}>
   <Text > QRcode</Text>
    </CardItem>
     <CardItem>
    
     <Barcode  value="Hello World" format="CODE128" />
     </CardItem>
     <CardItem style ={{ alignSelf: 'stretch',
              justifyContent: 'center',}}>
   <Text> Barcode</Text>
    </CardItem>
     <CardItem   style ={{ alignSelf: 'stretch',
              justifyContent: 'center',}}>
     <Text>Thời gian reset {  this.state.time} s . Upload</Text>
       </CardItem>
   </Card>
    
       
      
      </ScrollView>
    )




  }
}
