import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Footer, Content, Card, CardItem, Text, Body, Button, Left, Thumbnail } from 'native-base';
import { Dimensions } from "react-native";
import * as Permissions from 'expo-permissions';
import { Notifications } from "expo";
import { Col, Row, Grid } from "react-native-easy-grid";
import {AsyncStorage} from 'react-native';
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
export default class PaymentComfirmComponent extends Component {
  static navigationOptions = {
    title: 'Xác nhận giao dịch',
    headerStyle: {
      backgroundColor: '#385999',
      height: 70,
    },
    headerTintColor: '#fff',
  }
  
  pushNotification =  async()=>{
    const localNotification = {
      title: 'Thông báo chuyển tiền ',
      body: 'Chuyển tiền thành công'
  };
  try {
    //await AsyncStorage.removeItem(Notifications)
   let  notification = await AsyncStorage.getItem('Notifications');
  
   notification= JSON.parse(notification)
   console.log(notification)

   if (notification == undefined){
    notification=[]
   }
   
   notification.push({title:"Chúc mừng ngày 20-11" ,content:"Thầy có thể không nhớ hết tên học sinh trong quá trình dạy học - (một phần vì lớp đông quá" ,
            
   time:"20/11/2019"
   ,seen:false},)
let a= JSON.stringify(notification)
  await AsyncStorage.setItem('Notifications',a);
 
  } catch (error) {
    console.log(error)
  }
 

 
  Notifications.presentLocalNotificationAsync(
      localNotification
  );
  
  console.log(123)
  }
  handleNotification() {
    console.warn('ok! got your notif');
}


async componentDidMount() {
    // We need to ask for Notification permissions for ios devices
    let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);
     
    if ( result.status === 'granted') {
        console.log('Notification permissions granted.')
    }

    // If we want to do something with the notification when the app
    // is active, we need to listen to notification events and 
    // handle them in a callback
    Notifications.addListener(this.handleNotification);
}
  render() {
    const { navigate } = this.props.navigation;
    const { navigation } = this.props;
    const screenWidth = Math.round(Dimensions.get('window').width);
    console.log(screenWidth)
    const screenHeight = Math.round(Dimensions.get('window').height) - 70;
    const data =  navigation.getParam('data')
    return (

      <Container style={{ flex: 1, flexDirection: "column", maxHeight: screenHeight, position: 'absolute', width: screenWidth }}>
        <Grid style={{ flex: 1, position: 'relative' }}>
          <Row size={1.5}>

            <Card style={{ flex: 1 }}>
              <CardItem header >
                <Text  >Nguồn tiền</Text>

              </CardItem>
              <CardItem avatar>
                <Left>

                  <Thumbnail source={{ uri: 'data:image/png;base64,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' }} />

                  <Body>

                    <Text >
                      UET-Pay
              </Text>
                    <Text >
                      Thay đổi
              </Text>


                  </Body>
                </Left>
              </CardItem>


            </Card>


          </Row>
          <Row size={3}>
            <Card style={{ flex: 1 }}>
              <CardItem header>
                <Text>Chi tiết giao dịch</Text>
              </CardItem>
              <CardItem>
                <Body  >
                  <Text>
                    Chuyển đến :
                </Text>
                  <Text style={styles.carttext}>
                   {data.phone}
                </Text>

                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    Tên ví :
                </Text>
                  <Text style={styles.carttext}>
                  {data.name}
                </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    Số tiền :
                </Text>
                  <Text style={styles.carttext}>
                  {data.money}
                </Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    Phí giao dịch :
                </Text>
                  <Text style={styles.carttext}>
                    0 Đ
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
          <Row size={0.5}>


            <Button bordered style={{
              flex: 1,
              backgroundColor: '#385999',
              width: screenHeight - 5,
              alignSelf: 'stretch',
              justifyContent: 'center',
            }} onPress={() => this.pushNotification()}><Text style={styles.text}>Xác nhận </Text></Button>
          </Row>
          <Row size={0.2}></Row>
        </Grid>



      </Container>
    )




  }
}



