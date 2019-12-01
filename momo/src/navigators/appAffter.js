

import { createStackNavigator } from 'react-navigation-stack';
import Menu from "../components/Menu";
import myWalletNavigator from "./myWalet";
import discountNavigator from "./discount";
import tranferByMoneybyPhoneNavigator from "./transferMoneybyPhone";
import historyNavigator from "./history";
import depositNavigator from "./deposit";
import  NotificationNavigator from "./notification";
import botomTabNavigator from "./bottomTab";

import QrCodeComponent  from "../components/QRCode/QrCode";
import   tranferByQRNavigator from "./tranferMoneybyQR";
import myQrcodeNavigator from "./myQrcode";
const appAfferAuthNavigator = createStackNavigator({
   bottomTab:{
     screen:botomTabNavigator,
     navigationOptions : {
      header: null
  }
     
   },
   notification:{
     screen:NotificationNavigator
   },
   qrScan:{
   screen: tranferByQRNavigator
   },
   myQRCode:{
    screen:myQrcodeNavigator
  },
  discount: {
    screen: discountNavigator,


  },

  tranferByMoneybyPhone: {
    screen: tranferByMoneybyPhoneNavigator
  },
  history:{
   screen: historyNavigator
  },
  myWalet: {
    screen: myWalletNavigator
  },
   depostit: {
    screen: depositNavigator,
    
  }


  //   MainNavigator:{screen:MainNavigator,  navigationOptions : {
  //     header: null
  // },},

},
{
  headerMode: "none",
  mode: "modal",
}

);
export default appAfferAuthNavigator

