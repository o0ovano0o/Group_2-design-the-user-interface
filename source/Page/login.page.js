import React, { Component } from 'react';
import {View} from 'react-native';
import InputItem from '@ant-design/react-native/lib/input-item';
import WhiteSpace from '@ant-design/react-native/lib/white-space';
import Button from '@ant-design/react-native/lib/button';



const style = {
    flex:1,
    backgroundColor:'white',
    flexDirection:'column',
    justifyContent:'center',
};

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            phone: '',
            password:''
        }
    }

    render() {
        return (
            <View style={style}>
                
                <InputItem
                    clear
                    
                    value={this.state.phone}
                    onChange={(phone: any) => {
                      this.setState({
                        phone,
                      });
                    }}
                    extra=""
                    placeholder="Phone number"
                    type="phone"
                    maxLength={12}
                >
                
                </InputItem>
                <WhiteSpace/>

                <Button onPress={()=>this.props.navigation.navigate('Very')}>Login</Button>
                
                <WhiteSpace/>
            </View>
        );
    }
}

export default LoginPage;