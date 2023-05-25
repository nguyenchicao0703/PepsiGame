import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppContext } from '../../util/AppContext';

const InfomationModal = (props) => {
  const { isModalVisible2, setisModalVisible2 } = useContext(AppContext);

  const handleModal = () => setisModalVisible2(() => !isModalVisible2);
  return (
    <View>
      <View style={{ borderRadius: 10, backgroundColor: '#FCE582', width: 330, height: 600, alignSelf: 'center', padding: 5, marginTop: '40%' }}>
        <TouchableOpacity onPress={handleModal}>
          <Image style={{ position: 'absolute', marginLeft: 295 }} source={require('./../../image/popupEnterInfomation/button-cancel.png')} />
        </TouchableOpacity>

        <Text style={{ color: '#005082', marginTop: 20, fontWeight: 'bold', fontSize: 18, textAlign: 'center' }}>THÔNG TIN NhẬN QUÀ</Text>
        <View style={{ flexDirection: 'column', padding: 10 }}>
          <Text style={{ color: '#005082', marginTop: 20, fontWeight: 'bold', fontSize: 16 }}>Quà của bạn: <Text style={{ color: '#D02027', fontSize: 18 }}>Pepsi Bucket Hat</Text></Text>

          <Text style={styles.title}>Họ và tên</Text>
          <TextInput style={styles.input} placeholder='VD : Nguyễn Văn A' placeholderTextColor='#2D2D2D'></TextInput>

          <Text style={styles.title}>Số điện thoại</Text>
          <TextInput style={styles.input} placeholder='VD : 012345678' placeholderTextColor='#2D2D2D'></TextInput>

          <Text style={styles.title}>Địa chỉ</Text>
          <TextInput style={styles.input} placeholder='Nhập địa chỉ của bạn' placeholderTextColor='#2D2D2D'></TextInput>

          <Text style={styles.title}>Ghi chú</Text>
          <TextInput style={styles.input_1} placeholder='Nhập ghi chú nếu có' placeholderTextColor='#2D2D2D'></TextInput>

          <TouchableOpacity style={{ marginLeft: 80, marginTop: 20 }}>
            <Image source={require('./../../image/popupEnterInfomation/button-confirm.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default InfomationModal

const styles = StyleSheet.create({
  title: {
    color:'#005082',
    fontSize:14,
    fontWeight:'bold'
        ,marginTop:15
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10
  },
  input_1: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    height: 70
  }
})