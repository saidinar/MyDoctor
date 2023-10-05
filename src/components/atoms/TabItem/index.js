import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconDoctor, IconDoctorActive, IconHospitals, IconMessages, IconMessagesActive, IconHospitalsActive } from '../../../assets'
import { colors, fonts } from '../../../utils'

const TabItem = ({ title, active, onPress, onLongPress }) => {
    const Icon = () => {
        if (title === 'Doctor') {
            return active ? <IconDoctorActive /> : <IconDoctor />
        }
        if (title === 'Messages') {
            return active ? <IconMessagesActive /> : <IconMessages />
        }
        if (title === 'Hospitals') {
            return active ? <IconHospitalsActive /> : <IconHospitals />
        }
        return <IconDoctor />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TabItem;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    text: (active) => ({
        color: active ? colors.text.menuActive : colors.text.menuInactive,
        fontFamily: fonts.primary[600],
        fontSize: 10,
        marginTop: 4
    })
})