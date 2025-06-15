import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  text: {
    padding: 20,
    paddingBottom: 30,
    fontSize: 50,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});