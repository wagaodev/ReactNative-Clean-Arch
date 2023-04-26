import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Starter} from '../views';

const {Navigator, Screen} = createNativeStackNavigator();

export const RootModuleNavigator = () => {
  return (
    <Navigator
    // screenOptions={{
    //   headerLeft: () => <GoBack />,
    //   contentStyle: {
    //     backgroundColor: colors.white,
    //   },
    //   headerBackTitleVisible: false,
    //   headerStyle: {
    //     backgroundColor: colors.primary500,
    //   },
    //   headerTintColor: colors.white,
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   },
    // }}
    >
      <Screen
        name="Starter"
        component={Starter}
        options={{
          headerTitle: 'Home',
        }}
      />
    </Navigator>
  );
};
