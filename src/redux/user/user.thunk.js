import { createAsyncThunk } from "@reduxjs/toolkit";
import { privateApi, token } from "http/http";
import { selectAuthToken } from "redux/auth/auth.selectors";

export const getUserThunk = createAsyncThunk('user',async (_,{getState,rejectWithValue})=>{
    const stateToken = selectAuthToken(getState());
    if(!stateToken){
        return rejectWithValue()
    }
    token.set(`Bearer ${stateToken}`);
    const {data} = await privateApi.get('/users/current');
    return data;
}) 