import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer } from 'redux-persist';
import { RootState } from '../../core/store/store';

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.isAuthenticated = true;
    },
    logout: state => {
      state.isAuthenticated = false;
    },
  },
});

const persistConfig: PersistConfig<AuthState> = {
  key: 'auth',
  storage: AsyncStorage,
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);

export const authActions = authSlice.actions;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;
