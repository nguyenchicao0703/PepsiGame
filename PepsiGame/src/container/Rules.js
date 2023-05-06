import { Image, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Rules = () => {
  return (
    <LinearGradient colors={['#0063A7', '#0063A7', '#02A7F0', '#0063A7', '#0063A7']} style={{flex: 1}}>
        <Image 
              style={{
                  position: 'absolute',
                  top: 180,
                  left: -16.03
              }} 
              source={require('./../image/pattern-1/flower.png')} />

        <Image 
            style={{
                position: 'absolute',
                top: 504.23,
                left: -16.03
            }} 
            source={require('./../image/pattern-1/flower.png')} />

        <Image 
            style={{
                position: 'absolute',
                top: 253,
                left: 345
            }} 
            source={require('./../image/pattern-1/flower.png')} />
            
        <Image 
            style={{
                position: 'absolute', 
                alignSelf: 'flex-end',
                marginTop: 53.78
            }} 
            source={require('./../image/pattern-1/s-2.png')} />

        <Image 
            style={{
                position: 'absolute', 
                alignSelf: 'flex-end'
            }} 
            source={require('./../image/pattern-1/pattern-2.png')} />

      <View style={styles.viewTitle}>
        <Image
          style={styles.image}
          source={require('../image/arrow-left.png')} />

        <Text style={styles.title}> Thể lệ chương trình </Text>
      </View>
      
      <ScrollView>
        <Text style={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.
          {'\n\n'}
          Tellus ultrices vitae tincidunt eget ut. Et mattis arcu, sit feugiat dui sem in vel. Dictum nulla sagittis nunc mi tortor cursus. Lectus erat commodo dui venenatis habitasse venenatis vivamus sit. Pulvinar sem non sapien eu viverra amet, facilisi. Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue.
          {'\n\n'}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.
          {'\n\n'}
          Tellus ultrices vitae tincidunt eget ut. Et mattis arcu, sit feugiat dui sem in vel. Dictum nulla sagittis nunc mi tortor cursus. Lectus erat commodo dui venenatis habitasse venenatis vivamus sit. Pulvinar sem non sapien eu viverra amet, facilisi. Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.
          {'\n\n'}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.
          {'\n\n'}
          Tellus ultrices vitae tincidunt eget ut. Et mattis arcu, sit feugiat dui sem in vel. Dictum nulla sagittis nunc mi tortor cursus. Lectus erat commodo dui venenatis habitasse venenatis vivamus sit. Pulvinar sem non sapien eu viverra amet, facilisi. Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue. Nunc, elementum leo maecenas neque ultrices.Pellentesque enim id quis porta tortor congue.
          {'\n\n'}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque tortor luctus auctor quam. Aliquam eget augue fermentum eu, at etiam. Id porttitor egestas tortor nisl. Maecenas volutpat sapien neque et sit mauris quis. Neque consectetur egestas nam rutrum nisi, eu lobortis et turpis. Duis id parturient sit et faucibus cursus. A maecenas nec enim consectetur non, donec vitae. Gravida vulputate quam nibh gravida. Quis egestas neque, nibh commodo elit sed odio ac. Purus elementum risus aliquam nunc in. Sapien nunc ornare fermentum non laoreet nec turpis sit turpis.
      </Text>
      </ScrollView>
      
      
    </LinearGradient>
  )
}

export default Rules

const styles = StyleSheet.create({
  viewTitle: {
    textAlign: 'center',
    width: 335,
    marginVertical: 23,
    alignSelf: 'center'
  },
  image: {
    position: 'absolute',
    marginTop: 7
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 900,
    fontFamily: 'UTM Swiss 721 Black Condensed',
    textAlign: 'center'
  },
  content: {
    color: 'white',
    fontSize: 12,
    textAlign: 'justify',
    fontFamily: 'UTM Swiss Condensed',
    fontWeight: 400,
    lineHeight: 15,
    overflow: 'scroll',
    marginHorizontal: 38
  }
})