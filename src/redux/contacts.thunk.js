import { createAsyncThunk } from '@reduxjs/toolkit';

import { privateApi } from 'http/http';


export const getContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await privateApi.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const { data } = await privateApi.post('/contacts', newContact);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContactByIdThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await privateApi.delete(`/contacts/${id}`);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const refreshContactByIdThunk = createAsyncThunk(
  'contacts/refreshContact',
  async ({id,name,number}, { rejectWithValue }) => {
    try {
      const { data } = await privateApi.patch(`/contacts/${id}`,{name,number});
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
