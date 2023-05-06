import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'

const VerificationOTP = (props) => {
    const {navigation} = props;
    const [isButtonOTP, setisButtonOTP] = useState(false);
    const button = (text) => {
        var input = text.length;
        if(input.length === 0) {
            setisButtonOTP = true;
        } else {
            setisButtonOTP == false;
        }
    }

    const stackVer = () => {
        navigation.navigate('Home');
    }
  return (
    <View style={{flex: 1, backgroundColor: '#0063A7'}}>
        <Image 
            style={{
                position: 'absolute',
                top: 180,
                left: -16.03
            }} 
            source={require('./../image/pattern-1/flower.png')} />

        <Image 
            style={{
                position: 'absolute',
                top: 504.23,
                left: 0.55
            }} 
            source={require('./../image/pattern-1/flower.png')} />

        <Image 
            style={{
                position: 'absolute',
                top: 452,
                left: 336.15
            }} 
            source={require('./../image/pattern-1/flower.png')} />
            
        <Image 
            style={{
                position: 'absolute', 
                alignSelf: 'flex-end',
                marginTop: 53.78
            }} 
            source={require('./../image/pattern-1/s-2.png')} />

        <Image 
            style={{
                position: 'absolute',
                top: 629.51
            }} 
            source={require('./../image/pattern-1/s-1.png')} />

        <Image 
            style={{
                position: 'absolute'
            }} 
            source={require('./../image/pattern-1/vector-1.png')} />

        <Image 
            style={{
                position: 'absolute', 
                alignSelf: 'flex-end'
            }} 
            source={require('./../image/pattern-1/vector-2.png')} />

        <Image 
            style={{
                position: 'absolute', 
                alignSelf: 'flex-end',
                top: 600
            }} 
            source={require('./../image/pattern-1/vector-3.png')} />

        <Text 
            style={{
                fontSize: 18, 
                textAlign: 'center',
                marginTop: 121,
                color: 'white',
                fontFamily: 'UTM Swiss Condensed',
                fontWeight: 400
            }}>
            Hey, mừng bạn đến với
        </Text>

        <Text 
            style={{
                fontSize: 30,
                color: 'white',
                fontFamily: 'UTM Swiss 721 Black Condensed',
                textAlign: 'center',
                marginTop: 8,
                fontWeight: 900
            }}>
            PEPSI Tết
        </Text>

        <Text 
            style={{
                color: 'white',
                fontSize: 22,
                fontWeight: 900,
                fontFamily: 'UTM Swiss 721 Black Condensed',
                marginTop: 105,
                textAlign: 'center'
            }}>
            Xác minh OTP
        </Text>

        <Text 
            style={{
                color: 'white',
                fontSize: 14,
                fontWeight: 400,
                fontFamily: 'UTM Swiss Condensed',
                marginTop: 8,
                textAlign: 'center'
            }}>
            Nhập mã OTP vừa được gửi về điện thoại của bạn
        </Text>

        <View style={styles.view_textInput_otp} >
            <TextInput 
                onChangeText={(text) => button(text)}
                style={styles.textInput}
                placeholder='-'
                placeholderTextColor="#8e8e8e"
                keyboardType='numeric'
                 />
                
            <TextInput 
                style={styles.textInput}
                placeholder='-'
                placeholderTextColor="#8e8e8e"
                keyboardType='numeric'
                 />

            <TextInput 
                style={styles.textInput}
                placeholder='-'
                placeholderTextColor="#8e8e8e"
                keyboardType='numeric'
                 />

            <TextInput 
                style={styles.textInput}
                placeholder='-'
                placeholderTextColor="#8e8e8e"
                keyboardType='numeric'
                 />
        </View>

        <>
            {
                isButtonOTP == false ? (
                    <TouchableOpacity style={styles.button} onPress={stackVer} >
                        <Image source={require('./../image/pattern-1/button-confirm-show.png')} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.button} >
                        <Image source={require('./../image/pattern-1/button-confirm-hide.png')} />
                    </TouchableOpacity>
                )
            }
        </>

        <View style={styles.view_resend_code}>
            <Text
                style={{
                    color: 'white',
                    fontSize: 14,
                    fontWeight: 400,
                    fontFamily: 'UTM Swiss Condensed',
                }}>
                Bạn chưa nhận được mã?
            </Text>

            <Text
                style={{
                    color: '#FFDD00',
                    fontSize: 14,
                    fontWeight: 400,
                    fontFamily: 'UTM Swiss Condensed',
                    marginLeft: 4
                }}>
                Gửi lại mã
            </Text>
        </View>
    </View>
  )
}

export default VerificationOTP

const styles = StyleSheet.create({
    view_textInput_otp: {
        flexDirection: 'row', 
        alignSelf: 'center',
        marginVertical: 32
    },
    textInput: {
        width: 44,
        height: 44,
        backgroundColor: 'white',
        borderRadius: 8,
        alignSelf: 'center',
        color: '#2D2D2D',
        fontSize: 18,
        fontFamily: 'UTM Swiss Condensed',
        textAlign: 'center',
        marginHorizontal: 12
    },
    button: {
        alignSelf: 'center',
    },
    view_resend_code: {
        flexDirection: 'row',
        marginTop: 16,
        alignSelf: 'center',
    }
})