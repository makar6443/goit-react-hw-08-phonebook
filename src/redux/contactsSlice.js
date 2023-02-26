import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { STATUS } from 'constants/constants';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { addContactsThunk, getContactsThunk, deleteContactByIdThunk, refreshContactByIdThunk } from './contacts.thunk';

const contactsInitState = {
  contacts: [],
  status: STATUS.idle,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.contacts = payload;
      })
      .addCase(addContactsThunk.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        const newContact = payload;
        if (state.contacts.some(({ name }) => name === payload.name)) {
          Notify.warning(`${newContact.name} is already in contacts`);
        } else {
          state.contacts.push(newContact);
          Notify.success('Your contact created successfully!');
        }
      })
      .addCase(deleteContactByIdThunk.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.contacts = state.contacts.filter(
          contact => contact.id !== payload.id
        );
        Notify.success('Your contact deleted successfully!');
      })
      .addCase(refreshContactByIdThunk.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        const { id, name, number } = payload;
        const idx = state.contacts.findIndex(contact => contact.id === id);
        state.contacts[idx] = { id, name, number };
        Notify.success('Your contact updated successfully!');
      })
      .addMatcher(
        isAnyOf(
          getContactsThunk.pending,
          addContactsThunk.pending,
          deleteContactByIdThunk.pending,
          refreshContactByIdThunk.pending
        ),
        state => {
          state.status = STATUS.loading;
        }
      )
      .addMatcher(
        isAnyOf(
          getContactsThunk.rejected,
          addContactsThunk.rejected,
          deleteContactByIdThunk.rejected,
          refreshContactByIdThunk.rejected
        ),
        state => {
          state.status = STATUS.error;
        }
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
