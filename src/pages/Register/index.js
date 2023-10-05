import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Gap, Header, Input, Loading } from '../../components'
import { colors, storeData, useForm } from '../../utils'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from '../../config/Firebase';
import { ref, set } from 'firebase/database';
import showError from '../../utils/showMessage';


export default function Register({ navigation }) {
  // const [form, setForm] = useForm({
  //   fullName: '',
  //   profession: '',
  //   email: '',
  //   password: ''
  // })
  const [isLoading, setLoading] = useState(false)

  const [form, setForm] = useForm({
    fullName: '',
    category: 'dokter umum',
    university: '',
    str_number: '',
    hospital_address: '',
    gender: 'pria',
    email: '',
    password: '',
  });
  const [itemCategory] = useState([
    {
      id: 1,
      label: 'Dokter Umum',
      value: 'dokter umum',
    },
    {
      id: 2,
      label: 'Psikiater',
      value: 'psikiater',
    },
    {
      id: 3,
      label: 'Dokter Obat',
      value: 'dokter obat',
    },
    {
      id: 4,
      label: 'Dokter Anak',
      value: 'dokter anak',
    },
    {
      id: 5,
      label: 'Dokter Bedah',
      value: 'dokter bedah',
    },
  ]);

  const [itemGender] = useState([
    {
      id: 1,
      label: 'Pria',
      value: 'pria',
    },
    {
      id: 2,
      label: 'Wanita',
      value: 'wanita',
    },
  ]);

  const onContinue = () => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        setLoading(false)
        // Signed in 
        const user = userCredential.user;
        // const data = {
        //   fullName: form.fullName,
        //   profession: form.profession,
        //   email: form.email,
        //   uid: user.uid
        // }
        const data = {
          fullName: form.fullName,
          profession: form.category,
          category: form.category,
          rate: 0,
          university: form.university,
          str_number: form.str_number,
          hospital_address: form.hospital_address,
          gender: form.gender,
          email: form.email,
          uid: user.uid,
        };
        setForm('reset')
        set(ref(database, 'users/' + user.uid), data);
        set(ref(database, 'doctors/' + user.uid), data);
        storeData('user', data);
        navigation.navigate("UploadPhoto", data);
        // ...
      })
      .catch((error) => {
        setLoading(false)
        const errorMessage = error.code === 'auth/email-already-in-use' ? 'The email address is already in use by another account'
          : error.message;
        showError(errorMessage);
        // ..
      });
  }

  return (
    <>
      <View style={styles.page}>
        <Header title={"Daftar Akun"} onPress={() => navigation.goBack()} />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input label={"Fullname"} value={form.fullName} onChangeText={value => setForm("fullName", value)} />
            <Gap height={24} />
            <Input label={"Pekerjaan"} value={form.profession} onChangeText={(value) => setForm("profession", value)} />
            <Gap height={24} />
            <Input label={"Email Address"} value={form.email} onChangeText={(value) => setForm("email", value)} />
            <Gap height={24} />
            <Input label={"Password"} value={form.password} onChangeText={(value) => setForm("password", value)} secureTextEntry />
            <Gap height={40} />
            <Input
            label="Kategori"
            value={form.category}
            onValueChange={value => setForm('category', value)}
            select
            selectItem={itemCategory}
          />
          <Gap height={24} />
          <Input
            label="Universitas"
            value={form.university}
            onChangeText={value => setForm('university', value)}
          />
          <Gap height={24} />
          <Input
            label="Nomor STR"
            value={form.str_number}
            onChangeText={value => setForm('str_number', value)}
          />
          <Gap height={24} />
          <Input
            label="Alamat Rumah Sakit"
            value={form.hospital_address}
            onChangeText={value => setForm('hospital_address', value)}
          />
          <Gap height={24} />
          <Input
            label="Jenis Kelamin"
            value={form.gender}
            onValueChange={value => setForm('gender', value)}
            select
            selectItem={itemGender}
          />
          <Gap height={24} />
          <Input
            label="Email"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={24} />
            <Button title={"Continue"} onPress={onContinue} />
          </ScrollView>
        </View>
      </View>
      {isLoading && <Loading />}
    </>
  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1
  },
  content: {
    padding: 40,
    paddingTop: 0,
    paddingBottom: 100
  },
})