import React, { Component } from 'react';
import {Tabs,Thumbnail,Body,Icon, ListItem, Left,Right, Tab, Container,Content, Header, Item, Input, Button, Text, View } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { List, SwipeAction } from '@ant-design/react-native';



const In = (props)=>{
    return(
        <Container style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <View style={{paddingTop:5,flex:1, margin:10, paddingBottom:5, paddingLeft: 15,paddingRight:45,flexDirection:'column',backgroundColor:'#31cad4', borderRadius:10}} transparent>
                
                <Text style={{color:'white',fontWeight:'bold'}}>Nạp tiền vào ví</Text>
                <Text style ={{color:'white',fontWeight:'bold', fontSize:20}}>222.000đ</Text>
            
            </View>
            <View style={{flex:1 ,paddingTop:5,margin:10, paddingBottom:5, paddingLeft: 15,paddingRight:45, flexDirection:'column',backgroundColor:'#ec6941', borderRadius:10}} transparent>
                <Text style={{color:'white',fontWeight:'bold'}}>Chiết khấu</Text>
                <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>898.000đ</Text>
            </View>
        </Container>
    );
} 

const Out = (props)=>{
    return(
        <Container style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <View style={{paddingTop:5,flex:1, margin:10, paddingBottom:5, paddingLeft: 15,paddingRight:45,flexDirection:'column',backgroundColor:'#31cad4', borderRadius:10}} transparent>
                
                <Text style={{color:'white',fontWeight:'bold'}}>Thanh toán khác</Text>
                <Text style ={{color:'white',fontWeight:'bold', fontSize:20}}>99.000đ</Text>
            
            </View>
            <View style={{flex:1 ,paddingTop:5,margin:10, paddingBottom:5, paddingLeft: 15,paddingRight:45, flexDirection:'column',backgroundColor:'#ec6941', borderRadius:10}} transparent>
                <Text style={{color:'white',fontWeight:'bold'}}>Điện thoại</Text>
                <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>89.000đ</Text>
            </View>
        </Container>
    );
} 

const ItemHistory = (props)=>{

    const right = [
        {
          text: 'More',
          onPress: () => console.log('more'),
          style: { backgroundColor: 'orange', color: 'white' },
        },
        {
          text: 'Delete',
          onPress: () => console.log('delete'),
          style: { backgroundColor: 'red', color: 'white' },
        },
      ];

      const left = [
        {
          text: 'Read',
          onPress: () => console.log('read'),
          style: { backgroundColor: 'blue', color: 'white' },
        },
        {
          text: 'Reply',
          onPress: () => console.log('reply'),
          style: { backgroundColor: 'green', color: 'white' },
        },
      ];
    
    const Items = props.data.map((item)=>{
        return  <SwipeAction 
                    autoClose
                    style={{ backgroundColor: 'transparent' }}
                    right={right}
                    
                    onOpen={() => console.log('open')}
                    onClose={() => console.log('close')}
                >
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Icon name="check"></Icon>
                            </Left>
                            <Body>
                                <Text>{item.message}</Text>
                            </Body>
                            <Right>
                                <Text note>{item.content}</Text>
                            </Right>
                        </ListItem>
                    </List>
                </SwipeAction>;
    });


    return Items;
}

// Data test
const fakeData = [
        {
            month:'9/1019', 
            data:[
                {message:'Nạp tiền thành công', content:'+1000đ', status:'check'},
                {message:'Thanh toán thành công', content:'+1000đ',status:'cross'},
                {message:'Nạp tiền thành công', content:'+1000đ', status:'check'},
                {message:'Thanh toán thành công', content:'+1000đ',status:'cross'},
                {message:'Nạp tiền thành công', content:'+1000đ', status:'check'},
                {message:'Thanh toán thành công', content:'+1000đ',status:'cross'},
                {message:'Nạp tiền thành công', content:'+1000đ', status:'check'},
                {message:'Thanh toán thành công', content:'+1000đ',status:'cross'},
                {message:'Nạp tiền thành công', content:'+1000đ', status:'check'},
                {message:'Thanh toán thành công', content:'+1000đ',status:'cross'},
            ]
        },
        {
            month:'10/2019', 
            data:[
                {message:'Nạp tiền thành công', content:'+1000đ', status:'check'},
                {message:'Thanh toán thành công', content:'+1000đ',status:'cross'},
                {message:'Nạp tiền thành công', content:'+1000đ', status:'check'},
                {message:'Thanh toán thành công', content:'+1000đ',status:'cross'},
                {message:'Nạp tiền thành công', content:'+1000đ', status:'check'},
                {message:'Thanh toán thành công', content:'+1000đ',status:'cross'},
                {message:'Nạp tiền thành công', content:'+1000đ', status:'check'},
                {message:'Thanh toán thành công', content:'+1000đ',status:'cross'},
                {message:'Nạp tiền thành công', content:'+1000đ', status:'check'},
                {message:'Thanh toán thành công', content:'+1000đ',status:'cross'},
                {message:'Nạp tiền thành công', content:'+1000đ', status:'check'},
                {message:'Thanh toán thành công', content:'+1000đ',status:'cross'},
                {message:'Nạp tiền thành công', content:'+1000đ', status:'check'},
                {message:'Thanh toán thành công', content:'+1000đ',status:'cross'},
                {message:'Nạp tiền thành công', content:'+1000đ', status:'check'},
                {message:'Thanh toán thành công', content:'+1000đ',status:'cross'},
                {message:'Nạp tiền thành công', content:'+1000đ', status:'check'},
                {message:'Thanh toán thành công', content:'+1000đ',status:'cross'},
                {message:'Nạp tiền thành công', content:'+1000đ', status:'check'},
                {message:'Thanh toán thành công', content:'+1000đ',status:'cross'},
            ]
        }
    ];


export default class LayoutHistory extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded style={{backgroundColor:'#52669c'}}>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" />
                    <Icon name="ios-people" />
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
        </Header>
        <Grid>
          <Row style={{backgroundColor:'#fff8f8', 
                        borderBottom:'2px solid red', 
                        flexDirection:'row',
                        justifyContent:'space-around',
                        alignItems:'center'
                        } } size={2}>

                <Tabs tabBarUnderlineStyle={{backgroundColor:'#52669c'}}>
                    <Tab activeTextStyle={{color:'black',  fontWeight:'bold', fontSize:16}} activeTabStyle={{backgroundColor:'white'}} textStyle={{color:'black'}} tabStyle={{backgroundColor:'white'}} heading="Tổng thu">
                        <In/>
                    </Tab>
                    <Tab activeTextStyle={{color:'black',  fontWeight:'bold', fontSize:16}} activeTabStyle={{backgroundColor:'white'}} textStyle={{color:'black'}} tabStyle={{backgroundColor:'white'}}  heading="Tổng chi">
                        <Out/>
                    </Tab>
                </Tabs>
          </Row>
          <Row style={{backgroundColor:'#e2d9d9'}} size={7}>
            <Content>
            
            <List style={{backgroundColor:'white'}}>
                {
                    fakeData.map((e)=>{
                        return <React.Fragment>
                                    <ListItem itemDivider>
                                        <Text>Tháng {e.month}</Text>
                                    </ListItem>
                                    <ItemHistory data={e.data}/>
                                </React.Fragment>
                    })
                }
            </List>
            </Content>
          </Row>


        </Grid>
      </Container>
    );
  }
}
