import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'

export default function ProfileItem({label, value}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value} >{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    padding: 16,
  },
  label: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.secondary
  },
  value: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    color: colors.text.primary,
    marginTop: 6
  },
})