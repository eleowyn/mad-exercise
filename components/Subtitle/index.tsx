import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Subtitle = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default Subtitle;

const styles = StyleSheet.create({
  text: {
    padding: 15,
    fontSize: 25,
    marginVertical: 10,
  },
});