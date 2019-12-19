import { createStackNavigator } from "react-navigation-stack";
import OTP_pass from "../components/forget_pass/OTP_pass";
import Createpass from "../components/forget_pass/Createpass";
import OTP_comf from "../components/forget_pass/Phone_comf";
const forgetPasswordNavigator = createStackNavigator({ 
  
   
    OTP_pass: {screen: OTP_pass}, 
    OTP_comf: {screen: OTP_comf},
    Createpass:{screen: Createpass},
  
},)
export default forgetPasswordNavigator