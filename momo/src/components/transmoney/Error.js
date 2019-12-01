import * as React from 'react';
import { View, StyleSheet,TextInput,TouchableOpacity,Image } from 'react-native';
import Constants from 'expo-constants';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
import {  Button,ScrollView ,Card,CardItem,Body,Footer  } from 'native-base';
// You can import from local files
// or any pure javascript modules available in npm

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export default class Error extends React.Component {
  static navigationOptions = {
    title: "Chuyển tiền thất bại",
     headerStyle: {
      backgroundColor: '#385999',
    },
    headerTitleStyle: {
     fontWeight: 'bold',
  },
    headerTintColor: '#fff',
    };
   constructor(props) {
          super(props);
    this.state={ visiab:this.props.navigation.getParam('mess',"")}
      }

  render() {
    const { navigation } = this.props;
     const ten = navigation.getParam('ten','nothing sent');
     const mess = navigation.getParam('mess','nothing sent');
     const mon = navigation.getParam('money','nothing sent');
  const sdt = navigation.getParam('sdt','nothing sent');
var date = new Date().getDate(); //Current Date
var month = new Date().getMonth() + 1; //Current Month
var year = new Date().getFullYear(); //Current Year
var hours = new Date().getHours(); //Current Hours
var min = new Date().getMinutes();
 if(hours<10){
      hours="0"+hours;
    }
    if(min.length==1){
      min="0"+min;
    }
const time= hours + ':' + min +" "+  date + '/' + month + '/' + year ;

    return (
      <Container  style={{ backgroundColor:'#ededed'}}>
      <Content  style={{flex:1,}}>
       <View style={{flex:1,justifyContent:'center',alignItems:'center',marginBottom:15,padding:25,backgroundColor:'white',marginTop:0}}>
      <Icon name="exclamation" type="SimpleLineIcons" style={{color:'red',fontSize:120}}/>
      
      <Text style={styles.error}>Chuyển tiền thất bại</Text> 
      </View>
      <View>
      <View style={styles.container}>
      <View>
       <View style={{flexDirection:'row',paddingBottom:5}}>
       <Text style={{textAlign:'left',fontWeight:'bold'}}>Chi tiết giao dịch</Text>
       </View>
      <View style={{flexDirection:'row',paddingBottom:5}}>
      <Text  style={{textAlign:'left'}}>Tên ví:</Text>
       <Text style={{marginLeft: 'auto'}}>{ten.title}</Text>
       </View>
       <View style={{flexDirection:'row',paddingBottom:5}}>
      <Text style={{textAlign:'left'}}>Số điện thoại:</Text>
       <Text style={{marginLeft: 'auto'}}>{sdt.number}</Text>
     </View>
       <View style={{flexDirection:'row',paddingBottom:5}}>
      <Text  style={{textAlign:'left'}}>Số tiền:</Text>
       <Text style={{marginLeft: 'auto'}}>{mon} đồng</Text>
       </View>
       <View style={{flexDirection:'row',paddingBottom:5}}>
      <Text  style={{textAlign:'left'}}>Thời gian:</Text>
     
       <Text style={{marginLeft: 'auto'}}>{time}</Text>
       </View>
        <View style={{paddingBottom:5}}>
       <Text  style={{textAlign:'left',}}>Lời nhắn: </Text>
       { this.state.visiab!="" && <Text>{mess}</Text>}
       </View>
       
       <Text>Lý do: </Text>
       <Text>Số tiền trong tài khoản của bạn không đủ để thực hiện chuyển tiền. Tài khoản của bạn chưa bị trừ.</Text>
      </View>
      </View>
      </View>
      </Content>
      <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
     <TouchableOpacity
         onPress={() => this.props.navigation.navigate({routeName: 'Transmoney'})}
       style={styles.button} >
          <Text style={{color:'white'}}>
         Quay lại </Text>
       </TouchableOpacity>
       <TouchableOpacity
         onPress={() => this.props.navigation.navigate({routeName: 'Menu'})}
       style={styles.button} >
          <Text style={{color:'white'}}>
         Hủy bỏ </Text>
       </TouchableOpacity>
       </View>
      </Container>
     
    );
  }
}


const styles = StyleSheet.create({
 container: { 
    backgroundColor: 'white',
   borderColor:'#385999',
    padding:15,
    borderRadius:5,

   
  },
  error:{
    color:'red',
    fontSize:20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#385999',
    padding: 15,
    borderRadius:7,
   width:'45%',
   marginLeft: 10,
   marginBottom:10,
   marginTop:10
  },
});
