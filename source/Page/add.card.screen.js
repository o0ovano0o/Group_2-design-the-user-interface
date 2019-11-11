import React, { Component } from 'react';
import { Container,ListItem,Text, Header, Left, Body, Right, Button, Icon, Title, Content, List } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {MainContent,ContentTop, CardLogo} from '../styles/add.card.screen';
import { Alert, View } from 'react-native';
import Search from '../components/SearchBar';


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
        

        <Content style={MainContent}>

            <Search/>
            <Grid  style={ContentTop}>
              <Row size={3}>
                  <Row>
                      <Text>
                        THẺ THANH TOÁN QUỐC TẾ
                      </Text>
                  </Row>

                  <Row size={2} style={CardLogo}>
                      <Text>Logo</Text>
                      <Text>Logo</Text>
                  </Row>
              </Row>

              <Row size={6} style={{backgroundColor:'white'}}>
              <Text>Infoi</Text>
              </Row>

            </Grid>

        </Content>

      </Container>
    );
  }
}