import * as React from 'react';
import { Text, View, StyleSheet,Image ,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import {Dimensions,Keyboard,KeyboardAvoidingView,TouchableWithoutFeedback} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon,Left,Right,List,ListItem,Card,ImageBackground  ,} from 'native-base';
import Constants from 'expo-constants';

export default class My_wallet extends React.Component {
  static navigationOptions = {
    title: 'Ví của tôi',
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
      pass:"12345",
      phone:"0971128133",
      email:"minhanh.th99@gmail.com"
    }; 
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
       <Container>
        <Content>
        <KeyboardAvoidingView behavior="padding" style={styles.container} >
        <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
          <ScrollView>
            <View style={styles.plan }>
              <View style={{flexDirection:'row',flex:12,marginTop:15}}>
                <Image style={styles.img} source={{uri: 'https://i.pinimg.com/600x315/3c/25/fe/3c25fe16eeba1633e6fe3fc5e12b4445.jpg'}} />
                <TextInput style = {{fontSize:20, fontWeight:'bold'}} 
                  autoCorrect={false}    
                  onChangeText={(name)=>this.setState({name})}    
                  value={this.state.name}  />
              </View>
              
            </View>
            <View style={styles.plan }>
              <View style={{flex:7,flexDirection:'row',alignItems:'center' }}>
                <Image style={styles.img} source={{uri: 'http://hofashion.com.vn/wp-content/uploads/2018/09/wallet-with-money-icon-10.png'}} /> 
                <Text style ={{fontSize: 15, }}>Số dư trong ví: </Text>
              </View>
              <View style={{flex:3}}>
                <Text style ={{fontSize: 25, fontWeight:'bold'}}>10.000đ </Text>
              </View>
            </View>
            <View style={styles.plan}>
              <View style={{flex:12,flexDirection:'row',alignItems:'center'  }}>
                <Image style={styles.img} source={{uri: 'http://saovietsoft.vn/san-pham/tham-my-vien/Icon/member.png'}} /> 
                <Text style ={{fontSize: 15}}>Thẻ ngân hàng liên kết</Text>
              </View>
              <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <TouchableOpacity >
                    <Image style={styles.imgnext} source={{uri: 'http://www.smailingdmc.com/Modules/Web/Images/icon-next.png'}} /> 
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.plan}>
              <View style={{flex:12,flexDirection:'row', alignItems:'center'}}>
                <Image style={styles.img} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ajQRNGRt_fN-FVngTkjkdtIDoXKtm_ddGcdJYKgh7WHSHsH3'}} /> 
                <Text style ={{fontSize: 15,} }>Họ tên: </Text>
                <TextInput style = {styles.input} 
                  autoCorrect={false}    
                  onChangeText={(fullname)=>this.setState({fullname})}    
                  value={this.state.fullname} 
                 />
              </View>
              
            </View>
            <View style={styles.plan}>
              <View style={{flex:12,flexDirection:'row',alignItems:'center' }}>
                <Image style={styles.img} source={{uri: 'https://thietbinghenhin.com.vn/public/media/file/files/gioi-thieu/telephone-icon.png'}} /> 
                <Text style ={{fontSize: 15} }>Số điện thoại: </Text>
                <TextInput style = {styles.input} 
                  autoCorrect={false}    
                  onChangeText={(phone)=>this.setState({phone})}    
                  value={this.state.phone} 
                 />
              </View>
              
            </View>
            <View style={styles.plan}>
              <View style={{flex:12,flexDirection:'row',alignItems:'center' }}>
                <Image style={styles.img} source={{uri: 'https://imgix.setapp.com/app/169/1479/icon-1539884247-5bc8c4d7b9f0c.png?auto=format&ixlib=php-2.3.0&q=75&w=320'}} /> 
                <Text style ={{fontSize: 15} }>E-mail: </Text>
                <TextInput style = {styles.input} 
                  autoCorrect={false}    
                  onChangeText={(email)=>this.setState({email})}    
                  value={this.state.email} 
                 />
              </View>
              
            </View>
            <View style={styles.plan}>
              <View style={{flex:12,flexDirection:'row',alignItems:'center'}}>
                <Image style={styles.img} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPCj-Stp16mXGY9Mk-kOII0beAWeqG8NdademlI0BBlWf_e1XE'}} /> 
                <Text style ={{fontSize: 15} }>Mật khẩu: </Text>
                <TextInput style = {styles.input} secureTextEntry 
                  autoCorrect={false}    
                  onChangeText={(pass)=>this.setState({pass})}    
                  value={this.state.pass} 
                />
              </View>
             
            </View>
            <View style={styles.plan}>
              <View style={{flex:12,flexDirection:'row',alignItems:'center' }}>
                <Image style={styles.img} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM_1hZBZWVHoeIWXi5Le3YjFi0XtQ2s1a5Ya9ElJ4Zkk11b5uN'}} /> 
                <Text style ={{fontSize: 15}}>Trợ giúp</Text>
              </View>
              <View style={{flex:1}}>
                <TouchableOpacity  >
                    <Image style={styles.imgnext} source={{uri: 'http://www.smailingdmc.com/Modules/Web/Images/icon-next.png'}} /> 
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.plan}>
              <View style={{flex:12,flexDirection:'row',alignItems:'center' }}>
                <Image style={styles.img} source={{uri: 'https://vidiashop.net/wp-content/uploads/2017/08/icon-cai-dat-3.png'}} /> 
                <Text style ={{fontSize: 15}}>Cài đặt</Text>
              </View>
              <View style={{flex:1}}>
                <TouchableOpacity onPress={() => navigate('Setting')} >
                    <Image style={styles.imgnext} source={{uri: 'http://www.smailingdmc.com/Modules/Web/Images/icon-next.png'}} /> 
                </TouchableOpacity>
              </View>
            </View>
            <View style={{flex:1, alignItems:"center", justifyContent:'center', height: 80, }}>
              <View style={{alignItems:"center", justifyContent:'center' }}>
                <TouchableOpacity style = {styles.submitButton} onPress={() => navigate('Login')}>
                  <Text style = {styles.submitButtonText}> Đăng xuất </Text>
                </TouchableOpacity>
              </View>
            </View> 
          </ScrollView>
        </TouchableWithoutFeedback> 
        </KeyboardAvoidingView>
        </Content>
      </Container>
    );
  }
}
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
      img:{
          height:30,
          width:30,
          borderRadius: 40,
          marginRight:10,
      },
       
      plan:{
          flexDirection:'row',
          height: 80,
          borderBottomColor:'black',
          borderBottomWidth:1,
          alignItems:'center',
          padding:15,
      },
      imgnext:{
          height:20,
          width:20,
      },
      input: {
          padding: 2,
          fontSize:20, 
      }, 
      submitButton: {
          backgroundColor: '#4FADF9',
          padding: 10,
          height: 40,
          width:150,
          borderRadius: 50,
          alignItems: 'center',
          justifyContent:'center',
      },
      submitButtonText:{
          color: 'white',
          fontWeight:'bold',
      },
});
