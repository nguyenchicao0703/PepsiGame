import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import LinearGradient from 'react-native-linear-gradient'

const Login = (props) => {
    const {navigation} = props;
    const [isButtonOTP, setisButtonOTP] = useState('');
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const stackLogin = () => {
        navigation.navigate('Login');
    }
    const stackVerOTP = () => {
        navigation.navigate('VerificationOTP');
    }
  return (
    <LinearGradient colors={['#0063A7', '#0063A7', '#02A7F0', '#0063A7', '#0063A7']} style={{flex: 1}}>
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
            source={require('./../image/s_right.png')} />

        <Image 
            style={{
                position: 'absolute',
                top: 629.51
            }} 
            source={require('./../image/s-1.png')} />

        <Image 
            style={{
                position: 'absolute'
            }} 
            source={require('./../image/pattern-1/vector-1.png.png')} />

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
        }}>ĐĂNG KÝ</Text>

        <TextInput 
            style={styles.textInput}
            placeholder='Số điện thoại'
            placeholderTextColor="#8e8e8e"
            keyboardType='numeric'
            onChangeText={() => setisButtonOTP(!isButtonOTP)} />

        <TextInput 
            style={styles.textInput}
            placeholder='Tên người dùng'
            placeholderTextColor="#8e8e8e"
            onChangeText={() => setisButtonOTP(!isButtonOTP)} />
        
        <View style={styles.viewCheckBox}>
            <CheckBox
                style={styles.checkbox}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />

            <Text style={styles.label}>Tôi đã đọc và đồng ý với <Text style={{color: '#FFDD00', fontWeight: 900, fontSize: 14, fontFamily: 'UTM Swiss 721 Black Condensed'}}>thể lệ chương trình</Text> Pepsi Tết.</Text>
        </View>
        
        <>
            {
                isButtonOTP ? (
                    <TouchableOpacity style={styles.button} onPress={stackVerOTP}>
                        <Image source={require('./../image/pattern-1/button-otp-show.png')} />
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.button} >
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

        <TouchableOpacity style={styles.button} onPress={stackLogin}>
            <Image source={require('./../image/pattern-1/button_login.png')} />
        </TouchableOpacity>
    </LinearGradient>
  )
}

export default Login

const styles = StyleSheet.create({
    textInput: {
        width: 335,
        height: 44,
        backgroundColor: 'white',
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: 20,
        paddingTop: 9,
        paddingHorizontal: 12,
        paddingBottom: 11,
        color: '#2D2D2D',
        fontSize: 14,
        fontFamily: 'UTM Swiss Condensed',
    },
    button: {
        alignSelf: 'center',
        
    },
    viewCheckBox: {
        flexDirection: 'row',
        marginLeft: 20,
        marginTop: 12
    },
    label: {
        fontSize: 14,
        color: 'white',
        fontWeight: 400,
        fontFamily: 'UTM Swiss Condensed',
        marginTop: 5,
        marginBottom: 127.32
    }
})