import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable } from 'react-native'
import React, {useState} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'


const LogOutModal = (props) => {
    const navigation = useNavigation();

    const stackLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <LinearGradient colors={['#FCD54E', '#FDEA95', '#FBD239']} style={{ width: 202, height: 160, borderRadius: 10, alignSelf: 'center', marginTop: '50%' }}>
            <Text style={styles.text}>Bạn có chắc chắn muốn <Text style={{ fontWeight: 900 }}>đăng xuất</Text> không?</Text>
            <Pressable onPress={stackLogin}>
                <Image
                    style={styles.button}
                    source={require('./../../image/popupLogout/button-logout.png')} />
            </Pressable>
            <Pressable>
                <Image
                    style={styles.button}
                    source={require('./../../image/popupLogout/button-cancel.png')} />
            </Pressable>
        </LinearGradient>
    )
}

export default LogOutModal

const styles = StyleSheet.create({
    text: {
        color: '#0063A7',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'UTM Swiss Condensed',
        fontWeight: 400,
        marginVertical: 16
    },
    button: {
        top: -5,
        alignSelf: 'center'
    }
})