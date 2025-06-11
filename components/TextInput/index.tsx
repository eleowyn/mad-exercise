import React from 'react';
import {TextInput as Input, StyleSheet} from 'react-native';

const TextInput = ({placeholder}) => {
  return <Input style={styles.input} placeholder={placeholder} />;
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'grey',
    fontSize: 17,
    marginLeft: 15,
    marginRight: 20,
    marginBottom: 10,
    marginTop: 1,
    padding: 20,
    borderRadius: 10,
  },
});