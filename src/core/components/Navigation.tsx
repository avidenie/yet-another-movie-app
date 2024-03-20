import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LoginScreen } from '../../auth/screens/LoginScreen';
import { selectIsAuthenticated } from '../../auth/store/authSlice';
import { PopularMoviesScreen } from '../../movies/screens/PopularMoviesScreen';
import { ProfileHeaderButton } from '../../profile/components/ProfileHeaderButton';
import { ProfileScreen } from '../../profile/screens/ProfileScreen';
import { useAppSelector } from '../store/hooks';

export type RootStackParamList = {
  Login: undefined;
  Profile: undefined;
  PopularMovies: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Navigation() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      {isAuthenticated ? (
        <>
          <Stack.Screen
            name="PopularMovies"
            component={PopularMoviesScreen}
            options={{
              title: 'Popular Movies',
              // eslint-disable-next-line react/no-unstable-nested-components
              headerRight: () => <ProfileHeaderButton />,
            }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </>
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack.Navigator>
  );
}
