import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import *as Font from "expo-font";
import RootNavigator from './src/navigators/root';





const styles = StyleSheet.create({
  slideDefault: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
const AppContainer = createAppContainer(RootNavigator);
 export class App extends React.Component {
  
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('./node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require("./node_modules/native-base/Fonts/Roboto_medium.ttf"),
      // Arial: require("./node_modules/native-base/Fonts/Arial.ttf"),
      antoutline:require('@ant-design/icons-react-native/fonts/antoutline.ttf')
    });
  }
  constructor() {
    super()
    this.state = {
      outerScrollEnabled: true
    }
  }

  render() {
    
    return (
      <AppContainer/>
        
     
        
      
    );
  }
}



export default  App