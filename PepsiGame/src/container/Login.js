import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import auth from '@react-native-firebase/auth';

const Login = (props) => {
    const {navigation} = props;
    const [isButtonOTP, setisButtonOTP] = useState('');
    const [isMobile, setisMobile] = useState('');

    const stackVerOTP = () => { 
        navigation.navigate('VerificationOTP')
    }

    const stackRegister = () => {
        navigation.navigate('Register')
    }

  return (
    <LinearGradient colors={['#0063A7', '#02A7F0', '#0063A7']} style={{flex: 1}}>
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

        <Text style={{
            fontSize: 24,
            color: 'white',
            fontFamily: 'UTM Swiss 721 Black Condensed',
            textAlign: 'center',
            marginTop: 60,
            fontWeight: 900
        }}>ĐĂNG NHẬP</Text>

        <Text 
            style={{
                fontSize: 14,
                color: 'white',
                fontFamily: 'UTM Swiss 721 Black Condensed',
                marginTop: 12,
                marginLeft: 20,
                fontWeight: 900
            }}>
            Số điện thoại
        </Text>

        <TextInput 
            style={styles.textInput_phoneNumber}
            placeholder='Nhập số điện thoại'
            placeholderTextColor="#8e8e8e"
            keyboardType='numeric'
            value={isMobile}
            onChangeText={() => setisButtonOTP(!isButtonOTP)}
            // onChangeText={txt => {
            //     setisMobile(txt);
            // }} 
            />

        <Image 
            style={styles.image_3lon1}
            source={require('./../image/3lon1.png')} />

        <>
            {
                isButtonOTP ? (
                    <TouchableOpacity style={styles.button} onPress={stackVerOTP}>
                        <Image source={require('./../image/pattern-1/button-otp-show.png')} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('./../image/pattern-1/button-otp-hide.png')} />
                    </TouchableOpacity>
                )
            }
        </>

        <Text 
            style={{
                color: 'white',
                fontSize: 16,
                fontWeight: 400,
                fontFamily: 'UTM Swiss Condensed',
                textAlign: 'center',
                marginVertical: 12
            }}>
            Hoặc
        </Text>

        <TouchableOpacity style={styles.button} onPress={stackRegister}>
            <Image source={require('./../image/pattern-1/button-resgister.png')} />
        </TouchableOpacity>
    </LinearGradient>
  )
}

export default Login

const styles = StyleSheet.create({
    textInput_phoneNumber: {
        width: 350,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: 8,
        paddingTop: 9,
        paddingHorizontal: 12,
        paddingBottom: 11,
        color: '#2D2D2D',
        fontSize: 14,
        fontFamily: 'UTM Swiss Condensed',
    },
    image_3lon1: {
        alignSelf: 'center',
        marginVertical: 22
    },
    button: {
        alignSelf: 'center',
    }
})