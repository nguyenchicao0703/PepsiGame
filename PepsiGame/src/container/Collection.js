import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Collection = (props) => {
    const {navigation} = props;

    const stackLogOut = () => {
        navigation.navigate('Login');
    }

    const stackHome = () => {
        navigation.navigate('Home');
    }
  return (
    <LinearGradient colors={['#0063A7', '#02A7F0', '#0063A7']} style={{flex: 1}}>
        <Image 
            style={{
                position: 'absolute',
                bottom: 0,
                left: 0
            }} 
            source={require('./../image/pattern-1/s-1.png')} />
    
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

        <Image 
            style={{
                position: 'absolute',
                top: 269,
                left: 0,
            }} 
            source={require('./../image/pattern-3/s-2.png')} />

        <Image 
            style={{
                position: 'absolute',
                top: 269,
                right: 0,
            }} 
            source={require('./../image/pattern-3/s-3.png')} />

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

        <Text style={styles.title}>Bộ sưu tập</Text>

        <Pressable>
            <Image
                style={{
                    alignSelf: 'center',
                    marginTop: 36
                }}
                source={require('./../image/coins.png')} />
        </Pressable>

        <Text 
            style={{
                color: 'white',
                fontSize: 18,
                fontFamily: 'UTM Swiss 721 Black Condensed',
                fontWeight: 900,
                textAlign: 'center',
                marginTop: 4
            }}>
            Số coins hiện tại của bạn
        </Text>

        <Image
            style={{
                alignSelf: 'center',
                marginTop: 50
            }}
            source={require('./../image/collection-pepsi.png')} />

        <Image
            style={{
                alignSelf: 'center',
                marginTop: 16
            }}
            source={require('./../image/pattern-3/number.png')} />

        <Text style={styles.content}>Đổi ngay bộ sưu tập <Text style={styles.bold}>AN - LỘC - PHÚC</Text> để có cơ hội nhận ngay <Text style={styles.bold}>300 coins</Text> hoặc một <Text style={styles.bold}>phần quà may mắn</Text></Text>
        
        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 16}}>
            <Image source={require('./../image/minus.png')} />

            <Text style={{color: 'white', fontSize: 18, fontWeight: 900, marginHorizontal: 20}}>1</Text>

            <Image source={require('./../image/plus.png')} />
        </View>

        <TouchableOpacity>
            <Image
                style={styles.button}
                source={require('./../image/button-change-prize.png')} />
        </TouchableOpacity>
        
    </LinearGradient>
  )
}

export default Collection

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
    content: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'UTM Swiss Condensed',
        fontWeight: 400,
        textAlign: 'center',
        marginTop: 16,
        width: 255,
        height: 60,
        alignSelf: 'center',
        lineHeight: 20,
    },
    bold: {
        color: '#FFDD00',
        fontSize: 16,
        fontFamily: 'UTM Swiss 721 Black Condensed',
        fontWeight: 900,
        lineHeight: 20
    },
    button: {
        marginTop: 60,
        alignSelf: 'center'
    }
})