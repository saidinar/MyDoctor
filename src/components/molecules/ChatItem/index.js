import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import IsMe from './IsMe'
import Other from './Other'

export default function ChatItem({ isMe }) {
    if (isMe) {
        return <IsMe />
    }
    return <Other />
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        marginBottom: 20,
        alignItems: 'flex-start'
    },
    chatContent: {
        padding: 12,
        paddingRight: 18,
        backgroundColor: colors.primary,
        borderRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 0,
        maxWidth: '70%',
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
    }
})