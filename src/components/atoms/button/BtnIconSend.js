import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconSendDark, IconSendLight } from '../../../assets'
import { colors } from '../../../utils'

export default function BtnIconSend({disable}) {
  return (
    <TouchableOpacity style={styles.container(disable)} disabled={disable}>
      {disable ? <IconSendDark/> : <IconSendLight/>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: (disable) => ({
        height: 45,
        width: 45,
        backgroundColor: disable ? colors.disable : colors.tertiary,
        borderRadius: 10,
        alignItems:'center',
        justifyContent: 'center',
        paddingRight: 3,
        paddingBottom: 8,
        paddingLeft:8,
        paddingTop: 3
    })
})