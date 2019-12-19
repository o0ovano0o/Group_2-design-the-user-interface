import * as React from 'react';
import { Text, Image, View, StyleSheet, ScrollView,Button,Alert,Input,FlatList,Item,Header,TouchableOpacity,ActivityIndicator,Dimensions,Keyboard,TouchableWithoutFeedback } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import SearchInput, { createFilter } from 'react-native-search-filter';
const KEYS_TO_FILTERS = 'title';

import file from '../assets/uudaiss.json';

export default class Discount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names:file,
       isLoading: true, text: '',isModalVisible :false, 
   }
   }
   static navigationOptions = ({navigation}) => {
   return{ title: 'Ưu đãi',
    headerStyle: {
      backgroundColor: '#385999',
    }, 
   headerRight: (
      <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => navigation.state.params.handleSave()} >
        <Icon name="search" size={28} color="white" />
      </TouchableOpacity>
    ),
    
    headerTitleStyle: {
     fontWeight: 'bold',
  },
    headerTintColor: '#fff',
  }
   };
componentDidMount() {
    this.props.navigation.setParams({ handleSave: this.onSavePress.bind(this)})
}
onSavePress() {
    this.setState({isModalVisible :!this.state.isModalVisible});
    if(this.state.isModalVisible==true){
      this.setState({text:''});
    }
}
    searchUpdated(term) {
    this.setState({ text: term });
  }
   ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          backgroundColor: '#080808',
        }}
      />
    );
  };
  
    doIt = (item) => {
    this.props.navigation.navigate('Info', { ...item });  // <--- set data when user clicks button.
  }
  render() {
    const filternames = this.state.names.filter(createFilter(this.state.text, KEYS_TO_FILTERS));
     const {navigate} = this.props.navigation;
    return (
<TouchableWithoutFeedback onPress={()=>{this.setState({isModalVisible :false,text:''});Keyboard.dismiss;}}>
      <View style={styles.container}> 
         {this.state.isModalVisible && 
      <SearchBar
              lightTheme round
              containerStyle={{backgroundColor: '#385999',margin:0,padding:5,borderColor:'white'}}
              inputStyle={{margin: 0}}
              inputContainerStyle={{height:25,margin:5,borderColor:'white',backgroundColor:'white'}} 
              style={{borderColor:'white'}}
              placeholder="Tìm kiếm"
              onChangeText={text => this.searchUpdated(text)}
              autoCorrect={false} 
              cancelButtonText = "Cancel"
              value={this.state.text} />}
         
            <ScrollView>
               { filternames.map((item, index) => (
                    <TouchableOpacity
                                style={styles.button}
                                 onPress={() => this.doIt(item)}
                              >
                     <View elevation={10}  key = {item.id} style = {styles.item}>
                     <Image
                        style={{height:70,width:110,margin: 4,borderRadius:10}}
                        source={{uri: 'https://i.imgur.com/n6xEg5Z.png'}} 
                      />
                      <View style={{  flexDirection: 'column',justifyContent: 'center', alignItems: 'center',flex:1}}>
                      <View style={{flex:1,alignItems: 'center',justifyContent:'center',flexDirection:'row'}}>
                        <Text numberOfLines={3} style={{alignItems: 'center', flexGrow: 1, fontSize: 19, padding:6,justifyContent:'center'}}>{item.title}</Text>
                      </View>
                      </View>
                      </View>
                        </TouchableOpacity>))
               }
            </ScrollView>
        </View>
        </TouchableWithoutFeedback>
    );
  }
  searchud(text){
     const newData = this.state.names.filter(item => {      
    const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;    
    });    
    this.setState({ filternames: newData,text:text }); 
    }
}


const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
   flex:1,
   flexDirection: 'column',
   backgroundColor:'#ededed'
  },

   item: {
     backgroundColor: 'white',
      alignItems: 'center',
      borderColor: '#385999',
      flex:1,
      borderWidth: 2,
      borderRadius: 15,
      left: 18,
      fontSize:20,
      top: 25,
      flexDirection:'row',
      marginBottom: 4,
      marginRight:10,
      minHeight:90,
       width: '90%',
      shadowColor: "#385999",
      shadowOffset: {
        width: 1,
        height: 5,
      },
      shadowOpacity: 0.44,
      shadowRadius: 6.27,

   },
   button: {
     padding: 4,
     margin:4,
     bottom:0,
     right:0,     
   }
});
