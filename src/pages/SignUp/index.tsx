import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header, TextInput} from '../../components/molecules';
import {Button, Gap} from '../../components/atoms';
import Profile from '../../assets/pic.svg';

const SignUp = () => {
  return (
    <View style={styles.pageContainer}>
      <Header text="Sign In" />
      <View style={styles.contentContainer}>
        <Gap height={15} />
        <View style={styles.profile}>
            <Profile/>
        </View>
        <Gap height={26} />
        <TextInput
          text="Email Address"
          placeholder="Enter your email address"
        />
        <Gap height={16} />
        <TextInput text="Password" placeholder="Enter your password" />
        <Gap height={24} />
        <Button text="Sign In" />
        <Gap height={12} />
        <Button
          text="Create New Account"
          color="#8D92A3"
          buttonColor="#FFFFFF"
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: 24,
  },
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});