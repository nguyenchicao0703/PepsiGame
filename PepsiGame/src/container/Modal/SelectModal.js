import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useContext, useState, useEffect, Children } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { AppContext } from '../../util/AppContext'
import database from '@react-native-firebase/database'

const SelectModal = () => {
    const navigation = useNavigation();
    const {
        mobile,
        setModalVisible,
        turnDaily, setTurnDaily,
        turnConverted, setTurnConverted,
        setTitleTurn,
    } = useContext(AppContext);

    useEffect(() => {
        const turnRef = database().ref(`/users/${mobile}/turn`);
        turnRef.on('value', snapshot => {
            const data = snapshot.val();
            setTurnDaily(data.daily);
            setTurnConverted(data.converted);
        });

        return () => turnRef.off('value');  // Unsubscribe to listen
    }, []);

    const handlePress = (buttonName) => {
        if (buttonName === 'daily') setTitleTurn('Button daily click');
        else setTitleTurn('Button converted click');
    }

    return (
        <>
            {
                turnDaily === 0 && turnConverted === 0 ? (
                    <View style={styles.view_worthless}>
                        <View style={{ position: 'absolute', width: '100%', height: '100%' }}>
                            <Image style={{ position: 'absolute', borderTopLeftRadius: 14 }} source={require('./../../image/popupSelect/vector-1.png')} />
                            <Image style={{ position: 'absolute', right: 0, bottom: 0 }} source={require('./../../image/popupSelect/s.png')} />
                            <Image style={{ position: 'absolute', bottom: 0 }} source={require('./../../image/popupSelect/vector-2.png')} />
                        </View>
                        <Pressable onPress={() => { setModalVisible(false) }}>
                            <Image style={{ position: 'absolute', top: 0, right: 0, marginTop: 8, marginRight: 8 }} source={require('./../../image/popupSelect/button-cancel.png')} />
                        </Pressable>
                        <Text style={{ color: '#FFDD00', fontSize: 18, textAlign: 'center', fontWeight: 900, fontFamily: 'UTM Swiss 721 Black Condensed', marginTop: 32 }}>Bạn đã hết lượt!</Text>
                        <Text style={{ color: 'white', fontSize: 14, fontWeight: 400, fontFamily: 'UTM Swiss Condensed', lineHeight: 17, textAlign: 'center', marginHorizontal: 27, marginTop: 4 }}>Hãy scan thêm mã trên bill mua nước hoặc combo Pepsi rạp để nhận thêm lượt chơi</Text>
                        <Image style={{ marginTop: 24, alignSelf: 'center' }} source={require('./../../image/popupSelect/sticker-cry.png')} />
                        <Pressable onPress={() => {
                            setModalVisible(false)
                            navigation.navigate('ScanCode')
                        }}>
                            <Image style={{ marginTop: 36, alignSelf: 'center' }} source={require('./../../image/popupSelect/button-scan-now.png')} />
                        </Pressable>
                    </View>
                ) : (
                    <LinearGradient colors={['#FCD54E', '#FDEA95', '#FBD239']} style={{ width: 285, height: 277, borderRadius: 14, alignSelf: 'center', marginTop: '50%' }}>
                        <Pressable onPress={() => { setModalVisible(false) }}>
                            <Image
                                style={styles.close}
                                source={require('./../../image/popupSelect/button-close.png')} />
                        </Pressable>
                        <Text style={styles.text}>BẠN MUỐN SỬ DỤNG LƯỢT CHƠI NÀO?</Text>
                        {
                            turnDaily === 0 ? (
                                <Image style={{ alignSelf: 'center', marginTop: 10, marginBottom: -12 }} source={require('./../../image/popupSelect/button-play-free.png')} />
                            ) : (
                                <Pressable onPress={() => {
                                    setModalVisible(false);
                                    handlePress('daily');
                                    navigation.navigate('Game');
                                }}
                                    style={styles.turn} >
                                    <Text style={styles.text_turn}>Lượt chơi miễn phí</Text>
                                    <Text style={styles.text_turn_1}>Bạn còn <Text style={{ color: '#FEEEA4', fontSize: 12, fontWeight: 900, fontFamily: 'UTM Swiss 721 Black Condensed' }}>{turnDaily}</Text> lượt chơi</Text>
                                </Pressable>
                            )
                        }

                        {
                            turnConverted === 0 ? (
                                <Image style={{ alignSelf: 'center', marginTop: 10, marginBottom: -12 }} source={require('./../../image/popupSelect/button-play-exchange.png')} />
                            ) : (
                                <Pressable onPress={() => {
                                    setModalVisible(false)
                                    handlePress('converted')
                                    navigation.navigate('Game')
                                }}
                                    style={styles.turn} >
                                    <Text style={styles.text_turn}>Lượt chơi quy đổi</Text>
                                    <Text style={styles.text_turn_1}>Bạn còn <Text style={{ color: '#FFDD00', fontSize: 12, fontWeight: 900, fontFamily: 'UTM Swiss 721 Black Condensed' }}>{turnConverted}</Text> lượt chơi</Text>
                                </Pressable>
                            )
                        }
                    </LinearGradient>
                )
            }
        </>
    )
}

export default SelectModal

const styles = StyleSheet.create({
    view_worthless: {
        backgroundColor: '#0063A7',
        width: 252,
        height: 346,
        borderRadius: 14,
        alignSelf: 'center',
        marginTop: '50%'
    },
    text: {
        color: '#D02027',
        fontSize: 21,
        textAlign: 'center',
        fontFamily: 'UTM Swiss 721 Black Condensed',
        lineHeight: 27,
        fontWeight: 900,
        marginBottom: 16,
        marginTop: 28,
        marginHorizontal: 40
    },
    close: {
        position: 'absolute',
        right: 8,
        top: 8
    },
    button: {
        top: -15,
        alignSelf: 'center',
        marginTop: 16,
        borderRadius: 15,
    },
    turn: {
        borderRadius: 10,
        width: 220,
        height: 60,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderBottomColor: 'white',
        borderRightColor: 'white',
        borderRadius: 12,
        alignSelf: 'center',
        backgroundColor: '#D02027',
        marginTop: 16
    },
    text_turn: {
        color: 'white',
        fontSize: 18,
        fontWeight: 900,
        fontFamily: 'UTM Swiss 721 Black Condensed',
        marginTop: 9,
        alignSelf: 'center'
    },
    text_turn_1: {
        color: 'white',
        fontSize: 10,
        fontWeight: 400,
        fontFamily: 'UTM Swiss Condensed',
        alignSelf: 'center',
        marginBottom: 9
    }
})