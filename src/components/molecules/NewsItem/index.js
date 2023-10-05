import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import { DummyNews1 } from '../../../assets'

export default function NewsItem(item) {
    console.log('item: ', item)
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{item.item.title}</Text>
                <Text style={styles.date} >{item.item.date}</Text>
            </View>
            <Image style={styles.image} source={{uri: item.item.image}} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
        paddingBottom: 12,
        paddingTop: 16,
        paddingHorizontal: 16
    },
    titleWrapper:{
        flex: 1
    },
    image:{
        width: 80,
        height: 60,
        borderRadius: 11
    },
    title: {
        fontFamily: fonts.primary[600],
        fontSize: 16,
        maxWidth: '90%',
        color: colors.text.primary
    },
    date: {
        fontFamily: fonts.primary[400],
        fontSize: 12,
        color: colors.text.secondary,
        marginTop: 4
    }
})