import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Dimensions } from "react-native";
import { Root } from "native-base";
import { Content, Item, Input, Button, Container, Header, Footer, Text, Card, CardItem } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import *as Font from "expo-font";
const styles = StyleSheet.create({
  layout: {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundColor: "red"
  },
  footer: {
    backgroundColor: '#385999',
    position: "relative",
    bottom: 0
  },
  button: {
    backgroundColor: '#385999',
    width: 120,
    position: "relative",
    top: "50%",
    left: "25%",


  },
  inputmoney: {
    position: "relative",
    top: "15%",
  },
  inputsms: {
    position: "relative",
    top: "25%",
  },
  text: {
    color: 'white',
   
    fontWeight:"bold",
    textAlign: 'center',
  }


});

export default class FormMoneyComponent extends Component {
  static navigationOptions = {
    title: 'Chuyển tiền',
    headerStyle: {
      backgroundColor: '#385999',
     

    },
    headerTintColor: '#fff',
  }
constructor(props){
  super(props);
  this.state={
    money:"",
    message:""
  }
}

  render() {
    const { navigate } = this.props.navigation;
    const screenWidth = Math.round(Dimensions.get('window').width);
    console.log(screenWidth)
    const screenHeight = Math.round(Dimensions.get('window').height)-56;
    return (
      <Container style={{ flex: 1, flexDirection: "column", maxHeight: screenHeight, position: 'absolute', width: screenWidth }}>


        <Grid style={{ flex: 1 , position: 'relative'}}>
          <Row size={2}>
            <Card style={{ flex: 1 }}>
              <CardItem footer>
              <Item rounded  style={{  borderColor:"#385999",
              
               
            }} >
                <Input
                  placeholder='Nhập số tiền '
                  keyboardType={'numeric'}
                  onChangeText={(text) => this.setState({money:text})}
                />
              </Item>
              </CardItem >
            </Card>

          </Row>
          <Row size={2}>
            <Card style={{ flex: 1 }}>
              <CardItem>
              <Item rounded  style={{  borderColor:"#385999",
              
               
            }} >
                <Input
                  placeholder='Nhập lời nhắn '
                  onChangeText={(text) => this.setState({message:text})}

                />
                </Item>
              </CardItem>

            </Card>


          </Row>
          
          <Row size={3}></Row>
          <Row size={1}>
            <Button    bordered style={{
              flex: 1,
              backgroundColor: '#385999',
              width:screenHeight,
              alignSelf: 'stretch',
              justifyContent: 'center',
              
            
             

            }} onPress={() => this.changeScreen()}><Text style={styles.text}>Xác nhận </Text></Button>
          </Row>
          <Row size={0.2}></Row>
        </Grid>
       

      
      </Container>

    )




  }
  changeScreen=()=>{
    console.log(this.state)
    const { navigation } = this.props;
    const { navigate } = this.props.navigation;
    const data =  navigation.getParam('data')
    data.money= this.state.money
    data.message= this.state.message

    navigate('ConfirmPayment',{
         data
    })
  }
}
