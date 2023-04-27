import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Starter, Login } from '../views';
import { RootStackParamList } from './types';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export const RootModuleNavigator = () => {
  return (
    <Navigator initialRouteName='Login'>
      <Screen
        name='Starter'
        component={Starter}
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
