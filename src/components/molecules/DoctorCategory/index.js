import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ILCatUmum, ILCatPsikiater, ILCatObat } from '../../../assets'
import { colors, fonts } from '../../../utils'

export default function DoctorCategory({category, onPress}) {
    const Icon = () => {
        if (category === "dokter umum"){
            return <ILCatUmum style={styles.illustration} />
        }
        if (category === "psikiater"){
            return <ILCatPsikiater style={styles.illustration} />
        }
        if (category === "dokter obat"){
            return <ILCatObat style={styles.illustration}/>
        }

        return <ILCatUmum style={styles.illustration} />
    }

    const categoryText = () => {
        if (category === "dokter umum"){
            return "dokter umum"
        }
        if (category === "psikiater"){
            return "psikiater"
        }
        if (category === "dokter obat"){
            return "dokter obat"
        }
        if (category === "dokter anak"){
            return "dokter anak"
        }
        if (category === "dokter kandungan"){
            return "dokter kandungan"
        }

        return "dokter obat"
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon/>
            <Text style={styles.label}>Saya Butuh</Text>
            <Text style={styles.category}>{categoryText()}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 130,
        backgroundColor: colors.cardLight,
        marginRight: 10,
        borderRadius: 10,
        padding: 12,
        alignSelf: 'flex-start'
    },
    label: {
        fontFamily: fonts.primary[300],
        color: colors.text.primary,
        fontSize: 12
    },
    category: {
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        fontSize: 12
    },
    illustration: {
        marginBottom: 28
    }
})