import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { Children } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'


const SelectModal = (props) => {
    const navigation = useNavigation()
    const stackPlayGame = () => {
        navigation.navigate('Game');
    }
    return (
        <LinearGradient colors={['#FCD54E', '#FDEA95', '#FBD239']} style={{ width: 285, height: 277, borderRadius: 14, alignSelf: 'center', marginTop: '50%' }}>
            <Pressable>
                <Image
                    style={styles.close}
                    source={require('./../../image/popupSelect/button-close.png')} />
            </Pressable>
            <Text style={styles.text}>BẠN MUỐN SỬ DỤNG LƯỢT CHƠI NÀO?</Text>
            
            <Pressable onPress={stackPlayGame}>
                <Image
                    style={styles.button}
                    source={require('./../../image/popupSelect/button-play-free.png')} />
            </Pressable>
            <Pressable onPress={stackPlayGame}>
                <Image
                    style={styles.button}
                    source={require('./../../image/popupSelect/button-play-exchange.png')} />
            </Pressable>
        </LinearGradient>
    )
}

export default SelectModal

const styles = StyleSheet.create({
    text: {
        color: '#D02027',
        fontSize: 22,
        textAlign: 'center',
        fontFamily: 'UTM Swiss 721 Black Condensed',
        lineHeight: 27,
        fontWeight: 900,
        marginVertical: 28,
        marginHorizontal: 45
    },
    close: {
        position: 'absolute',
        right: 8,
        top: 8
    },
    button: {
        top: -15,
        alignSelf: 'center'
    }
})