import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconBackDark, IconBackLight } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'
import DarkProfile from './darkProfile'

export default function Header({ title, onPress, type }) {
  if (type === 'dark-profile'){
    return(
      <DarkProfile onPress={onPress}/>
    )
  }
  return (
    <View style={styles.container(type)}>
      <Button type={'icon-only'} icon={type === 'dark' ? 'back-light' : 'back-dark'} onPress={onPress} />
      <Text style={styles.Text(type)}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: (type) => ({
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: type === "dark" ? colors.secondary : colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomLeftRadius: type === "dark" ? 20 : 0,
    borderBottomRightRadius: type === "dark" ? 20 : 0,
  }),
  Text: (type) => ({
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: type === "dark" ? colors.white : colors.text.primary
  })
})