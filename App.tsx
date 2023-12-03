/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// In App.js in a new project

import * as React from 'react';
import MainNavigation from './src/navigation/MainNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <MainNavigation />
    </SafeAreaProvider>
  );
}

export default App;
