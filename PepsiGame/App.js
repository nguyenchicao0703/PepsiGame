import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './src/container/Login'
import Register from './src/container/Register'
import VerificationOTP from './src/container/VerificationOTP'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Register' component={Register} />
          <Stack.Screen name='VerificationOTP' component={VerificationOTP} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App