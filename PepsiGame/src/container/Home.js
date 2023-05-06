import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Home = (props) => {
    const {navigation} = props;
  return (
    <LinearGradient colors={['#0063A7', '#0063A7', '#02A7F0', '#0063A7', '#0063A7']} style={{flex: 1}}>
        

        

        <Image 
            style={{
                position: 'absolute'
            }} 
            source={require('./../image/pattern_left.png')} />

    </LinearGradient>
  )
}

export default Home

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