import React, { Component } from 'react';
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import { Content, Item, Input, Container, Button, Card,CardItem,Left,Thumbnail,Body } from 'native-base';



export default class Notification extends Component {
    static navigationOptions =({navigation})=> {
        
       return  {title: navigation.getParam('data').title,
        headerStyle: {
            backgroundColor: '#385999',
            height: 56
        },}

    }
    render() {
        const { navigation } = this.props;
        const data =  navigation.getParam('data')


        return (

            <ScrollView style={{flex:1}}>
                <Card  style={{flex:2} }>
                   
                <CardItem header >
              <Text style={{fontWeight:'bold'}}>Chi tiết </Text>
            </CardItem>
           
                   
                    <CardItem>
                   <Text>
                         {data.content}
                        </Text>
                   </CardItem>


                </Card>
                
                </ScrollView>
        )




    }
}
