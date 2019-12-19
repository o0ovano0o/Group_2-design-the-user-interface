import React, { Component } from 'react';
import { Container,ListItem,Text, Header, Left, Body, Right, Button, Icon, Title, Content, List } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {MainContent,ContentTop, CardLogo} from '../styles/add.card.screen';
import {View } from 'react-native';
import Search from '../components/SearchBar';
import { ScrollView } from 'react-native-gesture-handler';


export default class AddCardScreen extends Component {
  render() {
    return (
      <Container>

        <Header style={{backgroundColor:'#52669c'}}>
          <Left>
            <Button onPress={()=>this.props.navigation.navigate('Home')} transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Thêm thẻ/Tài khoản</Title>
          </Body>
          
        </Header>

        <Search/>

        <View style={{flex: 1, flexDirection: 'column', backgroundColor:'#e7e7e7'}}>

            <View style={{flex: 2,fontWeight:'bold', flexDirection: 'column', backgroundColor:'white', marginBottom:4}}>
                <Text style={{fontWeight:'bold',paddingTop:18,paddingLeft:18, paddingBottom:8, fontSize:20}}>
                  THẺ THANH TOÁN QUỐC TẾ
                </Text>
                <Text style={{fontWeight:'bold',paddingLeft:18, fontSize:16}}>
                  Miễn phí giao dịch
                </Text>
                
                <View style={{flexDirection:'row', padding:18, justifyContent:'space-around'}}>

                  <View>
                    <Icon name="card" style={{color:'red', fontSize:40}}></Icon>
                    <Text style={{fontWeight:'bold'}}>Visa</Text>
                  </View>
                  
                  <View>
                    <Icon name="card" style={{color:'green', fontSize:40}}></Icon>
                    <Text style={{fontWeight:'bold'}}>MCard</Text>
                  </View>

                  <View>
                    <Icon name="card" style={{color:'blue', fontSize:40}}></Icon>
                    <Text style={{fontWeight:'bold'}}>JCB</Text>
                  </View>
                
                </View>
      
            </View>

            <View style={{flex: 3, flexDirection: 'column', backgroundColor:'white', marginBottom:4}}>

               <Text style={{fontWeight:'bold',paddingTop:18,paddingLeft:18, paddingBottom:8, fontSize:20}}>
                  NGÂN HÀNG LIÊN KẾT VÍ UETPAY
                </Text>
                <Text style={{fontWeight:'bold',paddingLeft:18, fontSize:16}}>
                  Miễn thanh toán và chuyển tiền
                </Text>
                
                <View style={{flexDirection:'row', padding:18, justifyContent:'space-around'}}>

                  <View>
                      <Icon name="card" style={{color:'red', fontSize:40}}></Icon>
                      <Text style={{fontWeight:'bold'}}>BIDB</Text>
                    </View>
                    
                    <View>
                      <Icon name="card" style={{color:'green', fontSize:40}}></Icon>
                      <Text style={{fontWeight:'bold'}}>VTB</Text>
                    </View>

                    <View>
                      <Icon name="card" style={{color:'blue', fontSize:40}}></Icon>
                      <Text style={{fontWeight:'bold'}}>VIP</Text>
                    </View>
                  
                </View>

                <View style={{flexDirection:'row', padding:18, justifyContent:'space-around'}}>

                  <View>
                      <Icon name="card" style={{color:'red', fontSize:40}}></Icon>
                      <Text style={{fontWeight:'bold'}}>UETB</Text>
                    </View>
                    
                    <View>
                      <Icon name="card" style={{color:'green', fontSize:40}}></Icon>
                      <Text style={{fontWeight:'bold'}}>VNUB</Text>
                    </View>

                    <View>
                      <Icon name="card" style={{color:'blue', fontSize:40}}></Icon>
                      <Text style={{fontWeight:'bold'}}>Siha</Text>
                    </View>
                  
                </View>

                

                

            </View>

            <View style={{flex: 3, flexDirection: 'column', backgroundColor:'white'}}>

            <Text style={{fontWeight:'bold',paddingTop:18,paddingLeft:18, paddingBottom:8, fontSize:20}}>
                  Đảm bảo án toàn tuyệt đối
                </Text>
                <Text style={{paddingLeft:18, fontSize:16}}>
                  Bảo mật nhiều lớp
                </Text>


            </View>

            

        </View>

        
  
      </Container>
    );
  }
}