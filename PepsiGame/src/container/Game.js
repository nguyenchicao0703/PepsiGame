import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Game = () => {
  return (
    <LinearGradient colors={['#0063A7', '#02A7F0', '#0063A7']} style={{flex: 1}}>
        <Image 
            style={{
                position: 'absolute',
                top: 153,
                right: -20,
                width: 58.43,
                height: 56.57
            }} 
            source={require('./../image/pattern-3/flower.png')} />

        <Image 
            style={{
                position: 'absolute',
                top: 485,
                left: 7
            }} 
            source={require('./../image/pattern-3/flower.png')} />

        <Image 
            style={{
                position: 'absolute',
                top: 543,
                right: -15,
                width: 44.39,
                height: 42.98
            }} 
            source={require('./../image/pattern-3/flower.png')} />

        <Image 
            style={{
                position: 'absolute'
            }} 
            source={require('./../image/pattern-3/vector-1.png')} />

        <Image 
            style={{
                position: 'absolute',
                top: 0,
                right: 0,
            }} 
            source={require('./../image/pattern-2/mask-2.png')} />

        <Pressable>
            <Image
                style={{
                    position: 'absolute',
                    marginTop: 56,
                    marginLeft: 20
                }}
                source={require('./../image/pattern-3/arrow-left.png')} />
        </Pressable>

        <Pressable>
            <Image
                style={{
                    position: 'absolute',
                    right: 0,
                    marginTop: 60,
                    marginRight: 20
                }}
                source={require('./../image/icon-log-out.png')} />
        </Pressable>

        <Image
            style={{
                position: 'absolute',
                bottom: 0,
                width: '100%'
            }}
            source={require('./../image/pattern-3/vector-2.png')} />

        <Text style={styles.title}>VUỐT LÊN ĐỂ CHƠI</Text>

        <Text style={styles.number_of_plays}>Bạn còn <Text style={{color: '#FFDD00', fontSize: 18, fontWeight: 900, fontFamily: 'UTM Swiss 721 Black Condensed'}}>3</Text> lượt chơi miễn phí</Text>

        <Image
            style={{
                width: 409,
                marginTop: 6,
                alignSelf: 'center'
            }} 
            source={require('./../image/pattern-3/bg-game.png')} />

        <Image
            style={{
                position: 'absolute',
                alignSelf: 'center',
                top: 587
                // bottom: 0
            }} 
            source={require('./../image/pattern-3/upper-arrow.png')} />

        <Image
            style={{
                position: 'absolute',
                alignSelf: 'center',
                bottom: '-7.37%'
            }} 
            source={require('./../image/unicorn.png')} />
    </LinearGradient>
  )
}

export default Game

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'UTM Swiss 721 Black Condensed',
        fontWeight: 900,
        marginTop: 55
    },
    number_of_plays: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'UTM Swiss Condensed',
        fontWeight: 400,
        textAlign: 'center',
        marginTop: 4
    }
})