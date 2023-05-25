import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { AppContext } from '../util/AppContext';


const Prize = (props) => {
    const { navigation } = props;
    const { randomImagePoint } = useContext(AppContext);
    const { randomImagePrize } = useContext(AppContext);
    
    const stackLogOut = () => {
        navigation.navigate('Login');
    }

    const stackHome = () => {
        navigation.navigate('Home');
    }

    return (
        <LinearGradient colors={['#0063A7', '#02A7F0', '#0063A7']} style={{ flex: 1 }}>
            <Image
                style={{
                    position: 'absolute'
                }}
                source={require('./../image/pattern-3/vector-3.png')} />
            <Image
                style={{
                    position: 'absolute'
                }}
                source={require('./../image/pattern-3/vector-1.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 138.23,
                    right: -60,
                    width: 140.01,
                    height: 135.55
                }}
                source={require('./../image/pattern-3/flower.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 416,
                    left: -20,
                    width: 57.73,
                    height: 55.9
                }}
                source={require('./../image/pattern-3/flower.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 480,
                    right: -35,
                    width: 90.51,
                    height: 87.63
                }}
                source={require('./../image/pattern-3/flower.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 319,
                    left: 27
                }}
                source={require('./../image/pattern-2/flower-2.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 431,
                    left: 294
                }}
                source={require('./../image/pattern-2/flower-2.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 496,
                    left: 37,
                    width: 27.32,
                    height: 27.4
                }}
                source={require('./../image/pattern-2/flower-2.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 637,
                    left: 36
                }}
                source={require('./../image/pattern-2/flower-2.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 686,
                    left: 287,
                    width: 29.33,
                    height: 29.41
                }}
                source={require('./../image/pattern-2/flower-2.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 610.35,
                    left: 347.33,
                    width: 16.67,
                    height: 16.72
                }}
                source={require('./../image/pattern-2/flower-2.png')} />
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
                    top: 350,
                    right: 0,
                }}
                source={require('./../image/pattern-3/s-1.png')} />
            <Image
                style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%'
                }}
                source={require('./../image/pattern-2/vector-4.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 205.35,
                    left: 0
                }}
                source={require('./../image/pattern-2/mask-1.png')} />
            <Image
                style={{
                    position: 'absolute',
                    bottom: 0,
                    alignSelf: 'center'
                }}
                source={require('./../image/pattern-2/drum.png')} />

            <Pressable onPress={stackLogOut}>
                <Image
                    style={{
                        position: 'absolute',
                        right: 20,
                        top: 60
                    }}
                    source={require('./../image/icon-log-out.png')} />
            </Pressable>

            <Image
                style={styles.image}
                source={randomImagePrize} />

            <Image
                style={{
                    position: 'absolute',
                    top: 80,
                    right: 76
                }}
                source={randomImagePoint} />

            <Text style={styles.text}>Chúc mừng bạn đã nhận được {'\n'}<Text style={styles.bold}>1 lon Pepsi AN</Text> ứng với <Text style={styles.bold}>50 coins</Text></Text>

            <TouchableOpacity onPress={stackHome} style={styles.button}>
                <Image source={require('./../image/pattern-1/button-confirm-show.png')} />
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default Prize

const styles = StyleSheet.create({
    image: {
        alignSelf: 'center',
        marginTop: 115,
        backgroundColor: 'black'
    },
    text: {
        color: 'white',
        fontSize: 18,
        fontWeight: 400,
        fontFamily: 'UTM Swiss Condensed',
        marginTop: 27,
        textAlign: 'center',
    },
    bold: {
        fontSize: 18,
        fontWeight: 900,
        fontFamily: 'UTM Swiss 721 Black Condensed',
        color: '#FFDD00'
    },
    button: {
        marginTop: 29,
        alignSelf: 'center'
    }
})