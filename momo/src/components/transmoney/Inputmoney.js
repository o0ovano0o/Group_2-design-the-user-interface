import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image,KeyboardAvoidingView,
  TouchableWithoutFeedback, Keyboard,Alert } from 'react-native';
import Constants from 'expo-constants';
import { Container, Header, Content, Button, Icon,ScrollView ,List, ListItem,Card,CardItem,Body,Footer,Textarea,Input  } from 'native-base';


import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
const money=100000;
export default class Inputmoney extends React.Component {
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
          this.state = {money:'',mon:'',message:''};
 
      }
doIt = (data,numberr) => {
  var mo=this.moneyformat(this.state.money);
  var me=this.state.message
  if(mo!=''){
    if(this.state.money.replace(".","")>5000000){
      Alert.alert("Lỗi","Bạn chỉ có thể chuyển dưới 5.000.000đ trong 1 lần chuyển tiền");
    }
    else if(this.state.money.replace(".","")<5000){
       Alert.alert("Lỗi","Xin lỗi.Số tiền bạn chuyển quá thấp so với định mức của chúng tôi.(Định mức thấp nhất: 5000 đồng)");
    }
    else
    this.props.navigation.navigate('Confirm',{money:mo,mess:me,ten:data,sdt:numberr});
  }
  else{
    Alert.alert("Lỗi","Mời bạn nhập đầy đủ thông tin");
  }
  };
  moneyformat= (money)=>{
    var t="";
    var j=0;
    money=money.replace(".","").replace(".","").replace(".","").replace(".","");
    if(money.length>=4){
    for(var i=money.length-1;i>0;i--){
     t+=money[i]; 
     if(money[i]!='.'){
     j++;}
      if(j%3==0&&money[i-1]!='.'&&j!=0){
        t+=".";j=0;
      }
      else if(j%3==0&&money[i-1]=='.'){
        j=0;
      }
    
    }
    t+=money[0];
    var kq="";
    for(var k=t.length-1;k>=0;k--){
        kq+=t[k];
    }
    return kq;
    }
    else
    return money;
  };
  render() {
    const { navigation } = this.props;  
  const {title,number}=this.props.navigation.state.params;

    return (
        <KeyboardAvoidingView style={{flex: 1,justifyContent: 'center',}}  behavior='padding' enabled >
        <TouchableWithoutFeedback style={{flex: 1,justifyContent: 'center',}} onPress={Keyboard.dismiss}>
       <Container  style={{ backgroundColor:'#ededed'}}>
       <Content style={{flex:1,justifyContent:'center',backgroundColor:'#ededed'}}>
     <View style={styles.container}>
      <Text style={{fontSize:18,fontWeight:"bold",color:'#385999'}}>Chuyển tiền đến</Text>
       <View style={styles.info}>
       <Icon name="user-circle-o" type="FontAwesome" style={{fontSize:60,paddingRight:10,color:'#385999'}}/>
      <Text style={{padding:10,fontSize:18}}>{title}{"\n"}{number}</Text>
        </View>
        <Input
          placeholder="Số tiền"
          onChangeText={(money) => this.setState({money:money})}
          value={this.moneyformat(this.state.money)}
          style={styles.tien}
          maxLength={15}
         keyboardType='decimal-pad'
        />
         <Textarea rowSpan={3}  onChangeText={(message) => this.setState({message})} maxLength = {100} value={this.state.message}  style={styles.loinhan} bordered placeholder="Lời nhắn(Không bắt buộc)"  editable = {true} />
         <View >
       
       </View>
      </View>
     </Content>
      <TouchableOpacity
         onPress={() => this.doIt({title},{number})}
       style={styles.button} >
          <Text style={{color:'white'}}>
         Xác nhận
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
   borderColor:'#385999',
    padding:15,
   width:'100%',
    borderRadius:5,
    alignItems: 'center', 
     justifyContent:'center',
      backgroundColor:'white'
  },
  info:{
    flexDirection:'row',
    paddingTop:10
  },
  tien:{
    height:40,
    borderWidth:1,
    borderColor:'#385999',
    width:270,
    borderRadius:7,
     margin:15,
    padding:7,
    justifyContent:'center',
    fontSize:20,
  },
   loinhan:{
    height:100,
    borderWidth:1,
    borderColor:'#385999',
    width:270,
    borderRadius:7,
    margin:15,
    marginBottom:30,
    padding:7,
    fontSize:18,
  },
   button: {
    alignItems: 'center',
    backgroundColor: '#385999',
    padding: 15,
    borderRadius:7,
    margin:19,
  },
});

