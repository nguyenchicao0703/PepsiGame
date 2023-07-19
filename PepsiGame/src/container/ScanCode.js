import { StyleSheet, Text, View, Image, Pressable, Modal } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import QRCodeScanner from 'react-native-qrcode-scanner'
import { RNCamera } from 'react-native-camera'
import { useNavigation } from '@react-navigation/native'
import database from '@react-native-firebase/database'
import { AppContext } from '../util/AppContext'
import LogOutModal from './Modal/LogOutModal'

const ScanCode = (props) => {
    const { navigation } = props;
    const { mobile, modalVisibleScanCode, setModalVisibleScanCode, setTitleTurn } = useContext(AppContext);
    const [actionTriggered, setActionTriggered] = useState('');
    const [turnConverted, setTurnConverted] = useState(0);
    const [totalTurn, setTotalTurn] = useState(0);

    useEffect(() => {
        const turnRef = database().ref(`/users/${mobile}/turn`);
        turnRef.on('value', snapshot => {
            const data = snapshot.val();
            setTurnConverted(data.converted);
            setTotalTurn(data.daily + data.converted);
        });

        return () => turnRef.off('value');  // Unsubscribe to listen
    }, []);

    return (
        <LinearGradient colors={['#0063A7', '#02A7F0', '#0063A7']} style={{ flex: 1 }}>
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
                    top: 297,
                    right: -20
                }}
                source={require('./../image/pattern-1/flower.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 522,
                    right: -20
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
                    bottom: 0,
                    left: 0
                }}
                source={require('./../image/pattern-1/s-1.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 269,
                    left: 0,
                }}
                source={require('./../image/pattern-3/s-2.png')} />

            <View
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    marginTop: 60,
                    alignItems: 'center',
                }}>
                <Pressable onPress={() => { navigation.navigate('Home') }}>
                    <Image
                        style={{
                            marginLeft: 20,
                        }}
                        source={require('./../image/pattern-3/arrow-left.png')} />
                </Pressable>

                <Text style={styles.title}>Quét mã</Text>

                <Pressable onPress={() => { setModalVisibleScanCode(true); setActionTriggered('ACTION_LOGOUT'); }}>
                    <Image source={require('./../image/icon-log-out.png')} />
                </Pressable>
            </View>

            <View style={styles.image}>
                <QRCodeScanner
                    onRead={() => {
                        setModalVisibleScanCode(true);
                        setActionTriggered('ACTION_SCAN_CODE');
                        database().ref(`users/${mobile}/turn`).update({
                            converted: turnConverted + 5
                        });
                    }}
                    reactivate={true}
                    reactivateTimeout={5000}
                    showMarker={true}
                />
            </View>
            {
                actionTriggered === 'ACTION_SCAN_CODE' ? (
                    <Modal
                        transparent={true}
                        animationType='fade'
                        visible={modalVisibleScanCode}
                        onRequestClose={() => setModalVisibleScanCode(false)}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <View style={{ width: 260, height: 400, borderRadius: 10, backgroundColor: '#FFECA7' }}>
                                <Image
                                    style={{
                                        position: 'absolute',
                                        marginTop: -50,
                                        alignSelf: 'center'
                                    }}
                                    source={require('./../image/scan-code/modal/gift-code.png')} />
                                <Pressable onPress={() => setModalVisibleScanCode(false)}>
                                    <Image
                                        style={{
                                            marginTop: 8,
                                            left: 228
                                        }}
                                        source={require('./../image/scan-code/modal/button-close.png')} />
                                </Pressable>
                                <Text style={{ marginTop: 22, color: 'black', fontSize: 20, fontFamily: 'UTM Swiss Condensed', fontWeight: 400, textAlign: 'center' }}>Bạn nhận được</Text>
                                <Text style={{ color: '#005082', fontSize: 72, fontFamily: 'UTM Swiss 721 Black Condensed', fontWeight: 900, textAlign: 'center' }}>5</Text>
                                <Text style={{ color: '#000000', fontSize: 20, fontFamily: 'UTM Swiss Condensed', fontWeight: 400, textAlign: 'center' }}>Lượt chơi</Text>
                                <Text style={{ marginTop: 30, color: '#000000', fontSize: 20, fontFamily: 'UTM Swiss Condensed', fontWeight: 400, textAlign: 'center' }}>Bạn đang có <Text style={{ fontWeight: 900, color: '#005082' }}>{totalTurn}</Text> lượt chơi</Text>
                                <Pressable onPress={() => setModalVisibleScanCode(false)} style={{ alignSelf: 'center', marginTop: 17 }}>
                                    <Image source={require('./../image/scan-code/modal/button-continue-scanning.png')} />
                                </Pressable>
                                <Pressable onPress={() => { setModalVisibleScanCode(false); setTitleTurn('Button converted click'); navigation.navigate('Game') }} style={{ alignSelf: 'center' }}>
                                    <Image source={require('./../image/scan-code/modal/button-play-now.png')} />
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                ) : actionTriggered === 'ACTION_LOGOUT' ? (
                    <Modal
                        transparent={true}
                        animationType='slide'
                        visible={modalVisibleScanCode}
                        onRequestClose={() => setModalVisibleScanCode(false)}
                    >
                        <LogOutModal />
                    </Modal>
                ) : null
            }


            <Pressable onPress={() => { setActionTriggered('ACTION_SCAN_CODE'); setModalVisibleScanCode(true) }}>
                <Image
                    style={styles.button}
                    source={require('./../image/scan-code/button-scan-code.png')} />
            </Pressable>
        </LinearGradient>
    )
}

export default ScanCode

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'UTM Swiss 721 Black Condensed',
        fontWeight: 900,
        marginHorizontal: 105
    },
    image: {
        alignSelf: 'center',
        marginTop: 26,
        height: '70%'
    },
    button: {
        alignSelf: 'center',
        marginTop: 27
    }
})