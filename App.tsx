import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'react-native-elements';

const theme = {
  colors: {
    primary: '#008000',
  }
}

import Routes from './src/routes';

export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <NavigationContainer>
        <StatusBar hidden={true}/>
        <Routes />
      </NavigationContainer>
    </ThemeProvider>
  )
}