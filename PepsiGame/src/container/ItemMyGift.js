import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState, useContext } from 'react'
import database from '@react-native-firebase/database'
import { AppContext } from '../util/AppContext';

const ItemMyGift = (props) => {
    const { data } = props;

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
            <View>
                <View style={styles.view_image}>
                    <Image style={styles.image} source={{uri: data.image}} />
                    <View style={styles.view_quantity}>
                        <Image source={require('./../image/detail-gift/vector-1.png')} />
                        <Text style={styles.quantity}>{data.quantity}</Text>
                    </View>
                </View>
                <View style={styles.view}>
                    <Text style={styles.name}>{data.name}</Text>
                    <Text style={styles.state}>Trạng thái: <Text style={styles.state_result}>{data.status}</Text></Text>
                </View>
            </View>
        </View>
    )
}

export default ItemMyGift

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#F2CD6C',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: -20,
        alignItems: 'center'
    },
    view_image: {
        backgroundColor: 'white',
        borderRadius: 12,
        width: 158,
        height: 170,
        alignSelf: 'center'
    },
    image: {
        alignSelf: 'center',
        width: '100%',
        height: '80%',
        borderRadius: 12,
        marginTop: 5
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
    name: {
        color: '#005082',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
        fontFamily: 'UTM Swiss 721 Black Condensed'
    },
    state: {
        fontSize: 12,
        color: '#005082',
        fontWeight: 900,
        fontFamily: 'UTM Swiss Condensed',
        marginTop: 4,
        marginBottom: 13
    },
    state_result: {
        fontSize: 12,
        color: '#00A61B',
        fontWeight: 900,
        fontFamily: 'UTM Swiss 721 Black Condensed',
        marginTop: 4,
        marginBottom: 13,
    }
})