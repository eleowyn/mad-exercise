import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const Exercise05 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.blackSquare}/>
        <View style={styles.yellowSquare}/>
        <View style={styles.blackSquare}/>
      </View>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('./assets/logoUnklabb.png')}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.blackSquare}/>
        <View style={styles.yellowSquare}/>
        <View style={styles.blackSquare}/>
      </View>
    </View>
  );
};

export default Exercise05;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  topContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 150,
    paddingHorizontal: 16,
  },
  bottomContainer: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 150,
  },
  blackSquare: {
    width: 80,
    height: 80,
    backgroundColor: 'black',
    marginHorizontal: 8,
  },
  yellowSquare: {
    width: 80,
    height: 80,
    backgroundColor: 'yellow',
    marginHorizontal: 8,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 400,
    height: 90,
  },
});

