import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,  KeyboardAvoidingView,
  TouchableWithoutFeedback, Keyboard,Alert } from 'react-native';
import Constants from 'expo-constants';

import { Container, Header, Content, Button, Icon, List, ListItem, Card,CardItem,Body,Footer,FooterTab,Item,  } from 'native-base';
// You can import from local files
import sdt from '../assets/sdt.json';
const datas=sdt;

// or any pure javascript modules available in npm

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
export default class Inputsdt extends React.Component {
  static navigationOptions = {
    title: "Chuyển tiền",
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
          this.state = {text: ''};
 
      }
doIt = (numb) => {
  var t=0;
  datas.map((data)=> {
      if(data.number==numb){  
        t=1;
        this.props.navigation.navigate('Inputmoney',{...data});
      }
    }); // <--- set data when user clicks button.
  if(t==0){
    Alert.alert("Lỗi","Số điện thoại bạn nhập "+numb+ " không hợp lệ. Vui lòng nhập lại!");
  }
  };
  render() {
    return (
       <KeyboardAvoidingView style={{flex: 1,justifyContent: 'center',}}  behavior='padding' enabled >
        <TouchableWithoutFeedback style={{flex: 1,}} onPress={Keyboard.dismiss}>
      <Container style={{ backgroundColor:'#ededed'}}>
      <View style={{flex:1,backgroundColor:'#ededed',justifyContent: 'center'}}>
      <View style={styles.container}>
      <Text style={{fontSize:20,marginBottom:15,}}>Số điện thoại người nhận</Text>
       <Item rounded style={styles.itemStyle}>
       <Icon
              active
              name='call'
              style={styles.iconStyle}
            />
        <TextInput
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          style={styles.input}
          returnKeyType='done'
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={false}
         
         keyboardType='numeric'
        />
         </Item>
         <View >
       </View>
      </View>
      </View>
     
       <TouchableOpacity
          onPress={() => this.doIt(this.state.text)}
       style={styles.button} >
          <Text style={{color:'white'}}>
        Tiếp tục
        </Text>
       </TouchableOpacity>
      </Container>
       </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: 'white',
   borderColor:'#385999',
    padding:40,
    borderRadius:5,
    
    alignItems: 'center', 
     justifyContent:'center',
  },
  input:{
    height:40,
    borderWidth:1,
    borderColor:'white',
    width:150,
    borderRadius:10,
  marginRight:9,
    padding:5,
    justifyContent:'center',
    fontSize:24,
  },
  iconStyle: {
    color: '#385999',
    fontSize: 28,

  },
  itemStyle: {
    marginBottom: 10,
    borderColor:'#385999',
  },
   button: {
    alignItems: 'center',
    backgroundColor: '#385999',
    padding: 15,
    borderRadius:7,
    margin:19,
  },
});
