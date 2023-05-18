import React from 'react'
import Rules from '../container/Rules'
import Login from '../container/Login'
import Register from '../container/Register'
import VerificationOTP from '../container/VerificationOTP'
import Home from '../container/Home'
import Game from '../container/Game'
import Prize from '../container/Prize'
import Collection from '../container/Collection'
import GiftDetails from '../container/GiftDetails'
import Instructions from '../container/Instructions'
import Test from '../container/Test'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Rules' component={Rules} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='VerificationOTP' component={VerificationOTP} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Game' component={Game} />
        <Stack.Screen name='Prize' component={Prize} />
        <Stack.Screen name='Collection' component={Collection} />
        <Stack.Screen name='GiftDetails' component={GiftDetails} />
        <Stack.Screen name='Instructions' component={Instructions} />
        <Stack.Screen name='Test' component={Test} />
      </Stack.Navigator>
    </>
  )
}

export default AppNavigator