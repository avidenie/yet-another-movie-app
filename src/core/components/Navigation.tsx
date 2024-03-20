import React from 'react';
import { LoginScreen } from '../../auth/screens/LoginScreen';
import { selectIsAuthenticated } from '../../auth/store/authSlice';
import { ProfileScreen } from '../../profile/screens/ProfileScreen';
import { useAppSelector } from '../store/hooks';

export function Navigation() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  return isAuthenticated ? <ProfileScreen /> : <LoginScreen />;
}
