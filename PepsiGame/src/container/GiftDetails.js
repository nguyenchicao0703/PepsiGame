import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { AppContext } from '../util/AppContext'
import ItemGiftExchange from './ItemGiftExchange'
import database from '@react-native-firebase/database'
import ItemMyGift from './ItemMyGift'

const GiftDetails = (props) => {
  const { navigation } = props;
  const [visibleGiftExchange, setVisibleGiftExchange] = useState(true);
  const [loading, setLoading] = useState(true);
  const [dataProduct, setDataProduct] = useState([]);
  const [dataReward, setDataReward] = useState([]);
  const { mobile } = useContext(AppContext);
  const { scoreCount, setScoreCount } = useContext(AppContext);

  useEffect(() => {
    // Listen to the total score
    const scoreRef = database().ref(`/users/${mobile}/collection`);
    scoreRef.on('value', snapshot => {
      setScoreCount(snapshot.val().score || 0); // Get current data value
    });

    // Get the list of products
    const productRef = database().ref(`products`);
    productRef.on('value', snapshot => {
      // snapshot.val() contains the value of node "products"
      const dataList = [];
      snapshot.forEach(childSnapshot => {
        const data = childSnapshot.val();
        dataList.push({
          id: childSnapshot.key,
          image: data.image,
          name: data.name,
          score: data.score,
          remaining: data.remaining,
        });
      });
      setDataProduct(dataList);
    });

    // Get the list of reward
    const rewardRef = database().ref(`users/${mobile}/reward`);
    rewardRef.on('value', snapshot => {
      const dataList = [];
      snapshot.forEach(childSnapshot => {
        const data = childSnapshot.val();
        dataList.push({
          id: childSnapshot.key,
          image: data.image,
          name: data.name,
          quantity: data.quantity,
          status: data.status,
        });
      });
      setDataReward(dataList);
      // Check if there is data or not
      if (dataList.length != 0) {
        setLoading(false);
      } else {
        setLoading(true);
      }
    });

    return () => {
      scoreRef.off('value');
      productRef.off('value');
      rewardRef.off('value');
    }
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

        <Text style={styles.title}>Chi tiết quà tặng</Text>

        <Pressable style={{ right: 0 }} onPress={() => { navigation.navigate("Login") }}>
          <Image source={require('./../image/icon-log-out.png')} />
        </Pressable>
      </View>


      <View style={{ flexDirection: 'column', alignItems: 'center', padding: 15, marginTop: 0 }}>
        {
          visibleGiftExchange ?
            <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => setVisibleGiftExchange(!visibleGiftExchange)}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={require('./../image/detail-gift/button-gift-exchange-show.png')} />
                <Image source={require('./../image/detail-gift/button-my-gift-hide.png')} />
              </View>

              <View style={styles.viewScore}>
                <Image
                  style={{ position: 'absolute' }}
                  source={require('./../image/prize/vector-bg-score.png')} />
                <Image
                  source={require('./../image/prize/vector-score.png')} />
                <Text style={styles.score}>{scoreCount}</Text>
              </View>

              <Text style={styles.title_coins}>Số coins hiện tại của bạn</Text>
            </TouchableOpacity>
            :
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => setVisibleGiftExchange(!visibleGiftExchange)} >
              <Image source={require('./../image/detail-gift/button-gift-exchange-hide.png')} />
              <Image source={require('./../image/detail-gift/button-my-gift-show.png')} />
            </TouchableOpacity>
        }
      </View>

      {visibleGiftExchange ?
        <FlatList
          style={styles.flatlist_gift_exchange}
          data={dataProduct}
          numColumns={2}
          renderItem={({ item }) => <ItemGiftExchange data={item} />}
          keyExtractor={item => item.id}
        />
        :
        <View >
          {
            loading === true ? (
              <Image style={{ alignSelf: 'center', top: 200 }} source={require('./../image/detail-gift/empty-warehouse.png')} />
            ) : (
              <FlatList
                style={styles.flatlist_my_gift}
                data={dataReward}
                numColumns={2}
                renderItem={({ item }) => <ItemMyGift data={item} />}
                keyExtractor={item => item.id}
              />
            )
          }
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
    marginHorizontal: 61
  },
  viewScore: {
    alignSelf: 'center',
    marginTop: 28
  },
  score: {
    position: 'absolute',
    color: 'white',
    fontSize: 32,
    fontWeight: 900,
    fontFamily: 'UTM Swiss 721 Black Condensed',
    alignSelf: 'center',
    top: 27
  },
  title_coins: {
    // position: 'absolute',
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'UTM Swiss 721 Black Condensed',
    fontWeight: 900,
    marginTop: 4,
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
  modal_title: {
    color: '#005082',
    fontSize: 14,
    fontWeight: 'bold'
    , marginTop: 15
  },
  modal_input: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10
  },
  modal_input_1: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    height: 70
  },
  flatlist_gift_exchange: {
    marginBottom: 0
  },
  flatlist_my_gift: {
    height: '81%'
  }
})