import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.header}>Welcome</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Username</Text>
      </View>

      <TextInput
          style={styles.input}
          placeholder="Masukan Username Anda"
        />
      <View style={styles.container}>
        <Text style={styles.text}>Password</Text>
      </View>
      <TextInput
          style={styles.input}
          placeholder="Masukan Password Anda"
        />


      <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  text: {
    fontSize: 25,
  },
  input: {
    borderWidth: 2,
    borderColor: 'grey',
    fontSize: 17,
    marginLeft: 15,
    marginRight: 20,
    marginTop: 1,
    padding: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#ff7f00',
    paddingVertical: 15,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
