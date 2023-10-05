import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../../utils'
import { ChatItem, Gap, Header, InputChat } from '../../components'

export default function Chatting({ navigation }) {
    return (
        <View style={styles.page}>
            <Header title={"Nairobi Putri Hayza"} type={"dark-profile"} onPress={() => navigation.goBack()} />
            <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
                <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
                <ChatItem />
                <ChatItem isMe />
                <ChatItem />
                <ChatItem isMe />
                <ChatItem isMe />
            </ScrollView>
            <InputChat />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    content: {
        flex: 1
    },
    chatDate: {
        textAlign: 'center',
        fontSize: 11,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary,
        marginVertical: 20
    }
})