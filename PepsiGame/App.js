import { View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppContextProvider } from './src/util/AppContext'
import AppNavigator from './src/util/AppNavigator'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppContextProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AppContextProvider>
    </View>
  )
}

export default App