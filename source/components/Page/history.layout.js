import React, { Component } from 'react';
import {Tabs,Thumbnail,List,Body, ListItem, Left,Right, Tab, Container,Content, Header, Item, Icon, Input, Button, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

const In = (props)=>{
    return(
        <Container style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <Button style={{flexDirection:'column',backgroundColor:'#31cad4', borderRadius:10}} transparent>
                
                <Text style={{color:'white',fontWeight:'bold'}}>Nạp tiền vào ví</Text>
                <Text style={{color:'white',fontWeight:'bold'}}>999.000đ</Text>
            
            </Button>
            <Button style={{flexDirection:'column',backgroundColor:'#ec6941', borderRadius:10}} transparent>
                <Text style={{color:'white',fontWeight:'bold'}}>Chiết khấu hoàn lại</Text>
                <Text style={{color:'white',fontWeight:'bold'}}>19.000đ</Text>
            </Button>
        </Container>
    );
} 

const Out = (props)=>{
    return(
        <Text>Điện thoại</Text>
    );
} 

const ItemHistory = (props)=>{

    const Items = props.data.map((item)=>{
        return  <ListItem avatar>
                    <Left>
                        <Text>Icon</Text>
                    </Left>
                    <Body>
                        <Text>Nạp tiền</Text>
                        <Text note>Bạn đã nạp thành công 100.000đ từ BIDB</Text>
                    </Body>
                    <Right>
                        <Text note>+ 100.000đ</Text>
                    </Right>
                </ListItem>;
    });


    return Items;
}

// Data test
const data = [
        {month:9, data:[1,4,5]},
        {month:10, data:[1,5]}
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
                    <Tab activeTextStyle={{color:'black'}} activeTabStyle={{backgroundColor:'white'}} textStyle={{color:'black'}} tabStyle={{backgroundColor:'white'}} heading="Tổng thu">
                        <In/>
                    </Tab>
                    <Tab activeTextStyle={{color:'black'}} activeTabStyle={{backgroundColor:'white'}} textStyle={{color:'black'}} tabStyle={{backgroundColor:'white'}}  heading="Tổng chi">
                        <Out/>
                    </Tab>
                </Tabs>
          </Row>
          <Row style={{backgroundColor:'#e2d9d9'}} size={7}>
            <Content>
            
            <List style={{backgroundColor:'white'}}>
                {
                    data.map((e)=>{
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
