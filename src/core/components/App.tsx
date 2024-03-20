import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { Navigation } from './Navigation';
import { ThemeProvider } from './ThemeProvider';

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </Provider>
  );
}
