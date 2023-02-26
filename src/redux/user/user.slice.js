import { createSlice } from '@reduxjs/toolkit';
import { STATUS } from 'constants/constants';
import { getUserThunk } from './user.thunk';

const userInitState = {
  status: STATUS.idle,
  data: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitState,
  extraReducers: builder => {
    builder
      .addCase(getUserThunk.pending, state => {
        state.status = STATUS.loading;
      })
      .addCase(getUserThunk.fulfilled, (state, { payload }) => {
        state.status = STATUS.success;
        state.data = payload;
      })
      .addCase(getUserThunk.rejected, state => {
        state.status = STATUS.error;
      });
  },
});

export const userReducer = userSlice.reducer;
