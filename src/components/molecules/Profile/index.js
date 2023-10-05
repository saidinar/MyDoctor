import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DummyUser, IconRemovePhoto } from '../../../assets'
import { Gap } from '../../atoms'
import { colors, fonts } from '../../../utils'

export default function Profile({ name, desc, isRemove, photo, onPress }) {
    return (
        <View style={styles.profile}>
            {!isRemove &&
                <View style={styles.avatarWrapper}>
                    <Image style={styles.avatar} source={photo} />
                    {isRemove && <IconRemovePhoto style={styles.removePhoto} />}
                </View>
            }
            {isRemove &&
                <TouchableOpacity style={styles.avatarWrapper} onPress={onPress}>
                    <Image style={styles.avatar} source={photo} />
                    {isRemove && <IconRemovePhoto style={styles.removePhoto} />}
                </TouchableOpacity>
            }
            {
                name &&
                <View>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.profession}>{desc}</Text>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    avatar: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign: 'center',
        marginTop: 16
    },
    profession: {
        fontSize: 18,
        color: colors.text.secondary,
        fontFamily: fonts.primary[400],
        textAlign: 'center'
    },
    profile: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    removePhoto: {
        position: 'absolute',
        bottom: 8,
        right: 8
    }
})