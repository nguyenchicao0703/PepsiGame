import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native'
import React, { useState, useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import InfomationModal from './Modal/InfomationModal';
import { AppContext } from '../util/AppContext'

const GiftDetails = (props) => {
  const { navigation } = props;
  const [visibleGiftExchange, setVisibleGiftExchange] = useState(true);
  const {isModalVisible2, setisModalVisible2} = useContext(AppContext);

  const stackHome = () => {
    navigation.navigate('Home');
  }

  const stackLogOut = () => {
    navigation.navigate('Login');
  }

  const changeModalVisible2 = (bool) => {
    setisModalVisible2(bool);
  }


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
          position: 'absolute',
          top: 640,
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

      <Pressable onPress={stackHome}>
        <Image
          style={{
            position: 'absolute',
            marginTop: 56,
            marginLeft: 20
          }}
          source={require('./../image/pattern-3/arrow-left.png')} />
      </Pressable>

      <Pressable onPress={stackLogOut}>
        <Image
          style={{
            position: 'absolute',
            right: 0,
            marginTop: 60,
            marginRight: 20
          }}
          source={require('./../image/icon-log-out.png')} />
      </Pressable>

      <Text style={styles.title}>Chi tiết quà tặng</Text>

      <View style={{ flexDirection: 'column', alignItems: 'center', padding: 15, marginTop: 0 }}>
        {
          visibleGiftExchange ?
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setVisibleGiftExchange(!visibleGiftExchange)}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('./../image/detail-gift/button-gift-exchange-show.png')} />
                <Image source={require('./../image/detail-gift/button-my-gift-hide.png')} />
              </View>

              <Image style={{ backgroundColor: '#BE050C', borderRadius: 60, marginTop: 28 }} source={require('./../image/coins.png')} />
              <Text style={styles.title}>Số coins hiện tại của bạn</Text>
            </TouchableOpacity>

            : <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => setVisibleGiftExchange(!visibleGiftExchange)} >
              <Image source={require('./../image/detail-gift/button-gift-exchange-hide.png')} />
              <Image source={require('./../image/detail-gift/button-my-gift-show.png')} />
            </TouchableOpacity>
        }
      </View>

      <Modal
        transparent={true}
        animationType='fade'
        visible={isModalVisible2}
        onRequestClose={() => changeModalVisible(false)}
      >
        <InfomationModal />
      </Modal>

      {visibleGiftExchange ?
        <ScrollView >
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
            <View>
              <Image source={require('./../image/detail-gift/product-1.png')} />
              <View style={styles.item11}>
                <Text style={styles.name}>Pepso Bucket Hat</Text>
                <Text style={styles.quantity}>còn lại: <Text>500</Text></Text>
                <TouchableOpacity onPress={() => changeModalVisible2(true)}>
                  <Image source={require('./../image/detail-gift/button-gift-exchange-main.png')} />
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Image source={require('./../image/detail-gift/product-2.png')} />
              <View style={styles.item11}>
                <Text style={styles.name}>Pepso Jacket</Text>
                <Text style={styles.quantity}>còn lại: <Text>10</Text></Text>
                <TouchableOpacity onPress={() => changeModalVisible2(true)}>
                  <Image source={require('./../image/detail-gift/button-gift-exchange-main.png')} />
                </TouchableOpacity>
              </View>
            </View>

          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
            <View style={{}}>
              <Image source={require('./../image/detail-gift/product-3.png')} />
              <View style={styles.item11}>
                <Text style={styles.name}>Pepso Bucket Hat</Text>
                <Text style={styles.quantity}>còn lại: <Text>500</Text></Text>
                <TouchableOpacity onPress={() => changeModalVisible2(true)}>
                  <Image source={require('./../image/detail-gift/button-gift-exchange-main.png')} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ marginLeft: 10 }}>
              <Image source={require('./../image/detail-gift/product-4.png')} />
              <View style={styles.item11}>
                <Text style={styles.name}>Pepso Jacket</Text>
                <Text style={styles.quantity}>còn lại: <Text>10</Text></Text>
                <TouchableOpacity onPress={() => changeModalVisible2(true)}>
                  <Image source={require('./../image/detail-gift/button-gift-exchange-main.png')} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        // </View>
        :
        <View style={{ alignItems: 'center' }}>
          <Image source={require('./../image/detail-gift/empty-warehouse.png')}></Image>
        </View>
      }
    </LinearGradient>
  )
}

export default GiftDetails

const styles = StyleSheet.create({
  title: {
    // position: 'absolute',
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'UTM Swiss 721 Black Condensed',
    fontWeight: 900,
    marginTop: 55,
  },
  item11: {
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
    fontSize: 16,
    fontWeight: 'bold'
  },
  quantity: {
    color: 'white'
  },
  titleModal: {
    color: '#005082',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 15
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10
  },
})