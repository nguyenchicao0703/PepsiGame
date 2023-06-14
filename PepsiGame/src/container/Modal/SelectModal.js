import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { AppContext } from '../../util/AppContext'


const SelectModal = () => {
    const navigation = useNavigation()
    const { setModalVisible } = useContext(AppContext);

    return (
        <LinearGradient colors={['#FCD54E', '#FDEA95', '#FBD239']} style={{ width: 285, height: 277, borderRadius: 14, alignSelf: 'center', marginTop: '50%' }}>
            <Pressable onPress={() => {
                setModalVisible(false);
            }}>
                <Image
                    style={styles.close}
                    source={require('./../../image/popupSelect/button-close.png')} />
            </Pressable>
            <Text style={styles.text}>BẠN MUỐN SỬ DỤNG LƯỢT CHƠI NÀO?</Text>
            
            <Pressable onPress={() => {
                setModalVisible(false);
                navigation.navigate('Game');
            }}>
                <Image
                    style={styles.button}
                    source={require('./../../image/popupSelect/button-play-free.png')} />
            </Pressable>
            <Pressable onPress={() => {
                setModalVisible(false);
                navigation.navigate('Game');
            }}>
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