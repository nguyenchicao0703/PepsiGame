import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, Modal } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { AppContext } from '../util/AppContext'
import database from '@react-native-firebase/database';

const Collection = (props) => {
    const { navigation } = props;
    const [modalVisible, setModalVisible] = useState(false);
    const [modalNavigation, setModalNavigation] = useState(true);
    const [changeNumber, setChangeNumber] = useState(1);
    const [limitNumber, setLimitNumber] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { mobile } = useContext(AppContext);
    const {
        pepsiCount, setPepsiCount,
        mirindaCount, setMirindaCount,
        sevenUpCount, setSevenUpCount,
        scoreCount, setScoreCount
    } = useContext(AppContext);
    // Gift details
    const [gift, setGift] = useState([]);
    const [quantity, setQuantity] = useState(0);

    // Register to listen for Realtime Database changes
    useEffect(() => {
        // const collectionRef = database().ref(`/users/${mobile}/collection`);
        const collectionRef = database().ref(`/users/123456789/collection`);
        collectionRef.on('value', snapshot => {
            const data = snapshot.val();  // Get current data value
            if (data) {
                setPepsiCount(data.pepsi || 0);
                setMirindaCount(data.mirinda || 0);
                setSevenUpCount(data.sevenUp || 0);
                setScoreCount(data.score || 0);
            }
        });
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
        }
    }, []);

    images = [
        { id: 'coin-gift', image: require('./../image/popupCollection/coin-gift.png') },
        { id: 'pepsi-bucket-hat', name: 'Pepsi Bucket Hat', image: require('./../image/popupCollection/pepsi-gift.png') },
        { id: 'pepsi-jacket', name: 'Pepsi Jacket', image: require('./../image/popupCollection/pepsi-jacket.png') },
        { id: 'pepsi-tote-bag', name: 'Pepsi Tote Bag', image: require('./../image/popupCollection/pepsi-tote-bag.png') },
        { id: 'pepsi-tumbler', name: 'Pepsi Tumbler', image: require('./../image/popupCollection/pepsi-tumbler.png') },
    ]

    // Exchange collections for gifts
    const handleGiftExchange = () => {
        setModalNavigation(false);
        // const collectionRef = database().ref(`/users/${mobile}/collection`);
        const collectionRef = database().ref(`/users/123456789/collection`);
        collectionRef.update({
            pepsi: pepsiCount - 1,
            mirinda: mirindaCount - 1,
            sevenUp: sevenUpCount - 1,
        });
        setPepsiCount(pepsiCount - 1);
        setMirindaCount(mirindaCount - 1);
        setScoreCount(sevenUpCount - 1);
        // Render random image gift
        const randomIndexes = [];
        for (let i = 0; i < changeNumber; i++) {
            // const randomIndex = Math.floor(Math.random() * images.length);
            let randomIndex = 2;
            // Make sure we don't duplicate the same image
            // while (randomIndexes.includes(randomIndex)) {
            //     randomIndex = Math.floor(Math.random() * images.length);
            // }
            randomIndexes.push(randomIndex);
            if (randomIndex === 0) {
                ref.update({
                    score: scoreCount + 300
                });
                setScoreCount(pepsiCount + 300);
            } else {
                database().ref(`/users/123456789/reward/${images[randomIndex].id}`).once('value').then(snapshot => {
                    const updateRef = database().ref(`/users/123456789/reward/${images[randomIndex].id}`);
                    if (snapshot.exists()) {
                        let quantity
                        setQuantity(snapshot.val().quantity);
                        console.log(snapshot.val().quantity);
                        console.log(quantity);
                        updateRef.update({ quantity: quantity + 1 });
                    } else {
                        updateRef.set({
                            id: images[randomIndex].id,
                            name: images[randomIndex].name,
                            image: '',
                            quantity: 1,
                            status: 'Đã nhận'
                        })
                    }
                });
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
        setModalVisible(false);
        setModalNavigation(true);
        setCurrentImageIndex(0);
        setGift([]);
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
                <Pressable style={{ right: 0 }} onPress={() => { navigation.navigate("Login") }}>
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
                        <Pressable onPress={() => { setModalVisible(true) }}>
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
                        <Pressable onPress={() => { setModalVisible(true) }}>
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
                        <Pressable onPress={() => { setModalVisible(true) }}>
                            <Image
                                style={styles.button}
                                source={require('./../image/button-show-prize.png')} />
                        </Pressable>
                    </>
                )
            }
            {
                modalNavigation ?
                    <Modal
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(false);
                        }}>
                        <View style={{ flex: 1, backgroundColor: 'black', opacity: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('./../image/popupCollection/gift.png')} />
                            <Text style={{ fontSize: 18, color: 'white', marginTop: 20 }}>Bạn chắc chắn muốn đổi </Text>
                            <Text style={{ fontSize: 18, color: 'white', }}><Text style={{ color: '#FFDD00', fontSize: 18, fontWeight: 'bold' }}>1 combo</Text> hay không?</Text>
                            <TouchableOpacity style={{ top: 32 }} onPress={handleGiftExchange} >
                                <Image source={require('./../image/popupCollection/button-gift-exchange.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{ top: 72 }} onPress={() => { setModalVisible(false) }}>
                                <Image source={require('./../image/popupCollection/button-cancel.png')} />
                            </TouchableOpacity>
                        </View>
                    </Modal>
                    :
                    <Modal
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(false);
                            setModalNavigation(true);
                        }}>
                        <View style={{ flex: 1, backgroundColor: 'black', opacity: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('./../image/popupCollection/show-gift.png')} />
                            <Image style={{ marginTop: -200 }} source={gift[currentImageIndex].image} />
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