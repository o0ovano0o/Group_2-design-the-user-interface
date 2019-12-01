import FormMoneyComponent from '../components/sendMoneybyQRcode/formMoney'

import PaymentComfirmComponent from '../components/sendMoneybyQRcode/paymentConfirm';
import { createStackNavigator } from 'react-navigation-stack';
import SuccessfulTransactionComponent from "../components/sendMoneybyQRcode/successfulTransaction";
import CameraComponent from '../components/sendMoneybyQRcode/scanCode';
const tranferByQRNavigator = createStackNavigator({
  ScanCode: {
    screen: CameraComponent,

  },
  InputMoney: {
    screen: FormMoneyComponent
  },
  ConfirmPayment: {
    screen: PaymentComfirmComponent
  },
  // SuccessfulTransaction: {
  //   screen: SuccessfulTransactionComponent
  // },

});
export default  tranferByQRNavigator