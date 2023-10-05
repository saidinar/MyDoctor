import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { ILLogo } from '../../assets';
import { colors } from '../../utils';
import { auth } from '../../config/Firebase';
import { onAuthStateChanged, getAuth } from "firebase/auth";

export default function Splash({ navigation }) {

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setTimeout(() => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      }, 3000)
    });
    return () => unsubscribe();
  }, [navigation])
  return (
    <View style={styles.page}>
      <ILLogo />
      <Text
        style={styles.title}
      >
        My Doctor
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: '600',
    color: colors.text.primary
  }
})