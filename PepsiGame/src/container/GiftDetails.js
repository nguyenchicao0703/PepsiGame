import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const GiftDetails = (props) => {
  const {navigation} = props;

  const stackHome = () => {
    navigation.navigate('Home');
  }

  const stackLogOut = () => {
    navigation.navigate('Login');
  }
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

      <Pressable onPress={stackHome}>
        <Image
          style={{
            position: 'absolute',
            marginTop: 56,
            marginLeft: 20
          }}
          source={require('./../image/pattern-3/arrow-left.png')} />
      </Pressable>

      <Pressable onPress={stackLogOut}>
        <Image
          style={{
            position: 'absolute',
            right: 0,
            marginTop: 60,
            marginRight: 20
          }}
          source={require('./../image/icon-log-out.png')} />
      </Pressable>

      <Text style={styles.title}>Chi tiết quà tặng</Text>
    </LinearGradient>
  )
}

export default GiftDetails

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
})