import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import { DummyDoctor9 } from '../../../assets'

export default function Other() {
    return (
        <View style={styles.container}>
            <Image source={DummyDoctor9} style={styles.avatar} />
            <View>
                <View style={styles.chatContent}>
                    <Text style={styles.chatText}>Ibu dokter, apakah memakan jeruk tiap hari itu buruk?</Text>
                </View>
                <Text style={styles.chatTime}>4.20 AM</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        marginBottom: 20,
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    chatContent: {
        padding: 12,
        paddingRight: 18,
        backgroundColor: colors.primary,
        borderRadius: 10,
        borderBottomLeftRadius: 0,
        maxWidth: '80%',
    },
    chatText: {
        fontSize: 14,
        fontFamily: fonts.primary[400],
        color: colors.white
    },
    chatTime: {
        fontSize: 11,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary,
        marginTop: 8
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        marginRight: 12
    },
})