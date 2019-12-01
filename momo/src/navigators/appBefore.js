

import { createStackNavigator } from 'react-navigation-stack';
import  loginNavigator from "./login";
import  forgetPasswordNavigator from "./forgetPassword";
import signInNavigator from "./signIn";
const appBeforeAuthNavigator = createStackNavigator({
  login:{
   screen: loginNavigator
  },
  forgetPassword:{
      screen:forgetPasswordNavigator
  },
  signIn:{
    screen:signInNavigator
}


}, {
  headerMode: "none",
  mode: "modal",
}


);
export default appBeforeAuthNavigator