import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../../utils'
import { IconEditProfile, IconHelp, IconLanguage, IconNext, IconRate } from '../../../assets'
import { Gap } from '../../atoms'

export default function List({ profile, name, desc, type, onPress, icon }) {
  const Icon = () =>{
    if (icon === 'edit-profile'){
      return <IconEditProfile/>
    }
    if (icon === 'language'){
      return <IconLanguage/>
    }
    if (icon === 'rate'){
      return <IconRate/>
    }
    if (icon === 'help'){
      return <IconHelp/>
    }
    return <IconEditProfile/>
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: "center" }}>
        {icon ? <Icon/> : <Image source={profile} style={styles.avatar} />}
        <Gap width={16}/>
        <View styles={styles.content}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.desc} >{desc}</Text>
        </View>
      </View>
      {type === "next" && <IconNext />}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: colors.border,
    borderBottomWidth: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: "space-between"
  },
  content: {
    flex: 1
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary
  },
  desc: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.text.secondary,
    marginTop: 2
  },
})