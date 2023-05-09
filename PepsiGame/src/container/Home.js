import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const Home = (props) => {
    const {navigation} = props;

    const stackBackLogin = () => {
        navigation.navigate('Login');
    }

    const stackPlayNow = () => {
        navigation.navigate('Game');
    }
  return (
    <LinearGradient colors={['#0063A7', '#0063A7', '#02A7F0', '#0063A7', '#0063A7']} style={{flex: 1}}>
        <Image
            style={{
                position: 'absolute',
                top: 0,
                left: 0
            }} 
            source={require('./../image/pattern-2/vector-1.png')} />
        
        <Image
            style={{
                position: 'absolute',
                top: 130,
                left: 0
            }} 
            source={require('./../image/pattern-2/mask-1.png')} />

        <Image
            style={{
                position: 'absolute',
                top: 0,
                left: 0
            }} 
            source={require('./../image/pattern-2/flower-1.png')} />
        <Image
            style={{
                position: 'absolute',
                top: 0,
                left: 90
            }} 
            source={require('./../image/pattern-2/vector-2.png')} />
        <Image
            style={{
                position: 'absolute',
                top: 74.91,
                left: 91.8
            }} 
            source={require('./../image/pattern-2/flower-2.png')} />

        <Image
            style={{
                position: 'absolute',
                top: 6.29,
                left: 200,
            }} 
            source={require('./../image/pattern-2/flower-3.png')} />

        <Image
            style={{
                position: 'absolute',
                top: 0,
                right: 0,
            }} 
            source={require('./../image/pattern-2/mask-2.png')} />
        
        <TouchableOpacity onPress={stackBackLogin}>
            <Image
                style={{
                    position: 'absolute',
                    right: 0,
                    marginTop: 60,
                    marginRight: 20
                }} 
                source={require('./../image/icon-log-out.png')} />
        </TouchableOpacity>
        

        <Image
            style={{
                position: 'absolute',
                top: 110,
                right: 0
            }} 
            source={require('./../image/pattern-2/vector-3.png')} />

        <Image
            style={{
                position: 'absolute',
                top: 140.5,
                right: 0
            }} 
            source={require('./../image/pattern-2/mask-3.png')} />
        
        <Image
            style={{
                position: 'absolute',
                top: 393.92,
                left: -2.77
            }} 
            source={require('./../image/pattern-2/flower-4.png')} />

        <Image
            style={{
                position: 'absolute',
                top: 550.2,
                left: -39.54,
                width: 77.93,
                height: 75.46
            }} 
            source={require('./../image/pattern-2/flower-4.png')} />

        <Image
            style={{
                position: 'absolute',
                top: 386,
                right: 0
            }} 
            source={require('./../image/pattern-2/smart.png')} />

        <Image
            style={{
                position: 'absolute',
                bottom: 0,
                width: '100%'
            }} 
            source={require('./../image/pattern-2/vector-4.png')} />

        <Image
            style={{
                position: 'absolute',
                bottom: 0,
                alignSelf: 'center'
            }} 
            source={require('./../image/pattern-2/drum.png')} />

        <Image
            style={{
                alignSelf: 'center',
                marginTop: 192.36
            }} 
            source={require('./../image/unicorn.png')} />

        <Text style={styles.text}>Hướng dẫn</Text>

        <TouchableOpacity style={styles.button} onPress={stackPlayNow}>
            <Image source={require('./../image/pattern-2/button-play-now.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Image source={require('./../image/pattern-2/button-scan-code.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Image source={require('./../image/pattern-2/button-collection.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
            <Image source={require('./../image/pattern-2/button-gift-details.png')} />
        </TouchableOpacity>

    </LinearGradient>
  )
}

export default Home

const styles = StyleSheet.create({
    text: {
        color: '#FFDD00',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'UTM Swiss 721 Black Condensed',
        marginTop: 11.13,
        fontWeight: 900
    },
    button: {
        alignSelf: 'center'
    }
})