import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'
import { colors, fonts } from '../../../utils'
import {Picker} from '@react-native-picker/picker';

export default function Input({label, value, select, onChangeText, secureTextEntry, disable, onValueChange, selectItem}) {
  const [border, setBorder] = useState(colors.border);
  const onFocusForm = () =>{
    setBorder(colors.tertiary)
  }
  const onBlurForm = () =>{
    setBorder(colors.border)
  }
  if (select) {
    return (
      <View>
        <Text style={styles.label}>{label}</Text>
        <View style={styles.picker}>
          <Picker selectedValue={value} onValueChange={onValueChange}>
            {selectItem.map(item => {
              return (
                <Picker.Item
                  key={item.id}
                  label={item.label}
                  value={item.value}
                />
              );
            })}
          </Picker>
        </View>
      </View>
    );
  }
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
      onFocus={onFocusForm} 
      onBlur={onBlurForm} 
      style={styles.input(border)}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      editable={!disable}
      selectTextOnFocus={!disable}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    input: (border) => ({
        borderWidth: 1,
        borderColor: border,
        borderRadius: 10,
        height: 45,
        padding: 12
    }),
    label:{
        color: colors.text.secondary,
        fontSize: 16,
        fontFamily: fonts.primary[400],
        marginBottom: 6
    }
})