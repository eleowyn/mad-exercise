import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Button = ({text, color = 'orange',textColor = 'black'}) => {
  return (
    <TouchableOpacity style={styles.button(color)} activeOpacity={0.5}>
          <Text style={styles.buttonText(textColor)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    paddingVertical: 10,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  }),
  buttonText: textColor => ({
    color: textColor,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  }),
});