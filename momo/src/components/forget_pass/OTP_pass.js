import * as React from 'react';
import { Text, View, StyleSheet, TextInput,TouchableOpacity,ScrollView, Image,Alert,Keyboard,PasscodeTextInput} from 'react-native';
import Constants from 'expo-constants';
export default class OTP_pass extends React.Component {
  static navigationOptions = {
    title: 'Xác minh tài khoản ',
  };
   constructor(props) {
          super(props);this.state = {xn1:'',xn2:'',xn3:'',xn4:'',xn5:'',xn6:'',
          };
          
      }

  sign=()=>{
    this.props.navigation.navigate('Createpass');
    if(this.state.pass=="090299"){
      this.props.navigation.navigate('Createpass');
    }
    else{
      Alert.alert("Mã OTP không đúng!");
    }
  }
  render() {
    const {navigate} = this.props.navigation;
    const { centerEverything, container, passcodeContainer, testShit, textInputStyle } = styles;
    return (
       <View style={styles.container}>        
          <ScrollView style={styles.muc2}>
            <View style={{alignItems:"center"}}>
              <Text style={{marginTop:30, fontSize:20, fontWeight:'bold'}}>Nhập mã OTP </Text>
            </View>
              
                          <View style={{
                            flexDirection:'row',
                            justifyContent:'center',alignItems:'center'}}>
                              <TextInput onChangeText={(xnt)=> {this.setState({xn1:xnt});
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
                              <TextInput onChangeText={(xnt)=> {this.setState({xn2:xnt});
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
                              <TextInput onChangeText={(xnt)=> {this.setState({xn3:xnt});
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
                              <TextInput onChangeText={(xnt)=> {this.setState({xn4:xnt});
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
                              </TextInput>
                            </View>       

              <View style={{flexDirection:'row'}}>
                <View style={{flex:5}}></View>
                <View style ={{flex:2}}>
                  <TouchableOpacity>
                    <Text style={{ fontSize:13, color: 'blue',  marginTop:5 }}>Gửi lại mã?</Text>
                  </TouchableOpacity>
                </View>
              </View>            
           
              
              <View style={{alignItems:"center"}}>
                <TouchableOpacity style = {styles.submitButton} onPress={() => {this.sign()}}>
                  <Text style = {styles.submitButtonText}> Xác nhận </Text>
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
