import { Image, StyleSheet, Text, View, ToastAndroid, TouchableOpacity, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import auth from '@react-native-firebase/auth'
import { AppContext } from '../util/AppContext'

const VerificationOTP = (props) => {
    const { navigation } = props;
    const [isButton, setIsButton] = useState(false);
    // If null, no SMS has been sent
    const { confirm, setConfirm } = useContext(AppContext);
    // Verification code (OTP - One-Time-Passcode)
    const [code, setCode] = useState('');
    const { mobile } = useContext(AppContext);

    // Handle confirm OTP
    const confirmCode = async () => {
        try {
            await confirm.confirm(code);
            ToastAndroid.show('Số của bạn đã được xác minh', ToastAndroid.SHORT);
            navigation.navigate('Home');
        } catch (error) {
            alert('Mã không hợp lệ.');
            console.log(error, 'Invalid code.');
        }
    }

    const resendCode = async () => {
        try {
            const phoneNumber = '+84' + mobile;
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
            if (confirmation) {
                ToastAndroid.show('Otp đã được gửi', ToastAndroid.SHORT);
                setConfirm(confirmation);
            } else {
                ToastAndroid.show('Không thể gửi lại otp...', ToastAndroid.SHORT);
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <LinearGradient colors={['#0063A7', '#02A7F0', '#0063A7']} style={{ flex: 1 }}>
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
                <OTPInputView
                    style={styles.textinputOtp}
                    pinCount={6}
                    autoFocusOnLoad
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeChanged={text => {
                        if (text.length === 6) {
                            setCode(text);
                            setIsButton(true);
                        }
                        else setIsButton(false);
                    }}
                    editable={true}
                />
            </View>
            <>
                {
                    isButton === true ? (
                        <TouchableOpacity style={styles.button} onPress={confirmCode} >
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
                <Pressable onPress={resendCode}>
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
                </Pressable>
            </View>
        </LinearGradient>
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
    },
    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    underlineStyleBase: {
        width: 44,
        height: 45,
        borderWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: 'white',
        color: 'black',
        fontSize: 18,
        fontFamily: 'UTM Swiss Condensed',
    },

    underlineStyleHighLighted: {
        borderColor: "black",
    },
    textinputOtp: {
        width: '90%',
        height: 44,
        borderRadius: 8,
        alignSelf: 'center',
        marginHorizontal: 12
    }
})