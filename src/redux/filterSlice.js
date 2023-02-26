import { createSlice } from "@reduxjs/toolkit";

const filterInitState = '';

export const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitState,
  reducers: {
    filterContacts: (_, { payload }) => payload,
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;