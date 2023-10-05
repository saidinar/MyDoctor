import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'

export default function IsMe() {
  return (
    <View style={styles.container}>
            <View style={styles.chatContent}>
                <Text style={styles.chatText}>Ibu dokter, apakah memakan jeruk tiap hari itu buruk?</Text>
            </View>
            <Text style={styles.chatTime}>4.20 AM</Text>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        marginBottom: 20,
        alignItems: 'flex-end'
    },
    chatContent:{
        padding: 12,
        paddingRight: 18,
        backgroundColor:  colors.cardLight,
        borderRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 0,
        maxWidth: '70%',
    },
    chatText:{
        fontSize: 14,
        fontFamily: fonts.primary[400],
        color: colors.text.primary 
    },
    chatTime: {
        fontSize: 11,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary,
        marginTop: 8
    }
})