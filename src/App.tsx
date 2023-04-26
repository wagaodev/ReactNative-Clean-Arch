import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {RootModuleNavigator} from './module/navigation';
import {NavigationContainer} from '@react-navigation/native';
// import {ThemeProvider} from 'styled-components/native';

export const App = () => {
  return (
    // <ThemeProvider theme={theme}>
    <SafeAreaProvider>
      <NavigationContainer>
        <RootModuleNavigator />
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
