import * as React from 'react';
import { Text, View, StyleSheet, TextInput,TouchableOpacity,ScrollView, Image,Alert} from 'react-native';


export default class OTP_comf extends React.Component {
  static navigationOptions = {
    title: 'Xác nhận tài khoản ',
  };
  constructor (props){
    super(props);
    this.state={      
      pass:"" 
    };
  }
  sign=()=>{
    if(this.state.pass=="090299"){
      this.props.navigation.navigate('Login');
    }
    else{
      Alert.alert("Mã OTP không đúng");
    }
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
       <View style={styles.container}>        
          <ScrollView style={styles.muc2}>
            <View style={{alignItems:"center"}}>
              <Text style={{marginTop:30, fontFamily:'Arial', fontSize:20, fontWeight:'bold'}}>Nhập mã OTP </Text>
            </View>
              <TextInput style = {styles.input} secureTextEntry placeholder="Mã xác minh"
                keyboardType="number" 
                returnKeyType='next'
                textAlign={'center'}
                autoCorrect={false}    
                onChangeText={(pass)=>this.setState({pass})}    
                value={this.state.pass}  
              /> 
              <View style={{flexDirection:'row'}}>
                <View style={{flex:5}}></View>
                <View style ={{flex:2}}>
                  <TouchableOpacity>
                    <Text style={{fontFamily:'Arial', fontSize:13, color: 'blue',  marginTop:5 }}>Gửi lại mã?</Text>
                  </TouchableOpacity>
                </View>
              </View>            
              <View style={{alignItems:"center"}}>
                <TouchableOpacity style = {styles.submitButton}  onPress={() => {this.sign()}}>
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
