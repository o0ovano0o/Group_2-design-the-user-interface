import * as React from 'react';
import { Text, View, StyleSheet,Image ,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import {Dimensions,Keyboard,KeyboardAvoidingView,TouchableWithoutFeedback,Alert} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon,Left,Right,List,ListItem,Card,ImageBackground  ,} from 'native-base';
import Constants from 'expo-constants';

export default class Setting extends React.Component {
  static navigationOptions = {
    title: 'Chỉnh sửa thông tin',
     headerStyle: {
      backgroundColor: '#385999',
    }, 
     headerTitleStyle: {
     fontWeight: 'bold',
  },
    headerTintColor: '#fff',
  };
  constructor (props){
    super(props);
    this.state={
      name:"Minh Anh" ,
      fullname:"Đỗ Minh Anh",
      pass:"",
      repass:"",
      phone:"0971128133",
      email:"minhanh.th99@gmail.com",
      repassVal:true,
      passVal:true,
    }; 
  }
  sign=()=>{
    const expression =/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ 
    if(this.state.name.length==0||this.state.email==0||this.state.pass.length==0||this.state.fullname.length==0||this.state.phone.length==0){
      Alert.alert("Bạn chưa nhập đầy đủ thông tin");
    }
    else if(expression.test(this.state.email)==false){
      Alert.alert("Email không hợp lệ");
    }
    else if(this.state.pass!="12345"){
      Alert.alert("Mat khau cu khong dung");
    }
    else {
      this.props.navigation.navigate('Private');
    } 
  }
  render() {
    const {navigate} = this.props.navigation;
    return ( 
        <KeyboardAvoidingView behavior="padding" style={styles.container} >
        <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
        
          <ScrollView>
            <View style={styles.plan }>
              <View style={{flexDirection:'row',flex:3,marginTop:15}}>
                <Text>Username: </Text>
              </View>
              <View style={{flex:8 }}>
                <TextInput style = {styles.input } 
                  autoCorrect={false}    
                  onChangeText={(name)=>this.setState({name})}    
                  value={this.state.name} 
                  returnKeyType='next' 
                  onSubmitEditing={()=>this.fullname.focus()} 
                  />
              </View>
            </View>
            <View style={styles.plan }>
              <View style={{flexDirection:'row',flex:3,marginTop:15}}>
                <Text>Họ và tên: </Text>
              </View>
              <View style={{flex:8 }}>
                <TextInput style = {styles.input } 
                  autoCorrect={false}    
                  onChangeText={(fullname)=>this.setState({fullname})}    
                  value={this.state.fullname}
                  returnKeyType='next' 
                  ref={ref=>(this.fullname=ref)}
                  onSubmitEditing={()=>this.phone.focus()}   />
              </View>
            </View>
            <View style={styles.plan }>
              <View style={{flexDirection:'row',flex:3,marginTop:15}}>
                <Text>Số điện thoại: </Text>
              </View>
              <View style={{flex:8 }}>
                <TextInput style = {styles.input } 
                  autoCorrect={false}  
                  keyboardType="phone-pad"   
                  onChangeText={(phone)=>this.setState({phone})}    
                  value={this.state.phone} 
                  returnKeyType='next' 
                  ref={ref=>(this.phone=ref)}
                  onSubmitEditing={()=>this.email.focus()} />
              </View>
            </View>
            <View style={styles.plan }>
              <View style={{flexDirection:'row',flex:3,marginTop:15}}>
                <Text>Email: </Text>
              </View>
              <View style={{flex:8 }}>
                <TextInput style = {styles.input } 
                  autoCorrect={false}  
                  keyboardType="email-address"   
                  onChangeText={(email)=>this.setState({email})}    
                  value={this.state.email} 
                  returnKeyType='next' 
                  ref={ref=>(this.email=ref)}
                  onSubmitEditing={()=>this.pass.focus()} />
              </View>
            </View>
            <View style={styles.plan }>
              <View style={{flexDirection:'row',flex:3,marginTop:15}}>
                <Text>Mật khẩu cũ: </Text>
              </View>
              <View style={{flexDirection:"row", flex:8, borderBottomColor:'black', borderBottomWidth:1,height:40, paddingHorizontal:3,alignItems:'center', justifyContent:'center' }}>
                <View style={{flex:10 }}>
                  <TextInput  
                    secureTextEntry={this.state.passVal}
                    autoCorrect={false}    
                    onChangeText={(pass)=>this.setState({pass})}    
                    value={this.state.pass}
                    returnKeyType='next' 
                    ref={ref=>(this.pass=ref)}
                    onSubmitEditing={()=>this.repass.focus()} />
                </View>
                <View style={{flex:1}}>
                  <TouchableOpacity  onPress={() => this.setState({passVal:!this.state.passVal})}>
                      <Image style={{height:20, width:20}} source={{uri: 'https://cdn2.iconfinder.com/data/icons/harmonicons-03/64/eye-512.png'}} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.plan }>
              <View style={{flexDirection:'row',flex:3,marginTop:15}}>
                <Text>Mật khẩu mới: </Text>
              </View>
              <View style={{flexDirection:"row", flex:8, borderBottomColor:'black', borderBottomWidth:1,height:40, paddingHorizontal:3,alignItems:'center', justifyContent:'center'}}>
                <View style={{flex:10 }}>
                  <TextInput  
                    secureTextEntry={this.state.repassVal}
                    autoCorrect={false}    
                    onChangeText={(repass)=>this.setState({repass})}    
                    value={this.state.repass} 
                    returnKeyType='next' 
                    ref={ref=>(this.repass=ref)}
                     />
                </View>
                <View style={{flex:1}}>
                  <TouchableOpacity  onPress={() => this.setState({repassVal:!this.state.repassVal})}>
                      <Image style={{height:20, width:20}} source={{uri: 'https://cdn2.iconfinder.com/data/icons/harmonicons-03/64/eye-512.png'}} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{flex:1, alignItems:"center", justifyContent:'center', height: 80, }}>
              <View style={{alignItems:"center", justifyContent:'center' ,flex:1}}>
                <TouchableOpacity style = {styles.submitButton} onPress={() => {this.sign()}}>
                  <Text style = {styles.submitButtonText}> Lưu </Text>
                </TouchableOpacity>
              </View>
            </View>                     
          </ScrollView>
          
        </TouchableWithoutFeedback> 
        </KeyboardAvoidingView>
        
    );
  }
}
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
       
      plan:{
          flexDirection:'row',
          height: 80,
          alignItems:'center',
          padding:15,
      },
      input:{
        fontSize:18, 
        borderBottomColor:'black', 
        borderBottomWidth:1 , 
        height:40, 
        paddingHorizontal:2 
      },
      submitButton: {
          backgroundColor: '#4FADF9',
          padding: 10,
          height: 40,
          width:300,
          borderRadius: 50,
          alignItems: 'center',
          justifyContent:'center',
      },
      submitButtonText:{
          color: 'white',
          fontWeight:'bold',
      },
      
});
