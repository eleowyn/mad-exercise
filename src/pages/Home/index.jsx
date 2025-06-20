import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../components/atoms';
import HeaderHome from '../../components/molecules/HeaderHome';
import Profile from '../../assets/pic1.svg';
import BalanceCard from '../../components/molecules/BalanceCard';

const Home = () => {
  return (
    <View style={styles.pageContainer}>
      <HeaderHome text="Hi, John Doe"/>
      <View style={styles.profile}>
            <Profile/>
        </View>
      <Text style={styles.Subtitle}>Have you track your money today?</Text>
      <View style={styles.contentContainer}>
        <BalanceCard/>
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

export default Home;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: 24,
  },
  Subtitle: {
    color: '#020202',
    fontFamily: 'Poppins',
    fontSize: 14,
    marginLeft: 24,
  },
  profile: {
  alignItems: 'flex-end',
  marginRight: 24,
},
});