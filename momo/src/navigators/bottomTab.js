import { createBottomTabNavigator } from 'react-navigation-tabs';
import myWalletNavigator from "./myWalet";
import discountNavigator from "./discount";
import tranferByMoneybyPhoneNavigator from "./transferMoneybyPhone";
import historyNavigator from "./history";
import {Icon} from 'native-base';
import * as React from 'react';
import Menu from "../components/Menu";
const botomTabNavigator = createBottomTabNavigator({
    UETPay: { screen:Menu, navigationOptions: {
              tabBarLabel: 'UETPay',
             
              tabBarIcon: ({tintColor}) => (
            <Icon name='home' size={25} type='AntDesign' style={{color:tintColor}} />
          )
          }},
    Gift : {screen: discountNavigator,
    navigationOptions: {
              tabBarLabel: 'Ưu đãi',
               
                tabBarIcon: ({tintColor}) => (
            <Icon  name='gift'  size={25} type='AntDesign' style={{color:tintColor}} />
          )
          }
    },
    History : {screen:historyNavigator,
    navigationOptions: {
              tabBarLabel: 'Lịch Sử',
               
                tabBarIcon: ({tintColor}) => (
            <Icon  name='history'  size={25} type='FontAwesome' style={{color:tintColor}} />
          )
          }
    },
    MyWallet : {screen: myWalletNavigator,
    navigationOptions: {
              tabBarLabel: 'Ví của tôi',
                tabBarIcon: ({tintColor}) => (
            <Icon   name="wallet"  size={25} type='Entypo' style={{color:tintColor}} />
          )
          }
    },
  },
  {
    initialRouteName: "UETPay",
    order:['UETPay','Gift','History','MyWallet'],
    animationEnabled:true,
     tabBarOptions: {
        activeTintColor: '#385999',
        inactiveTintColor: 'gray',
        showIcon:true,
      },
      headerMode: 'none',
      
  }
  
  );
  export default botomTabNavigator