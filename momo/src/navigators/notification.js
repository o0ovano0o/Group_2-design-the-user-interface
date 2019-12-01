import ListNotification from '../components/notification/listNotification';
import Notification from '../components/notification/notification';
import { createStackNavigator } from "react-navigation-stack";
const NotificationNavigator = createStackNavigator({
    ListNotification:{
     screen:ListNotification
    },
    Notification:{
      screen:Notification
     }
  });
export default  NotificationNavigator