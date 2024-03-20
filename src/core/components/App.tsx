import React from 'react';
import { LoginScreen } from '../../auth/screens/LoginScreen';
import { ThemeProvider } from './ThemeProvider';

export function App() {
  return (
    <ThemeProvider>
      <LoginScreen />
    </ThemeProvider>
  );
}
