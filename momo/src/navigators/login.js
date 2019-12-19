import { createStackNavigator } from "react-navigation-stack";
import Login from "../components/login/Login";
import Splash from "../components/login/Splash";
const loginNavigator = createStackNavigator({
    Splash: { screen: Splash },
    Login: { screen: Login },
    // Signin: {screen: Signin},   
    // My_wallet: {screen: My_wallet}, 
    // Phone_comf: {screen: Phone_comf}, 
    // OTP_pass: {screen: OTP_pass}, 
    // OTP_comf: {screen: OTP_comf},
    // Createpass:{screen: Createpass},
    // MainNavigator:{screen:MainNavigator,  navigationOptions : {
    //       header: null
    //   },},
},
)
export default loginNavigator