
import React, { Component } from "react";

import {

 
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Dimensions } from "react-native";
import { Camera } from 'expo-camera'
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { FontAwesome, Ionicons, MaterialCommunityIcons ,AntDesign} from '@expo/vector-icons';

import { Container, Text, View } from "native-base";
import { Grid, Row } from "react-native-easy-grid";

class CameraComponent extends Component {
    static navigationOptions = {
        title: 'Quét mã QR',
        headerStyle: {
            backgroundColor:  '#385999',
      
        },
        headerTintColor: '#fff',
      }
  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  render() {
  
    const { hasCameraPermission, scanned } = this.state;
    const { navigate } = this.props.navigation;
    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
      <Container>
        <Camera
        barCodeScannerSettings={{
          barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
        }}
          onBarCodeScanned={this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        >
          <Grid>
            <Row style={styles.layerTop} size={1} />
            <Row style={styles.layerCenter} size={2}>
              {/* <View style={styles.layerCenter}> */}
              <View style={styles.layerLeft} />
              <View style={styles.focused} />
              <View style={styles.layerRight} />
              {/* </View> */}
            </Row>
            <Row style={styles.layerBottom} size={1}>
              
             
            </Row>
          </Grid>
        </Camera>
      </Container>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    try {
      data= JSON.parse(data)
     if(data.phone!=undefined && data.name!=undefined){
      const { navigate } = this.props.navigation;
      navigate('InputMoney',{
        data:data
      })
     }
    } catch (error) {
      
    }
    
    
  };
}
export default CameraComponent;
// const { width } = Dimensions.get('window')
// const qrSize = width * 0.7

// const opacity = 'rgba(0, 0, 0, .6)';
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
  
//     backgroundColor: 'red',
//   },
  
// });
const opacity = "rgba(0, 0, 0, .6)";
const styles = StyleSheet.create({
  barcodeScanner: {
    flex: 1,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    justifyContent: "flex-end"
  },
  layerTop: { backgroundColor: opacity },
  layerCenter: {
    flex: 1.4,
    flexDirection: "row"
  },
  layerLeft: {
    flex: 6,
    backgroundColor: opacity
  },
  focused: {
    flex: 30
  },
  layerRight: {
    flex: 6,
    backgroundColor: opacity
  },
  layerBottom: {
    alignItems: "flex-end",

    backgroundColor: opacity,
    justifyContent: "center"
  },
  bottomButtons: {
    marginBottom: 40
  }
});