import * as React from 'react';
import { StyleSheet, TouchableOpacity, FlatList, Alert, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import {
  Container, Header, Content, Button, Icon, List, ListItem, Text, View, Card, CardItem, Body, Footer, Keyboard, ListView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback
} from 'native-base';
// You can import from local files
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import sdt from '../assets/sdt.json';
const datas = [
  {
    "id": 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: "Vân Anh",
    number: "0963852811",
  },
  {
    "id": '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: "Minh",
    number: "0963456789",
  },
  {
    "id": '58694a0f-3da1-471f-bd96-145571e29d72',
    title: "Tùng",
    number: "0963456788",
  },
  {
    "id": '58694a0f-3da1-471f-bd96-145571e29d72',
    title: "Lan",
    number: "0963456787",
  },
];
export default class Transmoney extends React.Component {
  static navigationOptions = {
    title: "Chuyển tiền",
    headerStyle: {
      backgroundColor: '#385999',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerTintColor: '#fff',
  };
  constructor(props) {
    super(props);

    this.state = {
      basic: true,
      listViewData: datas,
    };
  }
  renderPhone() {
    return this.state.listViewData.map(data => {
      return (
        <ListItem style={{ width: '100%', paddingTop: 15, paddingBottom: 10, }}>
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Inputmoney', { ...data }); }} ><Text>{data.number}</Text>
          </TouchableOpacity>
        </ListItem>
      );
    });
  }
  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container style={{ backgroundColor: '#ededed' }}>
        <ScrollView>
          <View style={styles.content}>
            <Card>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate({ routeName: 'Chuyentiensdt' })}
              >
                <Text style={styles.paragraph}><Icon type="Ionicons" name="ios-people" style={{ fontSize: 28, color: '#385999' }} /> Tới số điện thoại</Text>
              </TouchableOpacity></Card>
            <Card>
              <TouchableOpacity
                onPress={this.onPress} >
                <Text style={styles.paragraph}>
                  <Icon type="MaterialCommunityIcons" name="qrcode" style={{ fontSize: 28, color: '#385999' }} /> Tới mã QR</Text>
              </TouchableOpacity>
            </Card>
            <View style={{ marginTop: 20 }}>
              <Card>
                <CardItem header bordered>
                  <Text >Gần đây</Text>
                </CardItem>
                <CardItem style={{ width: '100%' }}>
                  <List style={{ width: '100%', marginLeft: -18 }}>
                    {this.renderPhone()}
                  </List>
                </CardItem>
              </Card>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 10,
    backgroundColor: '#ededed'
  },
  paragraph: {
    margin: 15,
    fontSize: 16,
  },


});
