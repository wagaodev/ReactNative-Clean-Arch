import React from 'react';
import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootModuleNavigator } from './module/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';

import { theme } from './global';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NativeBaseProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootModuleNavigator />
            <StatusBar
              barStyle='light-content'
              translucent
              backgroundColor='transparent'
            />
          </NavigationContainer>
        </SafeAreaProvider>
      </NativeBaseProvider>
    </ThemeProvider>
  );
};

export default App;
