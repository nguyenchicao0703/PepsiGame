import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, TextInput } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import database from '@react-native-firebase/database'
import { AppContext } from '../util/AppContext';

const ItemGiftExchange = (props) => {
    const { data } = props;
    const { mobile } = useContext(AppContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [totalScore, setTotalScore] = useState(0);
    const [remaining, setRemaining] = useState(0);
    const [quantity, setQuantity] = useState(0);
    // Gift infomation
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [note, setNote] = useState('');

    const handleModal = () => setModalVisible(() => !modalVisible);

    const handleSelectProduct = (bool) => {
        setModalVisible(bool);
    }

    useEffect(() => {
        // Get the total score of the user and save it in state totalScore
        const scoreRef = database().ref(`users/${mobile}/totalScore/score`);
        scoreRef.on('value', snapshot => { setTotalScore(snapshot.val()) });
        // Get remaining product quantity and save to state remaining
        const remainingRef = database().ref(`products/${data.id}`);
        remainingRef.on('value', snapshot => {
            setRemaining(snapshot.val().remaining);
        });
        const quantityRef = database().ref(`users/${mobile}/reward/${data.id}/quantity`);
        quantityRef.on('value', snapshot => {
            setQuantity(snapshot.val());
        });
        return () => {
            scoreRef.off('value');
            remainingRef.off('value');
            quantityRef.off('value');
        }
    }, []);


    const handleConfirm = async () => {
        if (totalScore > data.score) {
            // Deducting user score
            database().ref(`users/${mobile}/totalScore`).update({ score: totalScore - data.score });
            // Subtract the number of products left in stock
            database().ref(`products/${data.id}`).update({ remaining: remaining - 1 });
            // Save redemption information in the database
            database().ref(`transactions`).push({
                fullName,
                phoneNumber,
                address,
                note,
                product: {
                    id: data.id,
                    name: data.name,
                },
            }, handleModal());
            // Reward
            database().ref(`users/${mobile}/reward/${data.id}`).update({
                id: data.id,
                image: data.image,
                name: data.name,
                quantity: quantity + 1,
                status: 'Đã nhận',
            });
        } else {
            alert('Bạn không đủ điểm để đổi sản phẩm này');
        }
    }

    return (
        <>
            {
                totalScore > data.score ? (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                        <View>
                            <View style={styles.view_image}>
                                <Image style={styles.image} source={{ uri: data.image }} />
                                <View style={styles.view_quantity}>
                                    <Image source={require('./../image/detail-gift/vector-1.png')} />
                                    <Text style={styles.quantity}>{data.score}</Text>
                                </View>
                            </View>
                            <View style={styles.view}>
                                <Text style={styles.name}>{data.name}</Text>
                                <Text style={styles.remaining}>còn lại: <Text>{data.remaining}</Text></Text>
                                <TouchableOpacity onPress={() => handleSelectProduct(true)}>
                                    <Image source={require('./../image/detail-gift/button-gift-exchange-main.png')} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Modal
                            transparent={true}
                            animationType='fade'
                            visible={modalVisible}
                            onRequestClose={() => handleSelectProduct(false)}
                        >
                            <View style={{ borderRadius: 10, backgroundColor: '#FCE582', width: 330, height: 600, alignSelf: 'center', padding: 5, marginTop: '40%' }}>
                                <TouchableOpacity onPress={handleModal}>
                                    <Image style={{ position: 'absolute', marginLeft: 295 }} source={require('./../image/popupEnterInfomation/button-cancel.png')} />
                                </TouchableOpacity>

                                <Text style={{ color: '#005082', marginTop: 20, fontWeight: 'bold', fontSize: 18, textAlign: 'center', fontFamily: 'UTM Swiss 721 Black Condensed' }}>THÔNG TIN NHẬN QUÀ</Text>

                                <View style={{ flexDirection: 'column', padding: 10 }}>
                                    <Text style={{ color: '#005082', marginTop: 22, fontWeight: 'bold', fontSize: 16 }}>Quà của bạn: <Text style={{ color: '#D02027', fontSize: 18 }}>{data.name}</Text></Text>

                                    <Text style={styles.modal_title}>Họ và tên</Text>
                                    <TextInput onChangeText={(text) => setFullName(text)} style={styles.modal_input} placeholder='VD : Nguyễn Văn A' placeholderTextColor='#8D8D8D' />

                                    <Text style={styles.modal_title}>Số điện thoại</Text>
                                    <TextInput onChangeText={(text) => setPhoneNumber(text)} style={styles.modal_input} placeholder='VD : 012345678' placeholderTextColor='#8D8D8D' keyboardType='numeric' />

                                    <Text style={styles.modal_title}>Địa chỉ</Text>
                                    <TextInput onChangeText={(text) => setAddress(text)} style={styles.modal_input} placeholder='Nhập địa chỉ của bạn' placeholderTextColor='#8D8D8D' />

                                    <Text style={styles.modal_title}>Ghi chú</Text>
                                    <TextInput onChangeText={(text) => setNote(text)} style={styles.modal_input_1} placeholder='Nhập ghi chú nếu có' placeholderTextColor='#8D8D8D' />

                                    <TouchableOpacity onPress={handleConfirm} style={{ marginLeft: 80, marginTop: 20 }}>
                                        <Image source={require('./../image/popupEnterInfomation/button-confirm.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </Modal>
                    </View>
                ) : (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
                        <View>
                            <View style={styles.view_image}>
                                <Image style={styles.image} source={{ uri: data.image }} />
                                <View style={styles.opacity_view_quantity}>
                                    <Image source={require('./../image/detail-gift/vector-1.png')} />
                                    <Text style={styles.quantity}>{data.score}</Text>
                                </View>
                                <View style={{ backgroundColor: '#E7E7E7', width: '100%', height: '100%', borderTopLeftRadius: 12, borderTopRightRadius: 12, position: 'absolute', opacity: 0.8 }}></View>
                            </View>
                            <View style={styles.opacity_view}>
                                <Text style={styles.opacity_name}>{data.name}</Text>
                                <Text style={styles.remaining}>còn lại: <Text>{data.remaining}</Text></Text>
                                <TouchableOpacity onPress={() => handleSelectProduct(true)}>
                                    <Image source={require('./../image/detail-gift/button-gift-exchange-main.png')} />
                                </TouchableOpacity>
                                <View style={{ backgroundColor: '#ACACAC', width: '100%', height: '100%', position: 'absolute', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, opacity: 0.8 }}></View>
                            </View>
                        </View>
                    </View>
                )
            }
        </>
    )
}

export default ItemGiftExchange

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#C31E25',
        width: 158,
        height: 100,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: -20,
        alignItems: 'center'
    },
    name: {
        color: '#FFDD00',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 8
    },
    remaining: {
        color: 'white'
    },
    view_image: {
        backgroundColor: 'white',
        borderRadius: 12,
        width: 158,
        height: 170,
        alignSelf: 'center',
    },
    image: {
        alignSelf: 'center',
        width: '100%',
        height: '80%',
        borderRadius: 12,
        marginTop: 5,
    },
    view_quantity: {
        position: 'absolute',
        right: -4,
        marginTop: 8,
    },
    quantity: {
        position: 'absolute',
        color: 'white',
        fontSize: 18,
        fontFamily: 'UTM Swiss 721 Black Condensed',
        fontWeight: 900,
        alignSelf: 'center',
        marginTop: 10
    },
    modal_title: {
        color: '#005082',
        fontSize: 14,
        fontWeight: 'bold'
        , marginTop: 15
    },
    modal_input: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10,
        color: 'black',
        fontFamily: 'UTM Swiss Condensed',
        fontSize: 14,
        paddingHorizontal: 12
    },
    modal_input_1: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10,
        height: 70,
        color: 'black',
        fontFamily: 'UTM Swiss Condensed',
        fontSize: 14,
        paddingHorizontal: 12
    },
    opacity_view: {
        backgroundColor: '#9E9E9E',
        width: 158,
        height: 100,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: -20,
        alignItems: 'center'
    },
    opacity_name: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 8
    },
    opacity_view_quantity: {
        position: 'absolute',
        right: 0,
        marginTop: 8,
    },
})