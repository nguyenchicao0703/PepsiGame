import { Image, StyleSheet, Text, Modal, View, TouchableOpacity } from 'react-native'
import React, { useState, useRef, useContext, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import LogOutModal from './Modal/LogOutModal'
import SelectModal from './Modal/SelectModal'
import { AppContext } from '../util/AppContext'
import database from '@react-native-firebase/database'

const Home = (props) => {
    const { navigation } = props;
    const { mobile, modalVisible, setModalVisible } = useContext(AppContext);
    const [actionTriggered, setActionTriggered] = useState('');
    const modalRef = useRef(null);
    const [totalTurn, setTotalTurn] = useState(0);

    useEffect(() => {
        const turnRef = database().ref(`/users/${mobile}/turn`);
        turnRef.on('value', snapshot => {
            const data = snapshot.val();
            setTotalTurn(data.daily + data.converted);
        });

        return () => turnRef.off('value');
    }, );

    return (
        <LinearGradient colors={['#0063A7', '#02A7F0', '#0063A7']} style={{ flex: 1 }}>
            <Image
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0
                }}
                source={require('./../image/pattern-2/vector-1.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 130,
                    left: 0
                }}
                source={require('./../image/pattern-2/mask-1.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0
                }}
                source={require('./../image/pattern-2/flower-1.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 90
                }}
                source={require('./../image/pattern-2/vector-2.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 74.91,
                    left: 91.8
                }}
                source={require('./../image/pattern-2/flower-2.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 6.29,
                    left: 200,
                }}
                source={require('./../image/pattern-2/flower-3.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                }}
                source={require('./../image/pattern-2/mask-2.png')} />

            <TouchableOpacity onPress={() => {
                setModalVisible(true);
                setActionTriggered('ACTION_1');
            }}>
                <Image
                    style={{
                        marginTop: 60,
                        marginLeft: 331
                    }}
                    source={require('./../image/icon-log-out.png')} />
            </TouchableOpacity>
            <Modal
                transparent={true}
                animationType='slide'
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
                ref={modalRef}
            >
                {actionTriggered === 'ACTION_1' ? <LogOutModal /> : actionTriggered === 'ACTION_2' ? <SelectModal /> : null}
            </Modal>
            <Image
                style={{
                    position: 'absolute',
                    top: 110,
                    right: 0
                }}
                source={require('./../image/pattern-2/vector-3.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 140.5,
                    right: 0
                }}
                source={require('./../image/pattern-2/mask-3.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 393.92,
                    left: -2.77
                }}
                source={require('./../image/pattern-2/flower-4.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 550.2,
                    left: -39.54,
                    width: 77.93,
                    height: 75.46
                }}
                source={require('./../image/pattern-2/flower-4.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 386,
                    right: 0
                }}
                source={require('./../image/pattern-2/smart.png')} />
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
                    bottom: 0,
                    alignSelf: 'center'
                }}
                source={require('./../image/pattern-2/drum.png')} />
            <Image
                style={{
                    alignSelf: 'center',
                    marginTop: 98
                }}
                source={require('./../image/unicorn.png')} />

            <Text style={styles.text}>Hướng dẫn</Text>
            <TouchableOpacity style={styles.button_play_now} onPress={() => {
                setModalVisible(true);
                setActionTriggered('ACTION_2');
            }}>
                <Image source={require('./../image/pattern-2/button-play-now/mask.png')} />
                <Image style={{ position: 'absolute', borderTopLeftRadius: 12 }} source={require('./../image/pattern-2/button-play-now/vector-1.png')} />
                <Image style={{ position: 'absolute', right: 0, bottom: 0, borderBottomRightRadius: 12 }} source={require('./../image/pattern-2/button-play-now/vector-2.png')} />
                <Image style={{ position: 'absolute', alignSelf: 'center' }} source={require('./../image/pattern-2/button-play-now/vector-3.png')} />
                <View style={{ position: 'absolute', alignSelf: 'center', marginVertical: 9 }}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 900, fontFamily: 'UTM Swiss 721 Black Condensed', alignSelf: 'center' }}>Chơi ngay</Text>
                    <Text style={{ color: 'white', fontSize: 10, fontWeight: 400, fontFamily: 'UTM Swiss Condensed', alignSelf: 'center' }}>Bạn có tổng cộng <Text style={{ color: '#FFDD00', fontSize: 12, fontWeight: 900, fontFamily: 'UTM Swiss 721 Black Condensed', alignSelf: 'center' }}>{totalTurn}</Text> lượt chơi</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('ScanCode') }} style={styles.button}>
                <Image source={require('./../image/pattern-2/button-scan-code.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Collection') }}>
                <Image source={require('./../image/pattern-2/button-collection.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('GiftDetails') }} style={styles.button}>
                <Image source={require('./../image/pattern-2/button-gift-details.png')} />
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default Home

const styles = StyleSheet.create({
    text: {
        color: '#FFDD00',
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'UTM Swiss 721 Black Condensed',
        marginTop: 11.13,
        fontWeight: 900
    },
    button: {
        alignSelf: 'center',
    },
    button_play_now: {
        alignSelf: 'center',
        width: 220,
        height: 62,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#FBC926',
        backgroundColor: '#D02027',
        marginTop: 8,
        marginBottom: 10
    }
})