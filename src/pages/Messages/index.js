import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts } from '../../utils'
import { List } from '../../components'
import { DummyDoctor1, DummyDoctor2, DummyDoctor3 } from '../../assets'

export default function Messages({navigation}) {
    const [doctors] = useState([
        {
            id: 1,
            profile: DummyDoctor1,
            name: "Alexander Jannie",
            desc: "Baik ibu, terima kasih banyak atas wakt..."
        },
        {
            id: 2,
            profile: DummyDoctor2,
            name: "Nairobi Putri Hayza",
            desc: "Oh tentu saja tidak karena jeruk it..."
        },
        {
            id: 3,
            profile: DummyDoctor3,
            name: "John McParker Steve",
            desc: "Oke menurut pak dokter bagaimana unt..."
        }
    ])
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.text}>Messages</Text>
                {
                    doctors.map(doctor => {
                        return <List key={doctor.id} profile={doctor.profile} name={doctor.name} desc={doctor.desc} onPress={() => navigation.navigate("Chatting")}/>
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.secondary,
        flex: 1,
    },
    content: {
        flex: 1,
        backgroundColor: colors.white,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    text: {
        fontFamily: fonts.primary[600],
        fontSize: 20,
        color: colors.text.primary,
        marginTop: 30,
        marginLeft: 16
    }
})