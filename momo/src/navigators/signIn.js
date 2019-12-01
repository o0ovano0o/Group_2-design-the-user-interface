import { createStackNavigator } from "react-navigation-stack";
import  OTP_comf from "../components/signIn/OTP_comf";
import Phone_signin from "../components/signIn/Phone_signin";
import Signin  from "../components/signIn/Signin";
const signInNavigator = createStackNavigator({
    
    Signin: {screen: Signin},
    Phone_sigin:{
        screen:Phone_signin
    },
    OTP_comf:{
        screen:OTP_comf
    }
    
},
)
export default signInNavigator