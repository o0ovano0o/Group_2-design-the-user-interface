import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomePage from './components/Page/home.page';
import LoginPage from './components/Page/login.page';
import LoadingPage from './components/Page/loading.page';
import VeryPage from './components/Page/very.phone.number';
import AddCard from './components/Page/add.layout';


const AppNavigator = createStackNavigator(
  {
    Home: HomePage,
    Login: LoginPage,
    Loading: LoadingPage,
    Very: VeryPage,
    AddCard:AddCard
  },
  {
    initialRouteName: 'Very',
    headerMode: 'none',
  }
);



const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;

  }
}


