import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Title = ({placeholder}) => {
  return <Text style={styles.text}>Welcome</Text>;
};

export default Title;

const styles = StyleSheet.create({
  text: {
    padding: 15,
    fontSize: 50,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});