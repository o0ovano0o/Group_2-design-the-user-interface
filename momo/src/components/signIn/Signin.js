import * as React from 'react'; 
import { Text, View, StyleSheet,Image, TextInput,TouchableOpacity,ScrollView,Alert,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard,Icon} from 'react-native';
import Constants from 'expo-constants';

export default class Signin extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor (props){
    super(props);
    this.state={
      user:"",     
      email:"",
      pass:"" ,
      repass:"",  
      userVal:true, 
      passVal:true,
      repassVal:true,
    };
  }
  sign=()=>{
    const expression =/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ 
    if(this.state.user.length==0||this.state.email==0||this.state.pass.length==0){
      Alert.alert("Bạn chưa nhập đầy đủ thông tin");
    }
    else if(expression.test(this.state.email)==false){
      Alert.alert("Email không hợp lệ");
    }
    else if(this.state.pass!=this.state.repass){
      Alert.alert("Mật khẩu không khớp");
    }
    else {
      this.props.navigation.navigate('Phone_sigin');
    } 
  }
   
  
  render() {
    const {navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container} >
      <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        <ScrollView  >
          <View style ={styles.ima}>
            <Image style={styles.img} source={{uri: 'https://i.pinimg.com/600x315/3c/25/fe/3c25fe16eeba1633e6fe3fc5e12b4445.jpg'}} />
            <Text style={{fontSize:20, color: "white",marginTop:10}}>Đăng ký</Text>
          </View>
          <View style ={styles.sigup}> 
            <View style={styles.input_}> 
              <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Image style={styles.im} source={{uri: 'https://cdn0.iconfinder.com/data/icons/users-android-l-lollipop-icon-pack/24/user-512.png'}} />
              </View>
              <View style={{flex:5}}>
                <TextInput style = {styles.input} placeholder="Nhập tên tài khoản" 
                  onChangeText={(user)=>this.setState({user})}    
                  value={this.state.user} 
                  returnKeyType='next'
                  onSubmitEditing={()=>this.email.focus()} 
                />      
              </View>   
            </View>         
            <View style={styles.input_}> 
              <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Image style={styles.im} source={{uri: 'http://pixsector.com/cache/dc0ee776/avd5c445f01ca4712be88.png'}} />
              </View>
              <View style={{flex:5}}>
                <TextInput style = {styles.input} placeholder="Nhập email"     
                  keyboardType="email-address" 
                  returnKeyType='next'
                  autoCorrect={false}    
                  onChangeText={(email)=>this.setState({email})}    
                  value={this.state.email}  
                  ref={ref=>(this.email=ref)} 
                  onSubmitEditing={()=>this.pass.focus()}    
                />    
              </View>    
            </View>       
            <View style={styles.input_}> 
              <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>  
                <Image style={{height:15, width:15}} source={{uri: 'http://cdn.onlinewebfonts.com/svg/img_76998.png'}} />
              </View>
              <View style={{flex:4}}>  
                <TextInput style = {styles.input} placeholder="Nhập mật khẩu" secureTextEntry={this.state.passVal}                
                  returnKeyType='next'
                  autoCorrect={false}    
                  onChangeText={(pass)=>this.setState({pass})}    
                  value={this.state.pass} 
                  ref={ref=>(this.pass=ref)}
                  onSubmitEditing={()=>this.repass.focus()} 
                />   
              </View>  
              <View style={{flex:1}}>
                <TouchableOpacity  onPress={() => this.setState({passVal:!this.state.passVal})}>
                    <Image style={{height:20, width:20}} source={{uri: 'https://cdn2.iconfinder.com/data/icons/harmonicons-03/64/eye-512.png'}} />
                </TouchableOpacity>
              </View>   
            </View> 
            <View style={styles.input_}> 
              <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>  
                <Image style={{height:15, width:15}} source={{uri: 'http://cdn.onlinewebfonts.com/svg/img_76998.png'}} />
              </View>
              <View style={{flex:4}}>  
                <TextInput style = {styles.input} placeholder="Nhập lại mật khẩu" secureTextEntry={this.state.repassVal}               
                  returnKeyType='next'
                  autoCorrect={false}    
                  onChangeText={(repass)=>this.setState({repass})}    
                  value={this.state.repass} 
                  ref={ref=>(this.repass=ref)}                
                />   
              </View> 
              <View style={{flex:1}}>
                <TouchableOpacity  onPress={() => this.setState({repassVal:!this.state.repassVal})}>
                    <Image style={{height:20, width:20}} source={{uri: 'https://cdn2.iconfinder.com/data/icons/harmonicons-03/64/eye-512.png'}} />
                </TouchableOpacity>
              </View>     
            </View>  
            <TouchableOpacity style = {styles.submitButton} onPress={() => {this.sign()}}>
                <Text style = {styles.submitButtonText}> Sign Up </Text>
            </TouchableOpacity>
          </View>
          <View style ={{flexDirection:"row", justifyContent:"center", alignItems:'center'}}>
            <Text style={{fontSize:13, color: "white",}}>Bạn đã có tài khoản? </Text>
            <TouchableOpacity  onPress={() => navigate('Login')}>
                <Text style={{fontSize:13, color: "white"}}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    paddingTop: Constants.statusBarHeight, 
    backgroundColor: '#385999',
  },
  ima:{
    flex: 3,
    backgroundColor: '#385999',
    justifyContent:'center',
    alignItems:'center',
    marginTop: 20, 
  },
  img:{
    height:80,
    width:80,
    borderRadius: 40,
  },
  im:{
    height:25,
    width:25,
  },
  input_:{
    flexDirection:"row",
    backgroundColor:'rgba(255,255,255,1)',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
    margin:5,
    marginBottom:10, 
  },
  sigup:{
    flex: 5,
    padding:15,
    borderRadius: 20,
    backgroundColor: '#385999',
    margin: 20,
    marginTop:15,
  },
  input: {  
      height: 50,  
      color: 'black',
      fontSize:15, 
   },
  submitButton: {
      backgroundColor: '#4FADF9',
      padding: 5,
      marginLeft:30,
      marginTop: 15, 
      marginRight: 30,
      height: 40,
      borderRadius: 50,
      alignItems: 'center',
   },
   submitButtonText:{
      color: 'white',
      fontWeight:'bold',
   },
    
});
