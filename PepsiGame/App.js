import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Relus from './src/container/Rules'
import Login from './src/container/Login'
import Register from './src/container/Register'
import VerificationOTP from './src/container/VerificationOTP'
import Home from './src/container/Home'
import Game from './src/container/Game'
import Prize from './src/container/Prize'
import Collection from './src/container/Collection'
import GiftDetails from './src/container/GiftDetails'
import Instructions from './src/container/Instructions'
import { initializeApp } from "firebase/app"

const App = () => {
  const Stack = createNativeStackNavigator()

  // Config to Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyBWjlW_rBWQHbIV25jMtlMHMmqhO48F-eI",
    authDomain: "pepsigame-24ba5.firebaseapp.com",
    databaseURL: "https://pepsigame-24ba5-default-rtdb.firebaseio.com",
    projectId: "pepsigame-24ba5",
    storageBucket: "pepsigame-24ba5.appspot.com",
    messagingSenderId: "837480536168",
    appId: "1:837480536168:web:4c55245c79cb7feb6403dd",
    measurementId: "G-11E47LQ090"
  };
  
  // Initialize Firebase
  initializeApp(firebaseConfig);
  
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Rules' component={Relus} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='VerificationOTP' component={VerificationOTP} />
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Game' component={Game} />
          <Stack.Screen name='Prize' component={Prize} />
          <Stack.Screen name='Collection' component={Collection} />
          <Stack.Screen name='GiftDetails' component={GiftDetails} />
          <Stack.Screen name='Instructions' component={Instructions} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App