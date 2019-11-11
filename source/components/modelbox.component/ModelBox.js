import React from 'react';
import Modal from 'react-native-modalbox';
import {Button} from '@shoutem/ui';

import {
    Text,
    StyleSheet,
    View
} from 'react-native';


class ModelBox extends React.Component {

  constructor() {
    super();
    this.state = {
      isOpen: false,
      isDisabled: false,
      swipeToClose: true,
      sliderValue: 0.3,
    };
  }

  onClose() {
    console.log('Modal just closed');
  }

  onOpen() {
    console.log('Modal just opened');
  }

  onClosingState(state) {
    console.log('the open/close of the swipeToClose just changed');
  }

  componentDidMount(){
    this.props.setModelBox(this.refs.modal1);
  }

  render() {
    
    return (
      <View style={styles.wrapper}>
       
        <Modal
          style={styles.modal}
          ref={"modal1"}
          swipeToClose={this.state.swipeToClose}
          onClosed={this.onClose}
          onOpened={this.onOpen}
          onClosingState={this.onClosingState}>
            <Text style={styles.text}>Basic modal</Text>
            <Button onPress={() => this.setState({swipeToClose: !this.state.swipeToClose})} 
                    style={styles.btn}>
                <Text>Disable swipeToClose({this.state.swipeToClose ? "true" : "false"})</Text>
            </Button>
        </Modal>

      </View>
    );
  }

}

const styles = StyleSheet.create({

  wrapper: {
    flex: 1,
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },

  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    color: "black",
    fontSize: 22
  }

});

export default ModelBox;