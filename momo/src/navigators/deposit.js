import { createStackNavigator } from 'react-navigation-stack';
import PayScreen from "../components/deposit";
const depositNavigator= createStackNavigator({
    deposit: { screen: PayScreen ,
    
        navigationOptions:{
            headerTitle: 'Nạp tiền vào ví',
            headerTintColor:'#FFFFFF',
            headerStyle: {
              backgroundColor: '#1976d2',
              fontWeight: 'bold'
            },
    },
}
    
},
)
export default depositNavigator