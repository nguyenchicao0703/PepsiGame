import { Image, StyleSheet, Text, TextInput, View, Modal } from 'react-native'
import React, { Children, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import LogOutModal from './Modal/LogOutModal'
import SelectModal from './Modal/SelectModal'

const Home = (props) => {
    const { navigation } = props;
    const [isModalVisible, setisModalVisible] = useState(false);
    const [isModalVisible2, setisModalVisible2] = useState(false);

    const changeModalVisible = (bool) => {
        setisModalVisible(bool);
    }

    const changeModalVisible2 = (bool) => {
        setisModalVisible2(bool);
    }

    const stackCollection = () => {
        navigation.navigate('Collection');
    }

    const stackScanCode = () => {
        navigation.navigate('ScanCode');
    }

    const stackGiftDetails = () => {
        navigation.navigate('GiftDetails');
    }
    
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

            <TouchableOpacity onPress={() => changeModalVisible(true)}>
                <Image
                    style={{
                        marginTop: 60,
                        marginLeft: 331
                    }}
                    source={require('./../image/icon-log-out.png')} />
            </TouchableOpacity>

            <Modal
                transparent={true}
                animationType='fade'
                visible={isModalVisible}
                onRequestClose={() => changeModalVisible(false)}
            >
                <LogOutModal />
            </Modal>

            <Modal
                transparent={true}
                animationType='fade'
                visible={isModalVisible2}
                onRequestClose={() => changeModalVisible2(false)}
            >
                <SelectModal/>
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

            <TouchableOpacity style={styles.button} onPress={() => changeModalVisible2(true)} >
                <Image source={require('./../image/pattern-2/button-play-now.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={stackScanCode} style={styles.button}>
                <Image source={require('./../image/pattern-2/button-scan-code.png')} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={stackCollection}>
                <Image source={require('./../image/pattern-2/button-collection.png')} />
            </TouchableOpacity>

            <TouchableOpacity onPress={stackGiftDetails} style={styles.button}>
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
        alignSelf: 'center'
    }
})