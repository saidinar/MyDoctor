import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILLogo } from '../../assets'
import { Button, Gap, Input, Link } from '../../components'
import { colors, fonts, storeData, useForm } from '../../utils'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, database } from '../../config/Firebase';
import { ref, get, child } from 'firebase/database';
import { useDispatch } from 'react-redux'
import showError from '../../utils/showMessage'

export default function Login({ navigation }) {
    const [form, setForm] = useForm({
        email: '',
        password: ''
    })
    const dispatch = useDispatch();

    const onSignIn = () => {
        dispatch({
            type: 'SET_LOADING',
            value: true
        })
        signInWithEmailAndPassword(auth, form.email, form.password).then(success => {
            dispatch({
                type: 'SET_LOADING',
                value: false
            });
            const dbRef = ref(database);
            get(child(dbRef, `users/${success.user.uid}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    storeData('user', snapshot.val())
                    navigation.replace('MainApp')
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        })
            .catch(error => {
                dispatch({
                    type: 'SET_LOADING',
                    value: false
                });
                const errorMessage = error.code === 'auth/user-not-found' ? "User Not Found" : "Wrong Password"
                showError(errorMessage);
            })
    }

    return (
            <View style={styles.page}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Gap height={40} />
                    <ILLogo />
                    <Text style={styles.title}>Masuk dan mulai
                        berkonsultasi</Text>
                    <Input label={"Email Address"} value={form.email} onChangeText={value => { setForm("email", value) }} />
                    <Gap height={24} />
                    <Input label={"Password"} value={form.password} onChangeText={value => { setForm("password", value) }} />
                    <Link title={'Forgot My Password'} size={12} />
                    <Gap height={40} />
                    <Button title={"Sign In"} onPress={onSignIn} />
                    <Gap height={30} />
                    <Link title={'Create New Account'} size={16} align={'center'} onPress={() => navigation.navigate('Register')} />
                </ScrollView>
            </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 40,
        flex: 1,
    },
    title: {
        fontSize: 20,
        color: colors.text.primary,
        marginVertical: 40,
        fontFamily: fonts.primary[600],
        maxWidth: 155
    }
})