import React, { Component } from 'react';
import { Container,ListItem,Text, Header, Left, Body, Right, Button, Icon, Title, Content, List } from 'native-base';
import {WhiteSpace} from '@ant-design/react-native/lib/white-space';
export default class HeaderExample extends Component {
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
        

        <Content>

        <List style={{backgroundColor:'white'}}>
            <ListItem style={{fontWeight:'bold',backgroundColor:'#fdfbfb'}} itemDivider>
                <Text>Tài khoản</Text>
            </ListItem>
            
            <ListItem itemDivider>
              <Left>
                <Text>Icon Bank</Text>
              </Left>
              <Body>
                <Text>BIDV</Text>
                <Text note>**** **** **** 6606</Text>
              </Body>
              <Right>
                <Icon name='arrow'></Icon>
              </Right>
            </ListItem>

            <ListItem style={{fontWeight:'bold',backgroundColor:'#fcfcfc'}} itemDivider >
              <Left>
                <Text>Plus</Text>
              </Left>
              <Body>
                <Text>Thêm thẻ/tài khoản</Text>
                </Body>
                <Right>
                <Icon name='arrow'></Icon>
              </Right>
            </ListItem>


        </List>


        </Content>



      </Container>
    );
  }
}