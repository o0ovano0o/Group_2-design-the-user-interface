
import  Transmoney  from '../components/transmoney/Transmoney';
import Inputsdt  from '../components/transmoney//Inputsdt';
import Inputmoney  from '../components/transmoney/Inputmoney';
import Confirm  from '../components/transmoney/Confirm';
import Error  from '../components/transmoney/Error';
import Sucess  from '../components/transmoney/Sucess';
import { createStackNavigator } from 'react-navigation-stack';
const tranferByMoneybyPhoneNavigator= createStackNavigator({
   
   Transmoney : {screen: Transmoney},
    Chuyentiensdt: {screen: Inputsdt},
    Inputmoney: {screen: Inputmoney},
    Confirm: {screen:Confirm},
     Error: {screen:Error},
   Sucess:{screen: Sucess}
  },
  {
    headerLayoutPreset: 'center'
  },
   {
        headerMode: "none",
        mode: "modal",
      }
  );
  tranferByMoneybyPhoneNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible;
    if (navigation.state.routes.length > 1) {
      navigation.state.routes.map(route => {
        if (route.routeName === "Menu") {
          tabBarVisible = true;
        } else {
          tabBarVisible = false;
        }
      });
    }
  
    return {
      tabBarVisible
    };
  };

  export default tranferByMoneybyPhoneNavigator