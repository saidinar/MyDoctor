import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Gap, Header, Input, Loading } from '../../components'
import { colors, storeData, useForm } from '../../utils'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database } from '../../config/Firebase';
import { ref, set } from 'firebase/database';
import showError from '../../utils/showMessage';


export default function Register({ navigation }) {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: ''
  })
  const [isLoading, setLoading] = useState(false)

  const onContinue = () => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        setLoading(false)
        // Signed in 
        const user = userCredential.user;
        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
          uid: user.uid
        }
        setForm('reset')
        set(ref(database, 'users/' + user.uid), data);
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
  },
})