import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'


const Prize = () => {
  return (
    <LinearGradient colors={['#0063A7', '#02A7F0', '#0063A7']} style={{flex: 1}}>
      <Image 
            style={{
                position: 'absolute',
                top: 138.23,
                right: -60,
                width: 140.01,
                height: 135.55
            }} 
            source={require('./../image/pattern-3/flower.png')} />

        <Image 
            style={{
                position: 'absolute',
                top: 416,
                left: -20,
                width: 57.73,
                height: 55.9
            }} 
            source={require('./../image/pattern-3/flower.png')} />

        <Image 
            style={{
                position: 'absolute',
                top: 480,
                right: -35,
                width: 90.51,
                height: 87.63
            }} 
            source={require('./../image/pattern-3/flower.png')} />

        <Image 
            style={{
                position: 'absolute',
                top: 0,
                right: 0,
            }} 
            source={require('./../image/pattern-2/mask-2.png')} />

        <Image 
            style={{
                position: 'absolute'
            }} 
            source={require('./../image/pattern-3/vector-1.png')} />

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
    </LinearGradient>
  )
}

export default Prize

const styles = StyleSheet.create({})