import { StyleSheet, Text, Image, Pressable, View } from 'react-native'
import React, { useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import { AppContext } from '../../util/AppContext'
import auth from '@react-native-firebase/auth'

const LogOutModal = () => {
    const navigation = useNavigation();
    const { setModalVisible, setModalVisibleScanCode, setModalVisibleCollection, setModalVisibleGiftDetail } = useContext(AppContext);

    const logOut = () => {
        auth().signOut();
    }

    const closeModal = () => {
        setModalVisible(false);
        setModalVisibleScanCode(false);
        setModalVisibleCollection(false);
        setModalVisibleGiftDetail(false);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <LinearGradient colors={['#FCD54E', '#FDEA95', '#FBD239']} style={{ width: 202, height: 160, borderRadius: 10 }}>
                <Text style={styles.text}>Bạn có chắc chắn muốn <Text style={{ fontWeight: 900 }}>đăng xuất</Text> không?</Text>
                <Pressable onPress={() => {
                    closeModal;
                    navigation.navigate('Login');
                    logOut();
                }}>
                    <Image
                        style={styles.button}
                        source={require('./../../image/popupLogout/button-logout.png')} />
                </Pressable>
                <Pressable onPress={closeModal}>
                    <Image
                        style={styles.button}
                        source={require('./../../image/popupLogout/button-cancel.png')} />
                </Pressable>
            </LinearGradient>
        </View>
    )
}

export default LogOutModal

const styles = StyleSheet.create({
    text: {
        color: '#0063A7',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'UTM Swiss Condensed',
        fontWeight: 400,
        marginVertical: 16
    },
    button: {
        top: -5,
        alignSelf: 'center'
    }
})