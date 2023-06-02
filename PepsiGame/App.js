import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { AppContext, AppContextProvider } from './src/util/AppContext'
import AppNavigator from './src/util/AppNavigator'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const images = [
  { uri: 'https://picsum.photos/id/10/200/300', points: 10 },
  { uri: 'https://picsum.photos/id/20/200/300', points: 20 },
  { uri: 'https://picsum.photos/id/30/200/300', points: 30 },
];

const HomeScreen = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const { totalPoints, setTotalPoints } = useContext(AppContext);
  const navigation = useNavigation();

  const randomizeImage = () => {
    setImageIndex(Math.floor(Math.random() * images.length));
  };

  const addPoints = () => {
    const points1 = images[imageIndex].points;
    const newTotalPoints = totalPoints + points1;
    console.log(newTotalPoints, 'PointsScreen');
    setTotalPoints(newTotalPoints);
    navigation.navigate('PointsScreen');
  };

  const image = images[imageIndex];

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={randomizeImage}>
        <Image style={styles.image} source={{ uri: image.uri }} />
      </TouchableOpacity>
      <Text style={styles.points}>{`Points: ${image.points}`}</Text>
      <TouchableOpacity onPress={addPoints}>
        <Text style={styles.button}>Add Points</Text>
      </TouchableOpacity>
    </View>
  );
};

const PointsScreen = () => {
  const { totalPoints } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.points}>{`Total Points: ${totalPoints}`}</Text>
    </View>
  );
};



const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <AppContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="PointsScreen" component={PointsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContextProvider>

  );
};

// const App = () => {
//   // Config to Firebase
//   // const firebaseConfig = {
//   //   apiKey: "AIzaSyBWjlW_rBWQHbIV25jMtlMHMmqhO48F-eI",
//   //   authDomain: "pepsigame-24ba5.firebaseapp.com",
//   //   databaseURL: "https://pepsigame-24ba5-default-rtdb.firebaseio.com",
//   //   projectId: "pepsigame-24ba5",
//   //   storageBucket: "pepsigame-24ba5.appspot.com",
//   //   messagingSenderId: "837480536168",
//   //   appId: "1:837480536168:web:4c55245c79cb7feb6403dd",
//   //   measurementId: "G-11E47LQ090"
//   // };

//   // Initialize Firebase
//   // initializeApp(firebaseConfig);

//   return (
//     <View style={{ flex: 1 }}>
//       <AppContextProvider>
//         <NavigationContainer>
//           <AppNavigator />
//         </NavigationContainer>
//       </AppContextProvider>
//     </View>
//   )
// }

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 300,
    marginBottom: 20,
  },
  points: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});