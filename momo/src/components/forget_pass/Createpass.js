import * as React from 'react';
import { Text, View, StyleSheet, TextInput,TouchableOpacity,ScrollView, Image,Alert,KeyboardAvoidingView,TouchableWithoutFeedback,Keyboard} from 'react-native';


export default class Createpass extends React.Component {
  static navigationOptions = {
    title: 'Tạo mật khẩu mới  ',
  };
  constructor (props){
    super(props);
    this.state={
      repass:"",
      pass:"" 
    };
  }
  sign=()=>{
    if(this.state.pass.length<8||this.state.pass.length>12){ 
      Alert.alert("Mật khẩu không hợp lệ (Quá dài hoặc quá ngắn)");
    }
    else if(this.state.pass==this.state.repass){
      this.props.navigation.navigate('Login');
    }
    else{
      Alert.alert("Mật khẩu không khớp");
    }
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      
          <View style={styles.container}> 
            <KeyboardAvoidingView behavior="padding" style={styles.container} >
            <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>       
            <ScrollView style={styles.muc2}>
                <Text style={{marginTop:30, fontSize:20, fontWeight:'bold'}}>Mật khẩu mới: </Text>
                <TextInput style = {styles.input} secureTextEntry
                  returnKeyType='next'
                  autoCorrect={false}    
                  onChangeText={(pass)=>this.setState({pass})}    
                  value={this.state.pass}  
                />
                <Text style={{marginTop:30, fontSize:20, fontWeight:'bold'}}>Nhập lại mật khẩu: </Text>
                <TextInput style = {styles.input} secureTextEntry 
                  returnKeyType='next'
                  autoCorrect={false}    
                  onChangeText={(repass)=>this.setState({repass})}    
                  value={this.state.repass}
                />      
                <View style={{alignItems:"center", marginTop:20 }}>
                  <TouchableOpacity style = {styles.submitButton} onPress={() => {this.sign()}}>
                    <Text style = {styles.submitButtonText}> Xác nhận </Text>
                  </TouchableOpacity>
                </View>
          </ScrollView>   
          </TouchableWithoutFeedback> 
          </KeyboardAvoidingView>    
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
    padding:20,
  },
  muc3:{
    height:50,
    backgroundColor:'#1C6BC8',
    alignItems:'center',
    flexDirection:'row',
  },
  input: {
      marginTop: 20,
      height: 60, 
      borderColor: 'grey',
      borderRadius:20,
      borderWidth:1,
      padding: 5,
      paddingLeft:20,
      color: 'black',
      fontSize:30,
   },
   submitButton: {
      backgroundColor: '#1C6BC8',
      padding: 5,
      width:150,
      margin: 5, 
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
