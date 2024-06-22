import React from 'react'
import { TextInput, StyleSheet, View } from 'react-native'

const CustomTextInput = ({
  text,
  onChange,
  multiline = false,
  placeholder,
  numberOfLines,
}) => (
  <View style={styles.container}>
    <TextInput
      multiline={multiline}
      numberOfLines={numberOfLines}
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChange}
      defaultValue={text}
    />
  </View>
)

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: '#DDDDDD',
    padding: 10,borderRadius: 5, // Menambahkan border radius
    fontSize: 16, // Mengatur ukuran font
  },
  container: {
    marginTop: 20,
    width: '100%', // Mengatur lebar menjadi penuh
    alignItems: 'center', // Pusatkan komponen
  },
})

export default CustomTextInput