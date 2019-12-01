import Menu from '../components/Menu';
import { createSwitchNavigator } from "react-navigation";
import  appAfferAuthNavigator from "./appAffter";
import  appBeforeAuthNavigator from "./appBefore";
import botomTabNavigator from "./bottomTab";
const RootNavigator = createSwitchNavigator({
    // Menu:{
    //  screen:Menu
    // },
    // Notication:NotificationNavigator
      //  appBefore:appBeforeAuthNavigator,
       appAffter: appAfferAuthNavigator
       
  
  },
  );

  
export default  RootNavigator