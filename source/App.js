import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from './Page/home.page';
import LoginPage from './Page/login.page';
import LoadingPage from './Page/loading.page';
import VeryPage from './Page/very.phone.number';
import AddCard from './Page/add.layout';
import AddCardScreen from './Page/add.card.screen';


const AppNavigator = createStackNavigator(
  {
    Home: HomePage,
    Login: LoginPage,
    Loading: LoadingPage,
    Very: VeryPage,
    AddCard:AddCard,
    AddCardScreen:AddCardScreen,
  },
  {
    initialRouteName: 'AddCardScreen',
    headerMode: 'none',
  }
);



const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}


