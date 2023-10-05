import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'

export default function InputChat() {
    const [disable, setDisable] = useState(true)
    const [text, setText] = useState('')
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder={"Tulis Pesan Untuk Nairobi"}
                value={text}
                onChangeText={(text) => setText(text)} />
            {/* <View style={styles.sendBox}><Text>s</Text></View> */}
            <Button type={'btn-icon-send'} disable={text.length === 0 } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flexDirection: 'row',
        alignContent: 'space-between'
    },
    input: {
        maxHeight: 45,
        backgroundColor: colors.disable,
        borderRadius: 10,
        flex: 1,
        marginRight: 10,
        padding: 14,
        fontSize: 14,
        fontFamily: fonts.primary[400],
        // color: colors.text.subTitle,
    }
})