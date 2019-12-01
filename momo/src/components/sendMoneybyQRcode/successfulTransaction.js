import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { Container, Footer, Content, Card, CardItem, Text, Body, Button } from 'native-base';
import CameraComponent from './scanCode';
import { Constants, Notifications, Permissions } from 'expo';
import { Dimensions } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
const styles = StyleSheet.create({
  layout: {
    height: "100%"
  },
  footer: {
    backgroundColor: '#385999',
    position: "absolute",
    bottom: 0
  },
  button: {
    backgroundColor: '#385999',
    width: "100%",

    alignSelf: 'stretch',
    justifyContent: 'center',



  },
  bodycart: {
    position: "relative",
    flexDirection: "row",



  },
  carttext: {
    position: 'absolute',
    right: 0
  },
  carttextboid: {
    position: 'absolute',
    right: 0,
    fontWeight: "bold"

  },
  text: {
    color: 'white',

    fontWeight: "bold",
    textAlign: 'center',



  },
  icon: {
    position: 'absolute',
    right: 0,
    color: "#385999"
  }




});
export default class SuccessfulTransactionComponent extends Component {

  static navigationOptions = {
    title: 'Giao dịch thành công',
    headerStyle: {
      backgroundColor: '#385999',
      height: 56
    },
  }

  render() {
    const { navigate } = this.props.navigation;
    let timeTranction= new Date()
    
    const screenWidth = Math.round(Dimensions.get('window').width);
    console.log(screenWidth)
    const screenHeight = Math.round(Dimensions.get('window').height) - 70;
    return (
      <Container style={{ flex: 1, flexDirection: "column", maxHeight: screenHeight, position: 'absolute', width: screenWidth ,backgroundColor:"#D5D4D4"}}>
          <Grid style={{ flex: 1, position: 'relative' }}>
          <Row size={2}>
        <Card  style={{ flex: 1 }}>

          <CardItem >
            <Image source={require('../assets/success-icon-5.jpg')} style={{ height: Math.round(0.2*screenHeight), width: null, flex: 1, resizeMode: "contain" ,position:"relative"}} />
          </CardItem>
          <CardItem>
            <Body>
              <Text style={{ color: 'green', textAlign: 'center' }}>
                Chuyển tiền thành công
                </Text>

            </Body>
          </CardItem>
        </Card>
        </Row>
        <Row size={3}>
        <Card style={{ flex: 1 }}>
              <CardItem header>
    <Text>Chi tiết giao dịch {"32874823"}</Text>
              </CardItem>
             
              <CardItem>
                <Body  >
                  <Text>
                    Chuyển đến :
                </Text>
                  <Text style={styles.carttext}>
                    012345678
                </Text>

                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    Tên ví :
                </Text>
                  <Text style={styles.carttext}>
                    Nguyễn Trường Giang
                </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    Lời nhắn :
                </Text>
                  <Text style={styles.carttext}>
                   {"Vạn đế phong thần "}
                </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    Thời gian :
                </Text>
                  <Text style={styles.carttext}>
                    {timeTranction.toTimeString()}
                </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    Tổng số tiền :
                </Text>
                  <Text style={styles.carttextboid}>
               {data.money}
                </Text>
                </Body>
              </CardItem>

            </Card>
         </Row>
         <Row size={0.5}></Row>
         </Grid>
      
      </Container>
    )




  }
}
