import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Hospital1, Hospital2, Hospital3, ILHospitalBackground } from '../../assets'
import { colors, fonts } from '../../utils'
import { ListHospital } from '../../components'
import { database } from '../../config/Firebase'
import { child, get, ref } from 'firebase/database'

export default function Hospitals() {
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, 'hospitals/')).then((snapshot) => {
      if (snapshot.exists()) {
        setHospitals(snapshot.val());
        console.log('hospitals: ', hospitals, snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      showError(error.message)
    });
  }, [])
  return (
    <View style={styles.page}>
      <ImageBackground style={styles.background} source={ILHospitalBackground}>
        <Text style={styles.title}>Nearby Hospital</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        {
          hospitals.map(item => {
            return (
              <ListHospital key={item.id} type={item.type} name={item.name} address={item.address} pic={{ uri: item.image }} />
            )
          })
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    height: 240,
    paddingTop: 30
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14
  },
  page: {
    backgroundColor: colors.secondary,
    flex: 1
  },
  title: {
    fontFamily: fonts.primary[600],
    fontSize: 20,
    color: colors.white,
    alignSelf: 'center'
  },
  desc: {
    fontFamily: fonts.primary[300],
    fontSize: 14,
    color: colors.white,
    alignSelf: 'center',
    marginTop: 6,
  }
})