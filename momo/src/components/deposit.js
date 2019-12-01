import React from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import {Button, Dialog} from 'react-native-paper';

import {ListItem} from 'react-native-material-ui';
import {Input} from 'react-native-elements';

class PayScreen extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.submitPay = this.submitPay.bind(this);
        this.onClose = this.onClose.bind(this);
        this.state = {
            money: '',
            OTP: '',
            isConfirm: false,
            bankList: [
                'Vietcombank',
                'Techcombank',
                'VPBank',
                'TPBank',
                'Bắc Á Bank',
                'BIDV',
                'ABC',
                'VIB',
            ],
            bankName: ''
        };
    }

    onChange(value, name) {
        this.setState({[name]: value});
    }

    submitPay() {
        if (!this.state.bankName) {
            return Alert.alert('Bạn chưa chọn ngân hàng');
        }
        if (!this.state.money) {
            return Alert.alert('Bạn chưa nhập tiền');
        }
        if (!this.state.OTP) {
            return Alert.alert('Bạn chưa nhập mã OTP');
        }
        this.setState({isConfirm: true});
    }

    onClose() {
        this.setState({isConfirm: false, money: ''});
        this.props.navigation.navigate('Home', {money: this.state.money});
    }

    render() {

        return (
            <View style={{flex: 1}}>
                <View style={{
                    flex: 4,
                    backgroundColor: 'white',
                }}>
                    <ScrollView>
                        {this.state.bankList.map((name, index) => {
                            return <ListItem
                                key={index}
                                divider
                                style={{
                                    container:{
                                        backgroundColor: '#DFDBDB',
                                    },
                                    primaryText:{color: name === this.state.bankName ? '#4fc3f7' : 'black'}
                                }}
                                centerElement={{
                                    primaryText: name,
                                }}
                                onPress={() => this.setState({bankName: name})}
                            />;
                        })}

                    </ScrollView>

                </View>
                <View style={styles.form}>
                    <Text style={{marginLeft:15, fontSize:18}}>Nguồn tiền: {this.state.bankName}</Text>
                    <Input
                        value={this.state.money}
                        keyboardType='numeric'
                        onChangeText={(value) => this.onChange(value, 'money')}
                        mode={'outlined'}
                        placeholder='Nhập số tiền'
                        style={styles.customInput}

                    />
                    <Input
                        value={this.state.OTP}
                        keyboardType='numeric'
                        onChangeText={(value) => this.onChange(value, 'OTP')}
                        mode={'outlined'}
                        placeholder='Nhập số OTP ngân hàng'
                        style={styles.customInput}
                    />
                </View>
                <View style={styles.wrapButton}>
                    <Button
                        mode="contained"
                        onPress={this.submitPay}
                        style={styles.customButton}
                        color="#1976d2"
                    >
                        Xác nhận
                    </Button>
                </View>
                <Dialog
                    visible={this.state.isConfirm}
                    onDismiss={this.onClose}
                >
                    <Dialog.Title>Thông báo</Dialog.Title>
                    <Dialog.Content>
                        <Text>Bạn đã nạp thành công {this.state.money} vào tài khoản</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={this.onClose}>Ok</Button>
                    </Dialog.Actions>
                </Dialog>
            </View>
        );
    }

};


const styles = StyleSheet.create({
    form: {
        flex: 4,
        alignContent: 'flex-end',
        justifyContent: 'flex-end',
    },
    wrapButton: {
        flex: 2,
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '100%',
    },
    customButton: {
        width: '40%',
        marginLeft: '30%',
        alignContent: 'center',
        justifyContent: 'center',
        color:'red'
    },
    customInput: {
        width: '70%',
        height: 40,
        marginLeft: '15%',
        marginBottom: 20,
    },
});

export default PayScreen;
