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

import {StoreProvider} from './hooks/storage';

import Routes from './routes';

function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <StatusBar backgroundColor={'darkblue'} />
        <Routes />
      </NavigationContainer>
    </StoreProvider>
  );
}

export default App;
