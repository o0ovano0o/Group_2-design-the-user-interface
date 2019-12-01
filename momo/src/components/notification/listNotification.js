import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Icon, Content, Item, Input, Container, Button, Card, CardItem, Left, Thumbnail, Body, ListItem } from 'native-base';
import SingletonClass from './notificationData'
import { AsyncStorage } from 'react-native';
import { FontAwesome, Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
export default class ListNotification extends Component {
    static navigationOptions = {
        title: 'Thông báo',
        headerStyle: {
            backgroundColor: '#385999',
           
      
          },
          headerTintColor: '#fff',

    }


    async  sendparamnavigate(i) {
        let user = this.state.notification
  
        try {
            user[i].seen = true
            console.log(user[i])
            this.setState({notification:user})
           
            let notification = await AsyncStorage.setItem('Notifications', JSON.stringify(user));
        } catch (e) {
            console.log(e)
        }
        
        const { navigate } = this.props.navigation;
        navigate('Notification', {
            data: user[i]
        }

        )
    }
     componentDidUpdate(){
         console.log(123)
        this.render()
     }
    async componentWillMount() {
        this.state = { notification: [] }
        try {
            let notification = await AsyncStorage.getItem('Notifications');

            this.setState({ notification: JSON.parse(notification) })
        } catch (e) {
            console.log(e)
        }

    }







    render() {

        let notifications = this.state.notification;
        let seen = (val) => {
            if (val.seen == true) {

                return (

                    <Text style={{position:"relative",right:0}}>Đã xem</Text>
                )
            }
        }

        let listNotification = notifications.map((val, id) => {

            return (
                
                <Card    >
                
                    <CardItem button onPress={() => this.sendparamnavigate(id)}>
                        <Left >

                            <Icon name="ios-home" />

                            <Body>
                                <Text style={{ fontWeight: 'bold' }}>
                                    {val.title}
                                </Text>
                                <Text numberOfLines={3} >
                                    {val.content}
                                </Text>



                                <Text >
                                    {val.time}
                                </Text>

                                { seen(val)}
                            </Body>

                        </Left>
                    </CardItem>


             

                </Card>

                          
)
        })

        

        return (

            <ScrollView>

                {listNotification}

            </ScrollView>
        )




    }
}

