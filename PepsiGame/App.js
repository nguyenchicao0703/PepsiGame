import { View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppContextProvider } from './src/util/AppContext'
import AppNavigator from './src/util/AppNavigator'

const App = () => {
  // Config to Firebase
  // const firebaseConfig = {
  //   apiKey: "AIzaSyBWjlW_rBWQHbIV25jMtlMHMmqhO48F-eI",
  //   authDomain: "pepsigame-24ba5.firebaseapp.com",
  //   databaseURL: "https://pepsigame-24ba5-default-rtdb.firebaseio.com",
  //   projectId: "pepsigame-24ba5",
  //   storageBucket: "pepsigame-24ba5.appspot.com",
  //   messagingSenderId: "837480536168",
  //   appId: "1:837480536168:web:4c55245c79cb7feb6403dd",
  //   measurementId: "G-11E47LQ090"
  // };

  // Initialize Firebase
  // initializeApp(firebaseConfig);

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