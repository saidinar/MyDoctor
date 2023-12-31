import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'
import { DummyDoctor9 } from '../../../assets'

export default function DarkProfile({onPress}) {
    return (
        <View style={styles.container}>
            <Button type={'icon-only'} icon={'back-light'} onPress={onPress}/>
            <View style={styles.content}>
                <Text style={styles.name}>Nairobi Putri Hayza</Text>
                <Text style={styles.desc}>Dokter Anak</Text>
            </View>
            <Image source={DummyDoctor9} style={styles.avatar} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 16,
        paddingVertical: 30,
        backgroundColor: colors.secondary,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    content: {
        flex: 1
    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 46 / 2
    },
    name: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.white
    },
    desc: {
        textAlign: 'center',
        fontSize: 14,
        fontFamily: fonts.primary[400],
        color: colors.text.subTitle,
        marginTop: 6
    }
})