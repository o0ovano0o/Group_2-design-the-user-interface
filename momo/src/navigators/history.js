import { createStackNavigator } from 'react-navigation-stack';

import HomePage from '../components/page/home.page'
import LoginPage from '../components/page/login.page';
import LoadingPage from '../components/page/loading.page';
import VeryPage from '../components/page/very.phone.number';
import AddCard from '../components/page/add.layout';
import AddCardScreen from '../components/page/add.card.screen';
import History from "../components/page/history.layout";

const historyNavigator = createStackNavigator(
  {
    history:History,
    Login: LoginPage,
    Loading: LoadingPage,
    Very: VeryPage,
    AddCard:AddCard,
    AddCardScreen:AddCardScreen,
  },
  {
   
    headerMode: 'none',
  }
);
export default historyNavigator