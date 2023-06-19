import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, Modal } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { AppContext } from '../util/AppContext'
import database from '@react-native-firebase/database';

const Collection = (props) => {
    const { navigation } = props;
    const [isModalVisible, setisModalVisible] = useState(false);
    const [isModalVisible2, setisModalVisible2] = useState(false);
    const [showtick, setShowtick] = useState(true);
    const { mobile } = useContext(AppContext);
    const [score, setScore] = useState(null);
    const [pepsi, setPepsi] = useState(null);
    const [mirinda, setMirinda] = useState(null);
    const [sevenUp, setSevenUp] = useState(null);

    const stackLogOut = () => {
        navigation.navigate('Login');
    }

    const stackHome = () => {
        console.log('home')
        navigation.navigate("Home");
    }

    const stackCollection = () => {
        navigation.navigate('Collection');
    }

    const changeModalVisible = (bool) => {
        setisModalVisible(bool);
    }

    useEffect(() => {
        const ref = database().ref(`/users/${mobile}/score`);
        const listener = ref.on('value', (snapshot) => {
            setScore(snapshot.val());
        });

        return () => {
            ref.off('value', listener);
        };
    }, []);

    useEffect(() => {
        const ref = database().ref(`/users/${mobile}/pepsi`);
        const listener = ref.on('value', (snapshot) => {
            setPepsi(snapshot.val());
        });

        return () => {
            ref.off('value', listener);
        };
    }, []);

    useEffect(() => {
        const ref = database().ref(`/users/${mobile}/mirinda`);
        const listener = ref.on('value', (snapshot) => {
            setMirinda(snapshot.val());
        });

        return () => {
            ref.off('value', listener);
        };
    }, []);

    useEffect(() => {
        const ref = database().ref(`/users/${mobile}/sevenUp`);
        const listener = ref.on('value', (snapshot) => {
            setSevenUp(snapshot.val());
        });

        return () => {
            ref.off('value', listener);
        };
    }, []);

    const handleModal = () => setisModalVisible2(() => !isModalVisible2);

    return (
        <LinearGradient colors={['#0063A7', '#02A7F0', '#0063A7']} style={{ flex: 1 }}>
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

            <View
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    marginTop: 60,
                    alignItems: 'center',
                }}>
                <TouchableOpacity onPress={stackHome}>
                    <Image
                        style={{
                            marginLeft: 20,
                        }}
                        source={require('./../image/pattern-3/arrow-left.png')} />
                </TouchableOpacity>

                <Text style={styles.title}>Bộ sưu tập</Text>

                <Pressable style={{ right: 0 }} onPress={stackLogOut}>
                    <Image source={require('./../image/icon-log-out.png')} />
                </Pressable>

            </View>

            <View style={styles.viewScore}>
                <Image
                    style={{ position: 'absolute' }}
                    source={require('./../image/prize/vector-bg-score.png')} />
                <Image
                    source={require('./../image/prize/vector-score.png')} />
                <Text style={styles.score}>{score}</Text>
            </View>

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

            <View style={{ flexDirection: 'row', marginTop: 16, alignSelf: 'center' }}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 900, fontFamily: 'UTM Swiss 721 Black Condensed' }}>{pepsi}</Text>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 900, marginHorizontal: 101, fontFamily: 'UTM Swiss 721 Black Condensed' }}>{sevenUp}</Text>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 900, fontFamily: 'UTM Swiss 721 Black Condensed' }}>{mirinda}</Text>
            </View>


            <Text style={styles.content}>Đổi ngay bộ sưu tập <Text style={styles.bold}>AN - LỘC - PHÚC</Text> để có cơ hội nhận ngay <Text style={styles.bold}>300 coins</Text> hoặc một <Text style={styles.bold}>phần quà may mắn</Text></Text>

            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 16 }}>
                <Image source={require('./../image/minus.png')} />

                <Text style={{ color: 'white', fontSize: 18, fontWeight: 900, marginHorizontal: 20 }}>1</Text>

                <Image source={require('./../image/plus.png')} />
            </View>

            <TouchableOpacity onPress={() => changeModalVisible(true)}>
                <Image
                    style={styles.button}
                    source={require('./../image/button-change-prize.png')} />
            </TouchableOpacity>
            {showtick ?
                <Modal
                    transparent={true}
                    animationType='fade'
                    visible={isModalVisible}
                    onRequestClose={() => changeModalVisible(false)}
                >
                    <View style={{ width: 230, height: 180, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: '70%' }}>
                        <Image source={require('./../image/popupCollection/gift.png')} />

                        <Text style={{ fontSize: 18, color: 'white', marginTop: 20 }}>Bạn chắc chắn muốn đổi </Text>
                        <Text style={{ fontSize: 18, color: 'white', }}><Text style={{ color: '#FFDD00', fontSize: 18, fontWeight: 'bold' }}>1 combo</Text> hay không?</Text>

                        <TouchableOpacity onPress={() => setShowtick(!showtick)} >
                            <Image source={require('./../image/popupCollection/button-gift-exchange.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleModal}>
                            <Image source={require('./../image/popupCollection/button-cancel.png')} />
                        </TouchableOpacity>
                    </View>
                </Modal>
                :
                <Modal
                    transparent={true}
                    animationType='fade'
                    visible={isModalVisible}
                    onRequestClose={() => changeModalVisible(false)}
                >
                    <View style={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center', marginTop: '50%' }}>
                        <Image source={require('./../image/popupCollection/show-gift.png')} />
                        <Image style={{ marginTop: -200 }} source={require('./../image/popupCollection/pepsi-gift.png')} />

                        <Text style={{ fontSize: 18, color: 'white', marginTop: 100 }}>Bạn nhận được</Text>
                        <Text style={{ color: '#FFDD00', fontSize: 18, fontWeight: 'bold' }}>Pepsi Bucket Hat</Text>

                        <TouchableOpacity style={{ marginTop: 0 }} onPress={() => setShowtick(!showtick)}>
                            <Image source={require('./../image/popupCollection/button-cancel.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginLeft: 250, marginTop: -300 }} onPress={stackCollection}>
                            {/* <Image source={require('./../image/popupCollection/button-next.png')} /> */}
                        </TouchableOpacity>
                    </View>
                </Modal>
            }
        </LinearGradient>
    )
}

export default Collection

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'UTM Swiss 721 Black Condensed',
        fontWeight: 900,
        marginHorizontal: 93
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
    },
    viewScore: {
        alignSelf: 'center',
        marginTop: 36,
        marginBottom: 4
    },
    score: {
        position: 'absolute',
        color: 'white',
        fontSize: 34,
        fontWeight: 900,
        fontFamily: 'UTM Swiss 721 Black Condensed',
        alignSelf: 'center',
        top: 25
    }
})