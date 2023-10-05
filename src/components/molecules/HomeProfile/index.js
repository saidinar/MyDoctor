import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DummyUser, ILNullPhoto } from '../../../assets'
import { Gap } from '../../atoms'
import { colors, fonts, getData } from '../../../utils'

export default function HomeProfile({ onPress }) {
  const [profile, setProfile] = useState({
    photo: ILNullPhoto,
    fullName: '',
    profession: ''
  });
  useEffect(() => {
    getData('user').then(res => {
      setProfile({ ...res, photo: { uri: res.photo } });
    })
  },[profile])
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.avatar} source={profile.photo} />
      <Gap width={12} />
      <View>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.profession} >{profile.profession}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
    textTransform: 'capitalize'
  },
  profession: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.text.secondary,
    textTransform: 'capitalize'
  }
})