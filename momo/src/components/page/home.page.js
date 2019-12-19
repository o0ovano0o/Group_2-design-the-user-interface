import React, { Component } from 'react';
import {Text, Button} from 'react-native';
import TabBar from '@ant-design/react-native/lib/tab-bar';
import Icon from '@ant-design/react-native/lib/icon';
import Badge from '@ant-design/react-native/lib/badge';
import LayoutHistory from './history.layout';

// import style //

export default class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTab: 'homeTab'
    };
  }

  static navigationOptions = {
    title: 'Home',
  };

  renderContent(pageText) {
    if(pageText == 'Home Tab'){
      return(
        <>
          <Text style={{fontSize:20, fontWeight:'bold'}}>Hello Mmomo</Text>
          <Button onPress={()=>this.props.navigation.navigate('AddCard')}
            title={'Thêm thẻ/Tài khoản'}></Button>
        </>
      );
    }
    else if(pageText == 'History'){
      return (
        <LayoutHistory/>
      );
    }
  }

  onChangeTab(tabName) {
    this.setState({
      selectedTab: tabName,
    });
  }


  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
      >
        <TabBar.Item
          title="Home"
          icon={<Icon  name="home" size='md' />}
          selected={this.state.selectedTab === 'homeTab'}
          onPress={() => this.onChangeTab('homeTab')}
        >
          {this.renderContent('Life Tab')}
        </TabBar.Item>

        <TabBar.Item
          icon={<Icon name='gift' size='md' />}
          title="Gift"
          badge={2}
          selected={this.state.selectedTab === 'homeTab'}
          onPress={() => this.onChangeTab('homeTab')}
        >
          {this.renderContent('Home Tab')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon name="container" size='md' />}
          title="History"
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => this.onChangeTab('greenTab')}
        >
          {this.renderContent('History')}
        </TabBar.Item>
        <TabBar.Item
          icon={<Badge dot><Icon name="account-book" size='md' /></Badge>}
          title="My Wallet"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => this.onChangeTab('yellowTab')}
        >
          {this.renderContent('My Tab')}
        </TabBar.Item>
      </TabBar>
    );
  }
}