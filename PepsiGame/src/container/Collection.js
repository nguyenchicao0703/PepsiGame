import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, Modal } from 'react-native'
import React, { useState, useContext, useEffect, useRef } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { AppContext } from '../util/AppContext'
import database from '@react-native-firebase/database';
import LogOutModal from './Modal/LogOutModal';

const Collection = (props) => {
    const { navigation } = props;
    const { mobile, modalVisibleCollection, setModalVisibleCollection, } = useContext(AppContext);
    const [actionTriggered, setActionTriggered] = useState('');
    const modalRef = useRef(null);
    const [changeNumber, setChangeNumber] = useState(1);
    const [limitNumber, setLimitNumber] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const {
        pepsiCount, setPepsiCount,
        mirindaCount, setMirindaCount,
        sevenUpCount, setSevenUpCount,
        scoreCount, setScoreCount
    } = useContext(AppContext);
    // Gift details
    const [gift, setGift] = useState([]);

    // Register to listen for Realtime Database changes
    useEffect(() => {
        // const collectionRef = database().ref(`/users/${mobile}/collection`);
        const collectionRef = database().ref(`/users/${mobile}/collection`);
        collectionRef.on('value', snapshot => {
            const data = snapshot.val();  // Get current data value
            if (data) {
                setPepsiCount(data.pepsi || 0);
                setMirindaCount(data.mirinda || 0);
                setSevenUpCount(data.sevenUp || 0);
            }
        });
        const scoreRef = database().ref(`/users/${mobile}/totalScore`);
        scoreRef.on('value', snapshot => { setScoreCount(snapshot.val().score || 0) });
        // Get minimum value of node in Firebase Realtime Database
        // orderByValue('value') method to sort the returned results by the value of the node's attribute value
        // orderByValue only gets node whose property is array
        // limitToFirst(type number) return element limit
        collectionRef.orderByValue('value').limitToFirst(1).on('value', snapshot => {
            setLimitNumber(Object.values(snapshot.val())[0]);
        });
        // Unsubscribe to listen
        return () => {
            collectionRef.off('value');
            scoreRef.off('value');
        }
    }, []);

    images = [
        { image: 'https://firebasestorage.googleapis.com/v0/b/pepsigame-31aa0.appspot.com/o/Coin.png?alt=media&token=947d8065-1c15-4140-bc57-fb94e315b93d' },
        { image: 'https://firebasestorage.googleapis.com/v0/b/pepsigame-31aa0.appspot.com/o/products%2FPepsi-Bucket-Hat.png?alt=media&token=6337a8d3-dfaf-4206-b395-ac54734e0298' },
    ]

    // Exchange collections for gifts
    const handleGiftExchange = () => {
        setActionTriggered('ACTION_EXCHANGE_GIFT_2');
        const collectionRef = database().ref(`/users/${mobile}/collection`);
        collectionRef.update({
            pepsi: pepsiCount - changeNumber,
            mirinda: mirindaCount - changeNumber,
            sevenUp: sevenUpCount - changeNumber,
        });
        setPepsiCount(pepsiCount - changeNumber);
        setMirindaCount(mirindaCount - changeNumber);
        setSevenUpCount(sevenUpCount - changeNumber);
        // Render random image gift
        const randomIndexes = [];
        let zero = 0, one = 0;
        for (let i = 0; i < changeNumber; i++) {
            let randomIndex = Math.floor(Math.random() * images.length);
            if (randomIndex === 0) zero += 300;
            else one += 1;
            randomIndexes.push(randomIndex);
            if (randomIndex === 0)
                database().ref(`/users/${mobile}/totalScore`).update({ score: scoreCount + zero });
            else {
                const ref = database().ref(`/users/${mobile}/reward/pepsi-bucket-hat`);
                ref.once('value').then(snapshot => {
                    if (snapshot.exists())
                        ref.update({ quantity: snapshot.val().quantity + one })
                    else {
                        ref.set({
                            id: 'pepsi-bucket-hat',
                            name: 'Pepsi Bucket Hat',
                            image: 'https://firebasestorage.googleapis.com/v0/b/pepsigame-31aa0.appspot.com/o/products%2FPepsi-Bucket-Hat.png?alt=media&token=6337a8d3-dfaf-4206-b395-ac54734e0298',
                            quantity: one,
                            status: 'Đã nhận'
                        });
                    }
                })
            }
        }
        const newDisplayedImages = randomIndexes.map(i => images[i]);
        setGift(newDisplayedImages);
    }

    const onNextGift = () => {
        const nextIndex = (currentImageIndex + 1) % gift.length;
        setCurrentImageIndex(nextIndex);
    };

    const cancelModal = () => {
        setModalVisibleCollection(false);
        setCurrentImageIndex(0);
    }

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
                <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
                    <Image
                        style={{
                            marginLeft: 20,
                        }}
                        source={require('./../image/pattern-3/arrow-left.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>Bộ sưu tập</Text>
                <Pressable style={{ right: 0 }} onPress={() => { setModalVisibleCollection(true); setActionTriggered('ACTION_LOGOUT'); }}>
                    <Image source={require('./../image/icon-log-out.png')} />
                </Pressable>
            </View>
            <View style={styles.viewScore}>
                <Image
                    style={{ position: 'absolute' }}
                    source={require('./../image/prize/vector-bg-score.png')} />
                <Image
                    source={require('./../image/prize/vector-score.png')} />
                <Text style={styles.score}>{scoreCount}</Text>
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
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 900, fontFamily: 'UTM Swiss 721 Black Condensed' }}>{pepsiCount}</Text>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 900, marginHorizontal: 101, fontFamily: 'UTM Swiss 721 Black Condensed' }}>{sevenUpCount}</Text>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 900, fontFamily: 'UTM Swiss 721 Black Condensed' }}>{mirindaCount}</Text>
            </View>
            <Text style={styles.content}>Đổi ngay bộ sưu tập <Text style={styles.bold}>AN - LỘC - PHÚC</Text> để có cơ hội nhận ngay <Text style={styles.bold}>300 coins</Text> hoặc một <Text style={styles.bold}>phần quà may mắn</Text></Text>
            {
                limitNumber === 0 ? (
                    <>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 16 }}>
                            <Image source={require('./../image/minus-hide.png')} />
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 900, marginHorizontal: 20 }}>0</Text>
                            <Image source={require('./../image/plus-hide.png')} />
                        </View>
                        <Image
                            style={styles.button}
                            source={require('./../image/button-hide-prize.png')} />
                    </>
                ) : limitNumber === 1 || changeNumber === 1 ? (
                    <>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 16 }}>
                            <Image source={require('./../image/minus-hide.png')} />
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 900, marginHorizontal: 20 }}>1</Text>
                            <Pressable onPress={() => { setChangeNumber(2) }}>
                                <Image source={require('./../image/plus.png')} />
                            </Pressable>
                        </View>
                        <Pressable onPress={() => { setModalVisibleCollection(true); setActionTriggered('ACTION_EXCHANGE_GIFT_1'); }}>
                            <Image
                                style={styles.button}
                                source={require('./../image/button-show-prize.png')} />
                        </Pressable>
                    </>
                ) : changeNumber === limitNumber ? (
                    <>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 16 }}>
                            <Pressable onPress={() => { setChangeNumber(limitNumber - 1) }}>
                                <Image source={require('./../image/minus.png')} />
                            </Pressable>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 900, marginHorizontal: 20 }}>{changeNumber}</Text>
                            <Pressable>
                                <Image source={require('./../image/plus-hide.png')} />
                            </Pressable>
                        </View>
                        <Pressable onPress={() => { setModalVisibleCollection(true); setActionTriggered('ACTION_EXCHANGE_GIFT_1'); }}>
                            <Image
                                style={styles.button}
                                source={require('./../image/button-show-prize.png')} />
                        </Pressable>
                    </>
                ) : (
                    <>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 16 }}>
                            <Pressable onPress={() => { setChangeNumber(changeNumber - 1) }}>
                                <Image source={require('./../image/minus.png')} />
                            </Pressable>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 900, marginHorizontal: 20 }}>{changeNumber}</Text>
                            <Pressable onPress={() => { setChangeNumber(changeNumber + 1) }}>
                                <Image source={require('./../image/plus.png')} />
                            </Pressable>
                        </View>
                        <Pressable onPress={() => { setModalVisibleCollection(true); setActionTriggered('ACTION_EXCHANGE_GIFT_1'); }}>
                            <Image
                                style={styles.button}
                                source={require('./../image/button-show-prize.png')} />
                        </Pressable>
                    </>
                )
            }
            <Modal
                transparent={true}
                visible={modalVisibleCollection}
                onRequestClose={() => {
                    setModalVisibleCollection(false);
                }}
                ref={modalRef}>
                {
                    actionTriggered === 'ACTION_EXCHANGE_GIFT_1' ? (
                        <View style={{ flex: 1, backgroundColor: 'black', opacity: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('./../image/popupCollection/gift.png')} />
                            <Text style={{ fontSize: 18, color: 'white', marginTop: 20 }}>Bạn chắc chắn muốn đổi </Text>
                            <Text style={{ fontSize: 18, color: 'white', }}><Text style={{ color: '#FFDD00', fontSize: 18, fontWeight: 'bold' }}>{changeNumber} combo</Text> hay không?</Text>
                            <TouchableOpacity style={{ top: 32 }} onPress={handleGiftExchange} >
                                <Image source={require('./../image/popupCollection/button-gift-exchange.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ top: 72 }} onPress={() => { setModalVisibleCollection(false) }}>
                                <Image source={require('./../image/popupCollection/button-cancel.png')} />
                            </TouchableOpacity>
                        </View>
                    ) : actionTriggered === 'ACTION_EXCHANGE_GIFT_2' ? (
                        <View style={{ flex: 1, backgroundColor: 'black', opacity: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('./../image/popupCollection/show-gift.png')} />
                            <Image style={{ width: 135, height: 105, marginTop: -200 }} source={{ uri: gift[currentImageIndex].image }} />
                            <Text style={{ fontSize: 18, color: 'white', marginTop: 100 }}>Bạn nhận được</Text>
                            <Text style={{ color: '#FFDD00', fontSize: 18, fontWeight: 'bold' }}>Pepsi Bucket Hat</Text>
                            {
                                changeNumber === 1 ? (
                                    <TouchableOpacity style={{ position: 'absolute', right: 16 }}>
                                        <Image source={require('./../image/popupCollection/button-next-hide.png')} />
                                    </TouchableOpacity>
                                ) : (
                                    <TouchableOpacity onPress={onNextGift} style={{ position: 'absolute', right: 16 }}>
                                        <Image source={require('./../image/popupCollection/button-next.png')} />
                                    </TouchableOpacity>
                                )
                            }
                            <TouchableOpacity style={{ top: 65 }} onPress={cancelModal}>
                                <Image source={require('./../image/popupCollection/button-cancel.png')} />
                            </TouchableOpacity>
                        </View>
                    ) : actionTriggered === 'ACTION_LOGOUT' ? <LogOutModal /> : null
                }
            </Modal>
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