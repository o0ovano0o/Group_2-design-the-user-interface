import { createStackNavigator } from "react-navigation-stack";

import QrCodeComponent from "../components/QRCode/QrCode";
const myQrcodeNavigator = createStackNavigator({
    qrCode:{
        screen:  QrCodeComponent
        },
},
)
export default myQrcodeNavigator