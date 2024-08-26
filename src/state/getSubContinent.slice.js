import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSubContinent = createAsyncThunk(
  'subcontinent/fetchSubContinent', 
  async (subcontinent) => {
      const response = await axios.get(`https://restcountries.com/v3.1/subregion/${subcontinent}`);
      return response.data;
  }
);

const initialState = {
  subcontinent: {},
  //status: 'idle',
  //error: null,
};


const getSubContinent = createSlice({
  name: 'subcontinent',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubContinent.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSubContinent.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.subcontinent = action.payload;
      })
      .addCase(fetchSubContinent.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export const selectSubContinent = (state) => state.subcontinent.subcontinent;
export const getSubContinentStatus = (state) => state.subcontinent.status;
export const getSubContinentError = (state) => state.subcontinent.error;

export default getSubContinent.reducer;