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
    const { mobile } = useContext(AppContext);
    const {
        pepsiCount, setPepsiCount,
        mirindaCount, setMirindaCount,
        sevenUpCount, setSevenUpCount,
        scoreCount, setScoreCount
    } = useContext(AppContext);
    // Gift details
    const [gift, setGift] = useState('');
    const [pepsiBucketHat, setPepsiBucketHat] = useState('');
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

        // Get current value of quantity in node reward
        // const quantityRef = database().ref(`users/${mobile}/reward/pepsi-bucket-hat/quantity`);
        const quantityRef = database().ref(`users/123456789/reward/pepsi-bucket-hat/quantity`);
        quantityRef.on('value', snapshot => {
            setQuantity(snapshot.val());
        });

        // Unsubscribe to listen
        return () => {
            collectionRef.off('value');
            quantityRef.off('value');
        }
    }, []);

    // Exchange collections for gifts
    const handleGiftExchange = () => {
        // const ref = database().ref(`/users/${mobile}/collection`);
        const ref = database().ref(`/users/123456789/collection`);
        ref.update({
            pepsi: pepsiCount - 1,
            mirinda: mirindaCount - 1,
            sevenUp: sevenUpCount - 1,
        });
        setPepsiCount(pepsiCount - 1);
        setMirindaCount(mirindaCount - 1);
        setScoreCount(sevenUpCount - 1);

        setModalNavigation(false);

        // Render random image gift
        randomImage = [
            { image: require('./../image/popupCollection/coin-gift.png') },
            { image: require('./../image/popupCollection/pepsi-gift.png') }
        ]
        const randomIndex = Math.floor(Math.random() * randomImage.length);
        setGift(randomImage[randomIndex].image);
        if (randomIndex === 0) {
            ref.update({
                score: scoreCount + 300
            });
            setScoreCount(pepsiCount + 300);
        } else {
            // const ref = database().ref(`/users/${mobile}/reward/pepsi-bucket-hat`);
            const ref = database().ref(`/users/123456789/reward/pepsi-bucket-hat`);
            ref.update({
                id: 'pepsi-bucket-hat',
                image: 'https://firebasestorage.googleapis.com/v0/b/pepsigame-31aa0.appspot.com/o/products%2FPepsi-Bucket-Hat.png?alt=media&token=6337a8d3-dfaf-4206-b395-ac54734e0298',
                name: 'Pepsi Bucket Hat',
                quantity: quantity + 1,
                status: 'Đã nhận',
            });
            setPepsiBucketHat(pepsiBucketHat + 300);
        }
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
                        <View style={{ width: 230, height: 180, alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginTop: '70%' }}>
                            <Image source={require('./../image/popupCollection/gift.png')} />
                            <Text style={{ fontSize: 18, color: 'white', marginTop: 20 }}>Bạn chắc chắn muốn đổi </Text>
                            <Text style={{ fontSize: 18, color: 'white', }}><Text style={{ color: '#FFDD00', fontSize: 18, fontWeight: 'bold' }}>1 combo</Text> hay không?</Text>
                            <TouchableOpacity onPress={handleGiftExchange} >
                                <Image source={require('./../image/popupCollection/button-gift-exchange.png')} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setModalVisible(false) }}>
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
                        <View style={{ alignItems: 'center', alignSelf: 'center', justifyContent: 'center', marginTop: '50%' }}>
                            <Image source={require('./../image/popupCollection/show-gift.png')} />
                            <Image style={{ marginTop: -200 }} source={gift} />
                            <Text style={{ fontSize: 18, color: 'white', marginTop: 100 }}>Bạn nhận được</Text>
                            <Text style={{ color: '#FFDD00', fontSize: 18, fontWeight: 'bold' }}>Pepsi Bucket Hat</Text>
                            <TouchableOpacity style={{ marginTop: 0 }} onPress={() => { setModalVisible(false); setModalNavigation(true); }}>
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