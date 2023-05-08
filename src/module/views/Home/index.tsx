import { createUser } from '../../store';
import React from 'react';
import { View, Text } from 'react-native';

export const Home = () => {
  const users = createUser((state) => state.users);

  return (
    <View>
      {/* {users.map((user) => (
        <Text>Olá {user.username}</Text>
      ))} */}
      {/* <Text>Olá {users[0].username}</Text> */}
      <Text>Olá</Text>
    </View>
  );
};
