import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '../store/store';
import { Navigation } from './Navigation';
import { ThemeProvider } from './ThemeProvider';
import { NavigationContainer } from '@react-navigation/native';

export function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
