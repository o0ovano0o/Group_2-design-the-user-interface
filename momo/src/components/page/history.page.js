import React, { Component } from 'react';
import { Container, Header, Item, Input,Right, Icon, Button, Text, Card, CardItem, Content } from 'native-base';

class History extends Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <Container>
                <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" />
                    <Icon name="ios-people" />
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
                </Header>

                <Container>

                    <Card style={{flexDirection:"row", justifyContent:'space-around'}}>
                        
                    <CardItem style={{border:'0px'}} header button onPress={() => alert("This is Card Header")}>
                        <Text>Tổng thu</Text>
                    </CardItem>

                    <CardItem header button onPress={() => alert("This is Card Header")}>
                        <Text>Tổng chi</Text>
                    </CardItem>

                    </Card>

                    <Card style={{flexDirection:'row', justifyContent:'space-around'}}>
                        <CardItem style={{flexDirection:'column'}}>
                            <Text>
                                Nạp tiền vào ví
                            </Text>
                            <Text>130.000đ</Text>
                        </CardItem>
                        <CardItem style={{flexDirection:'column'}}>
                            <Text>
                                Chiết khấu hoàn lại
                            </Text>
                            <Text>1.000đ</Text>
                        </CardItem>
                    </Card>


                    <Content>
                        <Card>
                            <CardItem>
                            <Icon active name="logo-googleplus" />
                            <Text>Google Plus</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                            </CardItem>
                        </Card>
                    </Content>
                    
                </Container>
                

            </Container>
        );
    };
}

export default History;