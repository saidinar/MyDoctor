import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import { Hospital1 } from '../../../assets'

export default function ListHospital({type, name, address, pic}) {
    return (
        <View style={styles.container}>
            <Image style={styles.picture} source={pic} />
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>{type}</Text>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.address} >{address}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: colors.border,
        borderBottomWidth: 1,
        padding: 12,
    },
    titleWrapper: {
        flex: 1
    },
    picture: {
        width: 80,
        height: 60,
        borderRadius: 11,
        marginRight: 16
    },
    title: {
        fontFamily: fonts.primary[600],
        fontSize: 16,
        maxWidth: '90%',
        color: colors.text.primary
    },
    address: {
        fontFamily: fonts.primary[400],
        fontSize: 12,
        color: colors.text.secondary,
        marginTop: 6
    }
})