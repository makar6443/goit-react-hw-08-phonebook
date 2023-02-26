import { createAsyncThunk } from '@reduxjs/toolkit';
import { privateApi, publicApi, token } from 'http/http';

export const authRegisterThunk = createAsyncThunk(
  'register',
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await publicApi.post('/users/signup', values);
      token.set(`Bearer ${data.token}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const authLoginThunk = createAsyncThunk(
  'login',
  async (values, { rejectWithValue }) => {
    try {
      const { data } = await publicApi.post('/users/login', values);
      token.set(`Bearer ${data.token}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const authLogOutThunk = createAsyncThunk(
  'logout',
  async (_, { rejectWithValue }) => {
    try {
      await privateApi.post('/users/logout');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
