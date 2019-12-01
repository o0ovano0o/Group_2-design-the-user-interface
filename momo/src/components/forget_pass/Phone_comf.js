import * as React from 'react';
import { Text, View, StyleSheet, TextInput,TouchableOpacity,ScrollView,Alert} from 'react-native';
import Constants from 'expo-constants';

export default class Phone_comf extends React.Component {
  static navigationOptions = {
    title: 'Lấy lại mật khẩu',
  };
  constructor (props){
    super(props);
    this.state={
      phone:"",
    };
  }
  phonecheck=()=>{
    if(this.state.phone=="0971128133"){
      this.props.navigation.navigate('OTP_pass');
    }
    else if(this.state.phone.length<10 ||this.state.phone.length>12){
      Alert.alert("Số điện thoại không hợp lệ");
    }
    else{
      Alert.alert("Tài khoản không tồn tại");
    }
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
       <View style={styles.container}>
          <ScrollView style={styles.muc2}>
            <View style={styles.plan}>
              <Text style={{ fontSize: 15, fontWeight: "bold", lineHeight: 20, }}>
                Nhập vào số điện thoại đã đăng ký tài khoản trước đó. Hệ thống sẽ gửi tin nhắn chứa mã OTP để xác nhận tài khoản của bạn!
              </Text>
            </View>
            <View style={{alignItems:"center"}}>
              <Text style={{marginTop:30, fontSize:20, fontWeight:'bold'}}>Nhập vào số điện thoại</Text>
              <TextInput style = {styles.input} placeholder="Nhap so dien thoai" 
                keyboardType='numeric'
                returnKeyType='next'
                textAlign={'center'}
                autoCorrect={false}    
                onChangeText={(phone)=>this.setState({phone})}    
                value={this.state.phone} 
              />
              <TouchableOpacity style = {styles.submitButton} onPress={() => {this.phonecheck()}}>
                <Text style = {styles.submitButtonText}> Tiếp tục </Text>
              </TouchableOpacity>
            </View>
         </ScrollView>
        <View style={styles.muc3}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
 
  muc2:{  
    backgroundColor:'white',
  },
  muc3:{
    height:50,
    backgroundColor:'#1C6BC8',
    alignItems:'center',
    flexDirection:'row',
  },
  plan:{
    flex:2,
    borderBottomColor:'black',
    borderBottomWidth:1,
    alignItems:'center',
    padding:15,
  },
  input: {
      marginTop: 20,
      width:300,
      height: 50, 
      borderColor: 'grey',
      borderWidth:1,
      color: 'black',
      borderRadius:20,
      fontSize:25,
   },
   submitButton: {
      backgroundColor: '#1C6BC8',
      padding: 5,
      width:150,
      margin: 10, 
      height: 40,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
   },
   submitButtonText:{
      color: 'white',
      fontWeight:'bold',
   },
});
