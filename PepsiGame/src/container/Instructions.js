import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Instructions = (props) => {
  const { navigation } = props;

  return (
    <LinearGradient colors={['#0063A7', '#02A7F0', '#0063A7']} style={{ flex: 1 }}>
      <Image
        style={{
          position: 'absolute',
          top: 180.68,
          left: -16.03
        }}
        source={require('./../image/pattern-1/flower.png')} />
      <Image
        style={{
          position: 'absolute',
          top: 252.33,
          right: -20
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
          top: 640,
          right: -20
        }}
        source={require('./../image/pattern-1/flower.png')} />
      <Image
        style={{
          position: 'absolute'
        }}
        source={require('./../image/pattern-3/vector-1.png')} />
      <Image
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0
        }}
        source={require('./../image/pattern-1/vector-3.png')} />
      <Image
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}
        source={require('./../image/pattern-2/mask-2.png')} />
      <Pressable onPress={() => { navigation.navigate('Home') }}>
        <Image
          style={{
            position: 'absolute',
            marginTop: 56,
            marginLeft: 20
          }}
          source={require('./../image/pattern-3/arrow-left.png')} />
      </Pressable>
      <Pressable onPress={() => { navigation.navigate('Login') }}>
        <Image
          style={{
            position: 'absolute',
            right: 0,
            marginTop: 60,
            marginRight: 20
          }}
          source={require('./../image/icon-log-out.png')} />
      </Pressable>
      <Text style={styles.title}>Hướng dẫn</Text>
      <ScrollView style={{ marginTop: 30 }}>
        <Image
          style={{
            alignSelf: 'center',
          }}
          source={require('./../image/instruction/image-1.png')} />
        <Text style={styles.content_1}>Bước 1:  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius in pulvinar feugiat rutrum libero volutpat.</Text>
        <Image
          style={{
            alignSelf: 'center',
            top: 30
          }}
          source={require('./../image/instruction/image-2.png')} />
        <Text style={styles.content_2}>Bước 2:  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius in pulvinar feugiat rutrum libero volutpat.</Text>
      </ScrollView>
    </LinearGradient>
  )
}

export default Instructions

const styles = StyleSheet.create({
  title: {
    // position: 'absolute',
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'UTM Swiss 721 Black Condensed',
    fontWeight: 900,
    marginTop: 55,
  },
  content_1: {
    width: 310,
    height: 67,
    color: 'white',
    fontSize: 18,
    fontFamily: 'UTM Swiss Condensed',
    fontWeight: 400,
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: 22,
    marginTop: 16
  },
  content_2: {
    width: 310,
    height: 67,
    color: 'white',
    fontSize: 18,
    fontFamily: 'UTM Swiss Condensed',
    fontWeight: 400,
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: 22,
    marginTop: 46,
    marginBottom: 20
  }
})