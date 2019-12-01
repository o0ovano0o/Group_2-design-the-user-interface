import * as React from 'react';
import { Text, View, StyleSheet, TextInput,TouchableOpacity,Image,ScrollView,Button,SafeAreaView,Statusbar, Keyboard, KeyboardAvoidingView,TouchableWithoutFeedback,Alert } from 'react-native';
import Constants from 'expo-constants';
import {AsyncStorage} from 'react-native';
export default class Login extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor (props){
    super(props);
    this._storeData;
    this.state={
      phone:"",
      pass:"" ,
      passVal:true,
    };
  } 
  _storeData = async () => {
            try {
              await AsyncStorage.setItem('money', '315.000');
            } catch (error) {
              // Error saving data
            }
          };
  sign=()=>{
    if(this.state.phone.length==0||this.state.pass.length==0){
      Alert.alert("Bạn cần nhập tài khoản và mật khẩu trước!");
    }
    else if(this.state.pass=="12345"&&this.state.phone=="0971128133"){
      this._storeData;
      this.props.navigation.navigate('appAffter');
    }
    else{
      Alert.alert("Tài khoản hoặc mật khẩu không đúng");
    }
  }
  render() {
    this._storeData;
    const {navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container} >
      <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.logocontainer}>
            <Image style={styles.logo} source={{
uri:'https://is5-ssl.mzstatic.com/image/thumb/Purple118/v4/bf/48/1b/bf481b40-ea8f-10fe-0100-37981b756027/source/512x512bb.jpg'}} />
            <Text style={styles.title}>Màn hình đăng nhập</Text>
          </View>
          <View style={styles.info}>
            <View style={styles.input_}> 
              <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Image style={{height:15, width:15}} source={{uri: 'http://simpleicon.com/wp-content/uploads/phone-1.png'}} />
              </View>
              <View style={{flex:6}}>
                <TextInput style = {styles.input}
                  placeholder="Nhập số điện thoại"
                  placeholderTextColor='rgba(255,255,255,0.8)' 
                  keyboardType="phone-pad" 
                  returnKeyType='next'
                  autoCorrect={false}    
                  onChangeText={(phone)=>this.setState({phone})}    
                  onSubmitEditing={()=>this.pass.focus()} 
                  value={this.state.phone}  
                />
              </View>
            </View>
            <View style={styles.input_}> 
              <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Image style={{height:12, width:12}} source={{uri: 'http://cdn.onlinewebfonts.com/svg/img_76998.png'}} />
              </View>
              <View style={{flex:5}}> 
                  <TextInput style = {styles.input}
                    placeholder="Nhập mật khẩu"
                    placeholderTextColor='rgba(255,255,255,0.8)' 
                    returnKeyType='go'
                    autoCorrect={false} 
                    secureTextEntry={this.state.passVal}
                    onChangeText={(pass)=>this.setState({pass})}    
                    value={this.state.pass}
                    ref={ref=>(this.pass=ref)}
                  /> 
              </View>
              <View style={{flex:1}}>
                <TouchableOpacity  onPress={() => this.setState({passVal:!this.state.passVal})}>
                    <Image style={{height:15, width:15}} source={{uri: 'https://cdn2.iconfinder.com/data/icons/harmonicons-03/64/eye-512.png'}} />
                </TouchableOpacity>
              </View>
            </View> 
              <View style={{flexDirection:'row',}}>
                <View style={{flex:1, }}>
                  <TouchableOpacity style = {styles.submitButton} onPress={() => navigate('signIn')}>
                      <Text style = {styles.submitButtonText}> Đăng ký </Text>
                  </TouchableOpacity>
                </View>
                <View style={{flex:1, }}>
                  <TouchableOpacity style = {styles.submitButton} onPress={() => {this.sign()}}>
                      <Text style = {styles.submitButtonText}> Đăng nhập </Text>
                  </TouchableOpacity>
                </View> 
              </View>
              <View style={{flexDirection:'row', marginBottom: 20, }}>
              <View style ={{flex:5,}}></View>
              <View style ={{flex:4,}}>
                <TouchableOpacity onPress={() => navigate('forgetPassword')}>
                    <Text style={{color: 'blue'}}> Quên mật khẩu? </Text>  
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback> 
      </KeyboardAvoidingView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {   
    flex:1,
    justifyContent: 'center', 
    backgroundColor: '#385999',
    flexDirection:'column', 
  },
  logocontainer:{
    alignItems:'center',
    justifyContent:'center',
    flex:1,
  },
  input_:{
    flexDirection:"row",
    backgroundColor:'rgba(255,255,255,0.2)',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    margin:5
  }, 
  logo:{
    marginTop: 50,  
    height: 100,
    width:100,
    borderRadius:50, 
  },
  title:{
    color:'white', 
    textAlign:'center',
    fontSize:18, 
    marginTop:10,
    opacity:0.5, 
  },
  info:{
    left:0,
    bottom:0,
    right:0,
    height:220,
    padding:20,
  },
  input:{
      height: 40, 
      // borderColor: '#4FADF9',
      color: 'white',
  },
  submitButton: {
      backgroundColor: '#4FADF9',
      padding: 5,
      margin: 10, 
      height: 40,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent:'center'
   },
   submitButtonText:{
      color: 'white',
      fontWeight:'bold',
   },
   
});
