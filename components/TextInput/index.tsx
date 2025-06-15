import React from 'react';
import {TextInput as Input, StyleSheet} from 'react-native';

const TextInput = ({placeholder, onChangeText, secureTextEntry}) => {
  return (
    <Input
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#aaa"
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    fontSize: 17,
    marginLeft: 15,
    marginRight: 20,
    marginBottom: 12,
    marginTop: 1,
    padding: 15,
    borderRadius: 20,
  },
});