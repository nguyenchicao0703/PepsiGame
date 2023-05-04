import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'

const Login = (props) => {
    const {navigation} = props;
    const [isButtonOTP, setisButtonOTP] = useState('');

    const stackVerOTP = () => {
        navigation.navigate('VerificationOTP')
    }

    const stackRegister = () => {
        navigation.navigate('Register')
    }
  return (
    <View style={{flex: 1, backgroundColor: '#0063A7'}}>
        <Image 
            style={{
                position: 'absolute',
                top: 180,
                left: -16.03
            }} 
            source={require('./../image/flower_full.png')} />

        <Image 
            style={{
                position: 'absolute',
                top: 504.23,
                left: 0.55
            }} 
            source={require('./../image/flower_full.png')} />

        <Image 
            style={{
                position: 'absolute',
                top: 452,
                left: 336.15
            }} 
            source={require('./../image/flower_full.png')} />
            
        <Image 
            style={{
                position: 'absolute', 
                alignSelf: 'flex-end',
                marginTop: 53.78
            }} 
            source={require('./../image/s_right.png')} />

        <Image 
            style={{
                position: 'absolute',
                top: 629.51
            }} 
            source={require('./../image/s_left.png')} />

        <Image 
            style={{
                position: 'absolute'
            }} 
            source={require('./../image/pattern_left.png')} />

        <Image 
            style={{
                position: 'absolute', 
                alignSelf: 'flex-end'
            }} 
            source={require('./../image/pattern_right.png')} />

        <Image 
            style={{
                position: 'absolute', 
                alignSelf: 'flex-end',
                top: 600
            }} 
            source={require('./../image/pattern_bottom_right.png')} />

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
            onChangeText={() => setisButtonOTP(!isButtonOTP)} />

        <Image 
            style={styles.image_3lon1}
            source={require('./../image/3lon1.png')} />

        <>
            {
                isButtonOTP ? (
                    <TouchableOpacity style={styles.button} onPress={stackVerOTP}>
                        <Image source={require('./../image/button_OTP_show.png')} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.button}>
                        <Image source={require('./../image/button_OTP_hide.png')} />
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
            <Image source={require('./../image/button_resgister.png')} />
        </TouchableOpacity>
    </View>
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