import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import {Dimensions} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button,Left,Right,List,ListItem,Card,ImageBackground,TouchableOpacity ,Alert,CardItem,Icon } from 'native-base';
import TabBar from '@ant-design/react-native/lib/tab-bar';
import Badge from '@ant-design/react-native/lib/badge';
import Constants from 'expo-constants';
import {AsyncStorage} from 'react-native';
// You can import from local files
 


export default class Menu extends React.Component {
   
constructor(props){
    super(props);
    this.state = {
     money:'310.000',

    };
    }
    data = async () =>AsyncStorage.getItem('money').then((value) => this.setState({ money: value }));
    static navigationOptions = {
header: null,
};
  render() {
    this.data;
     const {navigate} = this.props.navigation;
    return (
        <Container>
        <Header style={{paddingTop:14}}>
          <Left>
          <Text style={{fontWeight:'bold',fontSize:24,color:'white',left:20,paddingTop:3}}>UETPay</Text>
          </Left>
          <Right>
            <Button transparent onPress={() => navigate('notification')}>
              <Icon name='notifications' style={{fontSize:27,paddingTop:3}} />
            </Button>
            <Button transparent  onPress={() => navigate('login')}>
              <Icon name='log-out' style={{fontSize:27,paddingTop:3}}/>
            </Button>
          </Right>
        </Header>
        <Content style={{backgroundColor:'#ededed'}}>
        <View style={{backgroundColor:'#3F51B5',flexDirection:'column',minHeight:130,paddingTop:13,padding:8}}>
         <Text style={{color:'white',fontSize:18}}>Xin chào Minh Anh! </Text>
            <Text style={{color:'white',fontSize:20}}>Ví bạn có</Text>
            <Text style={{color:'white',fontSize:40,alignItems:'center',textAlign:'center'}}>{this.state.money}đ</Text>
        </View>
        
        <View style={{flexDirection:'row',flex:1,marginTop:15}}>
        <CardItem style={styles.iconc} button onPress={() => { navigate('myQRCode');}} >
         
                <Icon name="ios-log-in" style={styles.icon}/>
          
          <Text style={{paddingTop:7,fontWeight:'bold',}}>NẠP TIỀN VÀO VÍ</Text>
        </CardItem>
       <CardItem style={styles.iconc} button onPress={() => { navigate('deposit');}} >
         
                <Icon name="coin" type='MaterialCommunityIcons' style={styles.icon}/>
       
          <Text style={{paddingTop:7,fontWeight:'bold',}}>RÚT TIỀN</Text>
        </CardItem>
       </View>
        <View style={{flexDirection:'row',}}>
        <CardItem style={styles.iconc} button onPress={() => { navigate('myQRCode');}} >
        
                <Icon name="qrcode" type='AntDesign' style={styles.icon}/>
        
          <Text style={{paddingTop:7,fontWeight:'bold'}}>MÃ THANH TOÁN</Text>
        </CardItem>
       <CardItem style={styles.iconc} button onPress={() => { navigate('ScanCode');}} >
        
                <Icon name="qrcode-scan" type='MaterialCommunityIcons' style={styles.icon}/>
        
          <Text style={{paddingTop:7,fontWeight:'bold'}}>QUÉT MÃ</Text>
        </CardItem>
        </View>
           
           
        <View style={{flexDirection:'row',flex:1,marginTop:20}}>
         <CardItem style={styles.icont} button  onPress={() => this.props.navigation.navigate({routeName: 'Transmoney'})} >
                <Icon name="money-bill" type='FontAwesome5' style={styles.icon}/>
          <Text style={{paddingTop:2}}>Chuyển tiền</Text>
        </CardItem>
       <CardItem style={styles.icont} button onPress={() => { navigate('AddCard')}} >
                <Icon name="credit-card" type='FontAwesome' style={styles.icon}/>
          <Text style={{paddingTop:2}}>Liên kết ví</Text>
        </CardItem>
       <CardItem style={styles.icont} button onPress={() => { alert('You tapped the button!');}} >
           <Icon name="mobile" type='FontAwesome' style={styles.icon}/>
          <Text style={{paddingTop:2,}}>Nạp thẻ</Text>
       </CardItem>
       <CardItem style={styles.icont} button onPress={() => { alert('You tapped the button!');}} >
                <Icon name="support" type='FontAwesome' style={styles.icon}/>
          <Text style={{paddingTop:2}}>Hỗ trợ</Text>
        </CardItem>
    
       </View>
        <View style={{flexDirection:'row',flex:1,paddingBottom:20}}>
          <CardItem style={styles.icont} button onPress={() => { alert('You tapped the button!');}} >
                <Icon name="gamepad" type='FontAwesome' style={styles.icon}/>
          <Text style={{paddingTop:2, }}>Thẻ game</Text>
         </CardItem>
       <CardItem style={styles.icont} button onPress={() => { alert('You tapped the button!');}} >
                <Icon name="train" type='FontAwesome' style={styles.icon}/>
          <Text style={{paddingTop:2, }}>Vé tàu</Text>
          </CardItem>
       <CardItem style={styles.icont} button onPress={() => { alert('You tapped the button!');}} >
                <Icon name="plane" type='FontAwesome5' style={styles.icon}/>
          <Text style={{paddingTop:2, }}>Vé máy bay</Text>
        </CardItem>
       <CardItem style={styles.icont} button onPress={() => { alert('You tapped the button!');}} >
           <Icon name="movie" type='MaterialCommunityIcons' style={styles.icon}/>
          <Text style={{paddingTop:2,}}>Vé xem phim</Text>
         </CardItem>
       </View>
        


        </Content>
       
      </Container>
    );
  }
}
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
      iconc:{
        flexDirection:'column',flex:1,paddingTop:15,paddingBottom:15,alignItems:"center",borderRadius:10,borderWidth:1,borderColor:'#dedede',margin:5
      },
       icont:{
        flexDirection:'column',flex:1,paddingTop:8,paddingBottom:8,alignItems:"center",borderWidth:1,borderColor:'#F4F4F4'
      },
      icon:{
        color:'#3F51B5',
        fontSize:30,
      },   
});
