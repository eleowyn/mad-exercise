import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Subtitle = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default Subtitle;

const styles = StyleSheet.create({
  text: {
    paddingLeft: 20,
    paddingBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
});