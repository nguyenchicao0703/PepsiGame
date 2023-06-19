import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Draggable from 'react-native-draggable'
import { AppContext } from '../util/AppContext'
import database from '@react-native-firebase/database'

const Game = (props) => {
    const { navigation } = props;
    const { mobile } = useContext(AppContext);
    const { setRandomImagePrize } = useContext(AppContext);
    const { setRandomImageScore } = useContext(AppContext);

    const imageList = [
        {
            image: require('./../image/prize/pepsi.png'),
            score: 50
        },
        {
            image: require('./../image/prize/pepsi.png'),
            score: 100
        },
        {
            image: require('./../image/prize/mirinda.png'),
            score: 50
        },
        {
            image: require('./../image/prize/mirinda.png'),
            score: 100
        },
        {
            image: require('./../image/prize/7up.png'),
            score: 50
        },
        {
            image: require('./../image/prize/7up.png'),
            score: 100
        }
    ];

    // Register to listen for Realtime Database changes
    // useEffect(() => {
    //     const ref = database().ref(`/userses1/${mobile}`);
    //     ref.on('value', snapshot => {
    //         const data = snapshot.val();  // Get current data value
    //         if (data) {
    //             setPepsiCount(data.pepsi || 0);
    //             setMirindaCount(data.mirinda || 0);
    //             setSevenUpCount(data.sevenUp || 0);
    //             setScoreCount(data.score || 0);
    //         }
    //     });

    //     return () => ref.off('value');  // Unsubscribe to listen
    // }, []);

    useEffect(() => {
        const ref = database().ref(`/users/${mobile}/score`);
        const listener = ref.on('value', (snapshot) => {
            setScoreCount(snapshot.val());
        });

        return () => {
            ref.off('value', listener);
        };
    }, []);

    useEffect(() => {
        const ref = database().ref(`/users/${mobile}/pepsi`);
        const listener = ref.on('value', (snapshot) => {
            setPepsiCount(snapshot.val());
        });

        return () => {
            ref.off('value', listener);
        };
    }, []);

    useEffect(() => {
        const ref = database().ref(`/users/${mobile}/mirinda`);
        const listener = ref.on('value', (snapshot) => {
            setMirindaCount(snapshot.val());
        });

        return () => {
            ref.off('value', listener);
        };
    }, []);

    useEffect(() => {
        const ref = database().ref(`/users/${mobile}/sevenUp`);
        const listener = ref.on('value', (snapshot) => {
            setSevenUpCount(snapshot.val());
        });

        return () => {
            ref.off('value', listener);
        };
    }, []);

    /*---------- Handle ---------- */
    const handleDraggable = () => {
        const randomIndex = Math.floor(Math.random() * imageList.length);
        setRandomImagePrize(imageList[randomIndex].image);
        setRandomImageScore(imageList[randomIndex].score);
        accumulateCounts(randomIndex);  // Update data to Realtime Database
        navigation.navigate('Prize');
    }

    // Accumulate the number of each photo type and score
    const { pepsiCount, setPepsiCount } = useContext(AppContext);
    const { mirindaCount, setMirindaCount } = useContext(AppContext);
    const { sevenUpCount, setSevenUpCount } = useContext(AppContext);
    const { scoreCount, setScoreCount } = useContext(AppContext);

    const accumulateCounts = (index) => {
        const ref = database().ref(`/users/${mobile}`);
        // Image
        if (index === 0 || index === 1) {
            ref.update({
                pepsi: pepsiCount + 1,
            });
            setPepsiCount(pepsiCount + 1);
        } else if (index === 2 || index === 3) {
            ref.update({
                mirinda: mirindaCount + 1,
            });
            setMirindaCount(mirindaCount + 1);
        } else {
            ref.update({
                sevenUp: sevenUpCount + 1,
            });
            setSevenUpCount(sevenUpCount + 1);
        }
        // Score
        if (index === 0 || index === 2 || index === 4) {
            ref.update({
                score: scoreCount + 50,
            });
            setScoreCount(scoreCount + 50);
        } else {
            ref.update({
                score: scoreCount + 100,
            });
            setScoreCount(scoreCount + 100);
        }
    }

    return (
        <LinearGradient colors={['#0063A7', '#02A7F0', '#0063A7']} style={{ flex: 1 }}>
            <Image
                style={{
                    position: 'absolute',
                    top: 153,
                    right: -20,
                    width: 58.43,
                    height: 56.57
                }}
                source={require('./../image/pattern-3/flower.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 485,
                    left: 7
                }}
                source={require('./../image/pattern-3/flower.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 543,
                    right: -15,
                    width: 44.39,
                    height: 42.98
                }}
                source={require('./../image/pattern-3/flower.png')} />
            <Image
                style={{
                    position: 'absolute'
                }}
                source={require('./../image/pattern-3/vector-1.png')} />
            <Image
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                }}
                source={require('./../image/pattern-2/mask-2.png')} />

            <Pressable>
                <Image
                    style={{
                        position: 'absolute',
                        marginTop: 56,
                        marginLeft: 20
                    }}
                    source={require('./../image/pattern-3/arrow-left.png')} />
            </Pressable>

            <Pressable>
                <Image
                    style={{
                        position: 'absolute',
                        right: 0,
                        marginTop: 60,
                        marginRight: 20
                    }}
                    source={require('./../image/icon-log-out.png')} />
            </Pressable>

            <Image
                style={{
                    position: 'absolute',
                    bottom: 0,
                    width: '100%'
                }}
                source={require('./../image/pattern-3/vector-2.png')} />

            <Text style={styles.title}>VUỐT LÊN ĐỂ CHƠI</Text>

            <Text style={styles.number_of_plays}>Bạn còn <Text style={{ color: '#FFDD00', fontSize: 18, fontWeight: 900, fontFamily: 'UTM Swiss 721 Black Condensed' }}>3</Text> lượt chơi miễn phí</Text>

            <Image
                style={{
                    width: 409,
                    marginTop: 6,
                    alignSelf: 'center'
                }}
                source={require('./../image/pattern-3/bg-game.png')} />

            <Image
                style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    top: 587
                    // bottom: 0
                }}
                source={require('./../image/pattern-3/upper-arrow.png')} />

            <Draggable
                imageSource={require('./../image/unicorn.png')}
                x={100}
                y={550}
                maxX={100}
                minX={100}
                minY={400}
                renderSize={220}
                shouldReverse
                onDragRelease={handleDraggable} />
        </LinearGradient>
    )
}

export default Game

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        fontFamily: 'UTM Swiss 721 Black Condensed',
        fontWeight: 900,
        marginTop: 55
    },
    number_of_plays: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'UTM Swiss Condensed',
        fontWeight: 400,
        textAlign: 'center',
        marginTop: 4
    }
})