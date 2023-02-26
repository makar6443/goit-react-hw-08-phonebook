import { createSlice } from '@reduxjs/toolkit';
import { isAnyOf } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import { authRegisterThunk, authLoginThunk, authLogOutThunk } from './auth.thunk';
import { STATUS } from 'constants/constants';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const authInitState = {
  values: null,
  token: null,
  isLoggedIn: false,
  status: STATUS.idle,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitState,
  extraReducers: builder => {
    builder
      .addCase(authRegisterThunk.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.values = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        Notify.success('Welcome!');
      })
      .addCase(authLoginThunk.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.values = payload.user;
        state.token = payload.token;
        Notify.success('Welcome back!');
        state.isLoggedIn = true;
      })
      .addCase(authLogOutThunk.fulfilled, state => {
        state.status = STATUS.success;
        state.values = authInitState.values;
        state.token = authInitState.token;
        state.isLoggedIn = authInitState.isLoggedIn;
      })
      .addMatcher(
        isAnyOf(
          authLogOutThunk.pending,
          authLoginThunk.pending,
          authRegisterThunk.pending
        ),
        state => {
          state.status = STATUS.loading;
        }
      )
      .addMatcher(
        isAnyOf(
          authLogOutThunk.rejected,
          authLoginThunk.rejected,
          authRegisterThunk.rejected
        ),
        state => {
          state.status = STATUS.error;
          Notify.failure('Incorrect login or password');
        }
      );
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
