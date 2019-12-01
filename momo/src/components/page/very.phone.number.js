import React, { Component } from 'react';
import {View, Text} from 'react-native';
import InputItem from '@ant-design/react-native/lib/input-item';
import WhiteSpace from '@ant-design/react-native/lib/white-space';
import Button from '@ant-design/react-native/lib/button';


const style = {
    flex:1,
    backgroundColor:'white',
    flexDirection:'column',
    justifyContent:'center',
};

class VeryPage extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            message:'empty',
            user: null,
            otpCode:'',
            phoneNumber:'+84 326 087 606',
            confirmResponse:null,
        }

    }

  
   
    render() {
        return (
            <View style={style}>
                
                <InputItem
                    clear
                    
                    value={this.state.otpCode}
                    onChange={(code) => {
                      this.setState({
                        otpCode:code,
                      });
                    }}
                    extra=""
                    placeholder="Code"
                    type="number"
                >
                
                </InputItem>

                <WhiteSpace/>

                <Button onPress={()=>this.props.navigation.navigate('Home')}>Login</Button>
                <WhiteSpace/>
                <Button onPress={()=>this.props.navigation.goBack()}>Back</Button>
                <WhiteSpace/>
            </View>
        );
    }
}

export default VeryPage;