import React from 'react';
import {
  ScrollView,
} from 'react-native';
import TextInput from './components/TextInput';
import Button from './components/Button';
import Title from './components/Title';
import Subtitle from './components/Subtitle';

const App = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Title/>
      <Subtitle text="Username"/>
      <TextInput placeholder="Masukan email anda" />
      <Subtitle text="Password"/>
      <TextInput placeholder="Masukan password anda" />
      <Button text="Sign In" />
      <Button text="Google" color="red" textColor="white" />
      <Button text="Facebook" color="blue" textColor="white" />
      <Button text="Apple" color="black" textColor="white" />

    </ScrollView>
  );
};

export default App;
