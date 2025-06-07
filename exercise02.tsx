import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.header}>Curriculum Vitae</Text>
      </View>

      <Image
        style={styles.profileImage}
        source={require('./assets/profile.jpeg')}
      />

      <View style={styles.container}>
        <Text style={styles.text}>Name: Elshera Amazing Eowyn Dahlan</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Nationality: Indonesia</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Email: elshera.dahlan@gmail.com</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Number: +628975574089</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>
          A UI/UX Designer Enthusiast, Cloud Engineering Enthusiast
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>
          Experience: Oct 2023 - Present Freelance Capcut Template Creator
        </Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>
          Education: July 2023 - Present - Klabat University, Informatics Major, Computer Science Faculty
        </Text>
        <Image
          style={styles.profileImage}
          source={require('./assets/logounklab.png')}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>
          Education: Juni 2020 - May 2023 - SMA Kristen 1 Tomohon (MIPA)
        </Text>
        <Image
          style={styles.logo}
          source={{ uri: 'data:image/png;base64, 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' }}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Skills</Text>
        <Image
          style={styles.img3}
          source={{
            uri: 'https://media.licdn.com/dms/image/v2/D5612AQEt2JaeIgtGOQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1695099748335?e=2147483647&v=beta&t=dr8VI39p67A0ska-B3Yi7y2K9lagM8y9dJIafEXaLNc',
          }}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Contact Me</Text>

        <TextInput
          style={styles.input}
          placeholder="Your Name"
        />

        <TextInput
          style={styles.input}
          placeholder="Your Email"
        />

        <TextInput
          style={styles.input}
          placeholder="Reason"
        />
      </View>

      <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <Text style={styles.buttonText}>submit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <Text style={styles.buttonText}>PDF</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginVertical: 20,
  },
  img3: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 300,
    height: 150,
    alignSelf: 'center',
    marginVertical: 20,
    resizeMode: 'contain',
  },
  input: {
    borderWidth: 2,
    borderColor: '#000000',
    fontSize: 20,
    margin: 20,
    padding: 30,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 30,
    borderRadius: 20,
    margin: 20,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
  },
});

export default App;
