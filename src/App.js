/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import Routes from './routes';

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#ff0044'} />
      <Routes />
    </NavigationContainer>
  );
}

export default App;
