import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Relus from './src/container/Rules'
import Login from './src/container/Login'
import Register from './src/container/Register'
import VerificationOTP from './src/container/VerificationOTP'
import Home from './src/container/Home'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Rules' component={Relus} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='VerificationOTP' component={VerificationOTP} />
          <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App