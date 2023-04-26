import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import {ThemeProvider} from 'styled-components/native';

export const App = () => {
  return (
    // <ThemeProvider theme={theme}>
    <SafeAreaProvider>
      <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
        <Text style={{alignSelf: 'center'}}>Hello World</Text>
      </View>
    </SafeAreaProvider>
  );
};

export default App;
