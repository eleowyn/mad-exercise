import React, {useState} from 'react';
import {
  ScrollView,
} from 'react-native';
import TextInput from './components/TextInput';
import Button from './components/Button';
import Title from './components/Title';
import Subtitle from './components/Subtitle';

const App = () => {
  const [title, setTitle] = useState('Registration');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const onSignIn = () => {
    setTitle(`Selamat Datang ${name}`);
    console.log({email, name, username, address, phone});
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Title text={title}/>
      <Subtitle text="Name"/>
      <TextInput
        placeholder="Masukan nama lengkap anda"
        onChangeText={e => setName(e)}
      />
      <Subtitle text="Username"/>
      <TextInput
        placeholder="Masukan username anda"
        onChangeText={e => setUsername(e)}
      />
      <Subtitle text="Email"/>
      <TextInput
        placeholder="Masukan email anda"
        onChangeText={e => setEmail(e)}
      />
      <Subtitle text="Address"/>
      <TextInput
        placeholder="Masukan alamat anda"
        onChangeText={e => setAddress(e)}
      />
      <Subtitle text="Phone Number"/>
      <TextInput
        placeholder="Masukan nomor telepon anda"
        onChangeText={e => {
            const onlyNumber = e.replace(/[^0-9]/g, '');
            setPhone(onlyNumber);
        }}
      />
      <Button text="Register" onPress={onSignIn}/>

    </ScrollView>
  );
};

export default App;