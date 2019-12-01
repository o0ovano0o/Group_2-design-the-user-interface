import { createStackNavigator } from "react-navigation-stack";
import Discount from "../components/discount/Discount";
import Info from "../components/discount/Info";
const discountNavigator= createStackNavigator({
    Discount : {screen: Discount},
    Info: {screen: Info},
  },
  {
    headerLayoutPreset: 'center'
  },
   {
        headerMode: "none",
        mode: "modal",
      }
  );
  discountNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible;
    if (navigation.state.routes.length > 1) {
      navigation.state.routes.map(route => {
        if (route.routeName === "Discount") {
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
  export default discountNavigator