import { createStackNavigator } from "react-navigation-stack";
import My_wallet from "../components/myWallet/My_wallet";
import Setting from "../components/myWallet/Setting";
const myWalletNavigator = createStackNavigator({
    My_wallet : {screen: My_wallet},
    Setting : {screen: Setting},
  },
  {
    headerLayoutPreset: 'center'
  },
   {
        headerMode: "none",
        mode: "modal",
      }

)
export default myWalletNavigator