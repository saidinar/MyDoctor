import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../utils'
import { Header, List } from '../../components'
import { DummyDoctor10, DummyDoctor11, DummyDoctor7, DummyDoctor8, DummyDoctor9 } from '../../assets'

export default function ChooseDoctor({navigation}) {
    return (
        <View style={styles.page}>
            <Header title={"Pilih Dokter Anak"} type={"dark"} onPress={() => navigation.goBack()}/>
            <List onPress={() => navigation.navigate('Chatting')} type={"next"} profile={DummyDoctor7} name={"Alexander Jannie"} desc={"Wanita"} />
            <List onPress={() => navigation.navigate('Chatting')} type={"next"} profile={DummyDoctor8} name={"John McParker Steve"} desc={"Pria"} />
            <List onPress={() => navigation.navigate('Chatting')} type={"next"} profile={DummyDoctor9} name={"Nairobi Putri Hayza"} desc={"Wanita"} />
            <List onPress={() => navigation.navigate('Chatting')} type={"next"} profile={DummyDoctor10} name={"James Rivillia"} desc={"Pria"} />
            <List onPress={() => navigation.navigate('Chatting')} type={"next"} profile={DummyDoctor11} name={"Liu Yue Tian Park"} desc={"Wanita"} />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
})