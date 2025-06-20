import {StyleSheet, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from './components/UserCard/index';

const Exercise7 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
  const fetchUsers = async () => {
    try {
      const [res1, res2] = await Promise.all([
        axios.get('https://reqres.in/api/users?page=1'),
        axios.get('https://reqres.in/api/users?page=2')
      ]);
      setUsers([...res1.data.data, ...res2.data.data]);
    } catch (error) {
      console.error(error);
    }
  };

  fetchUsers();
}, []);

  return (
    <ScrollView>
      <Text style={styles.title}>User List</Text>
      {users.map(user => (
        <Card
          first={user.first_name}
          last={user.last_name}
          avatar={user.avatar}
          email={user.email}
        />
      ))}
    </ScrollView>
  );
};

export default Exercise7;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    margin: 30,
    fontWeight: 'bold',
  },
});