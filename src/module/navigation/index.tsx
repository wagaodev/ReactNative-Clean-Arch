import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Login } from '../views';
import { RootStackParamList } from './types';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export const RootModuleNavigator = () => {
  return (
    <Navigator initialRouteName='Login'>
      <Screen
        name='Home'
        component={Home}
        options={{
          headerTitle: 'Home',
        }}
      />
      <Screen
        name='Login'
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};
