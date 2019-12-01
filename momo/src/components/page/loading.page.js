import React, { Component } from 'react';
import {
    View
} from 'react-native';
import ActivityIndicator from '@ant-design/react-native/lib/activity-indicator';

const loadingStyle = {
    flex:1,
    flexDirection: 'column',
    justifyContent:'center'
};

class LoadingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: null
        }
        this.show = false;
    }

    componentDidMount(){


        // Giả lập loading user
        if(this.state.user){
            this.props.navigation.navigate('Home');
        }
        else{

            setTimeout(()=>{
                this.props.navigation.navigate('Login');
            },200);
        }
        
    }

    render() {
        return (
            <View style={loadingStyle}>
               <ActivityIndicator color="aqua" size="large" text="loading" />
                
            </View>
        );
    }
}

export default LoadingPage;