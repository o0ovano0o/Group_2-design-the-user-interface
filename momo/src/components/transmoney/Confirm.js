import * as React from 'react';
import { View, StyleSheet,TextInput,TouchableOpacity,Image,Keyboard,Alert } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon,Modal } from 'native-base';
import {  Button,ScrollView ,Card,CardItem,Body,Footer  } from 'native-base';
// You can import from local files
// or any pure javascript modules available in npm
import Dialog from "react-native-dialog";

const money=500000;
export default class Confirm extends React.Component {
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
          super(props);this.state = {ok:false,xn1:'',xn2:'',xn3:'',xn4:'',xn5:'',xn6:'',
         visiab:this.props.navigation.getParam('mess',"")
          };
          
      }

  doIt(data,mon,me,number){
   
    this.setState({ ok: false });
   var  in1=this.state.xn1;
   var  in2=this.state.xn2;
    var in3=this.state.xn3;
   var  in4=this.state.xn4;
   var  in5=this.state.xn5;
    var in6=this.state.xn6;
    if ( in1=='1'&&in2 == '2' && in3=='3'&&in4=='4'&&in5=='5'&&in6=='6'){
      if(mon.replace(".","").replace(".","")>money)
    this.props.navigation.navigate('Error',{money:mon,mess:me,ten:data,sdt:number});
    else
    this.props.navigation.navigate('Sucess',{money:mon,mess:me,ten:data,sdt:number});
    }
    else if ( in1=='1'&&in2 == '1' && in3=='1'&&in4=='1'&&in5=='1'&&in6=='1'){
       if(mon.replace(".","").replace(".","")>money)
    this.props.navigation.navigate('Error',{money:mon,mess:me,ten:data,sdt:number});
    else
    this.props.navigation.navigate('Sucess',{money:mon,mess:me,ten:data,sdt:number});
    }
    else {
      Alert.alert("Lỗi","Bạn đã nhập sai mã xác nhận");
      this.setState({ xn1:'',xn2:'',xn3:'',xn4:'',xn5:'',xn6:''});
    }
  }
  showDialog = () => {
    this.setState({ ok: true });
  };
 
  handleCancel = () => {
    this.setState({ ok: false });
    this.setState({ xn1:'',xn2:'',xn3:'',xn4:'',xn5:'',xn6:''});
  };
   handleDelete = () => {
    // The user has pressed the "Delete" button, so here you can do your own logic.
    // ...Your logic
    this.setState({ ok: false });
  };
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
    var visi=true;
    if(hours<10){
      hours="0"+hours;
    }
    if(min.length==1){
      min="0"+min;
    }
    if(mess==""){
      visi=false;
    }
    const time= hours + ':' + min +" "+  date + '/' + month + '/' + year ;
 
    return (
      <Container  style={{ backgroundColor:'#ededed'}}>
      <Content>
        <View>

      <Dialog.Container visible={this.state.ok}>
          <Dialog.Title>Xác nhận</Dialog.Title>
          <Dialog.Description>
            Hãy điền mã xác nhận của bạn vào.
          </Dialog.Description>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
          <TextInput
          onChangeText={(xnt)=> {this.setState({xn1:xnt});
          if(xnt.length==1)
           this.input2.focus(); }}
            secureTextEntry={true}
        keyboardType='decimal-pad'
          autoFocus={true}
          textAlign={'center'}
         style={styles.input}
         maxLength={1}
          value={this.state.xn1}>
          </TextInput>
           <TextInput
          onChangeText={(xnt)=> {this.setState({xn2:xnt});
          if(xnt.length==1)
           this.input3.focus(); }}
         keyboardType='decimal-pad'
            secureTextEntry={true}
          textAlign={'center'}
         ref={input => { this.input2 = input}}
         style={styles.input}
           maxLength={1}
          value={this.state.xn2}>
          </TextInput>
           <TextInput
          onChangeText={(xnt)=> {this.setState({xn3:xnt});
          if(xnt.length==1)
           this.input4.focus(); }}
          keyboardType='decimal-pad'
            secureTextEntry={true}
          textAlign={'center'}
          style={styles.input}
           ref={input => { this.input3 = input}}
            maxLength={1}
          value={this.state.xn3}>
          </TextInput>
           <TextInput
          onChangeText={(xnt)=> {this.setState({xn4:xnt});
          if(xnt.length==1)
           this.input5.focus();}}
             secureTextEntry={true}
           keyboardType='decimal-pad'
          textAlign={'center'}
          style={styles.input}
           ref={input => { this.input4 = input}}
            maxLength={1}
          value={this.state.xn4}>
          </TextInput>
           <TextInput
          onChangeText={(xnt)=> {this.setState({xn5:xnt});if(xnt.length==1)
           this.input6.focus();}}
          keyboardType='decimal-pad'
          style={styles.input}
            secureTextEntry={true}
          textAlign={'center'}
           ref={input => { this.input5 = input}}
            maxLength={1}
          value={this.state.xn5}>
          </TextInput>
           <TextInput
          onChangeText={(xnt)=> {this.setState({xn6:xnt});if(xnt.length==1)
            Keyboard.dismiss();}}
          keyboardType='decimal-pad'
            secureTextEntry={true}
           ref={input => { this.input6 = input}}
          style={styles.input}
          textAlign={'center'}
            maxLength={1}
          value={this.state.xn6}>
          </TextInput></View>
          <Dialog.Button label="Hủy" onPress={()=> this.handleCancel()}/>
          <Dialog.Button label="Xác nhận" onPress={()=>    this.doIt(ten,mon,mess,sdt)} />
        </Dialog.Container>
        </View>
  
     
      <View>
      <Text style={{padding:5}}>
      NGUỒN TIỀN
      </Text>
      </View>
      <View style={{backgroundColor:'white'}}>
      <Text style={{padding:5}}>
      Ví UETPay
      </Text>
      <Text style={{padding:5}}>
      {mon} đồng
      </Text>
      </View>
      <Text style={{padding:5}}>
      CHI TIẾT GIAO DỊCH
      </Text>
      <View style={styles.container}>
      <View style={{flexDirection:'row',paddingBottom:7}}>
      <Text  style={{textAlign:'left'}}>Người nhận:</Text>
       <Text style={{marginLeft: 'auto'}}>{ten.title}</Text>
       </View>
     <View style={{flexDirection:'row',paddingBottom:7}}>
      <Text style={{textAlign:'left'}}>Số điện thoại:</Text>
       <Text style={{marginLeft: 'auto'}}>{sdt.number}</Text>
     </View>
      <View style={{flexDirection:'row',paddingBottom:7}}>
      <Text  style={{textAlign:'left'}}>Số tiền:</Text>
       <Text style={{marginLeft: 'auto'}}>{mon} đồng</Text>
       </View>
        <View style={{flexDirection:'row',paddingBottom:7}}>
      <Text  style={{textAlign:'left'}}>Phí giao dịch:</Text>
       <Text style={{marginLeft: 'auto'}}>0 đồng</Text>
       </View> 
      <View style={{flexDirection:'row',paddingBottom:7}}>
      <Text  style={{textAlign:'left'}}>Thời gian:</Text>
     
       <Text style={{marginLeft: 'auto'}}>{time}</Text>
       </View>
        <View style={{paddingBottom:7}}>
      <Text  style={{textAlign:'left'}}>Lời nhắn: </Text>
       { this.state.visiab!="" && <Text>{mess}</Text>}
       </View>
      
      </View>
      </Content>
    
     <TouchableOpacity
         onPress={()=>this.showDialog()}
       style={styles.button} >
          <Text style={{color:'white'}}>
         Xác nhận </Text>
       </TouchableOpacity>
     
      </Container>
     
    );
  }
}


const styles = StyleSheet.create({
  container: { 
    backgroundColor: 'white',
   borderColor:'#385999',
    padding:7,
  },
    button: {
    alignItems: 'center',
    backgroundColor: '#385999',
    padding: 15,
    borderRadius:7,
    margin:19,
  },
  input:{
    borderBottomWidth:1,
    borderBottomColor:'black',
    marginLeft:10,
    width:30,
    padding:0,
    fontSize:22,
    alignItems:'center',
    justifyContent:'center'
  }
});
