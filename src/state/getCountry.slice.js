import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCountry = createAsyncThunk(
  'country/fetchCountry', 
  async (country) => {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
      return response.data;
  }
);

const initialState = {
  country: {},
  //status: 'idle',
  //error: null,
};


const getCountry = createSlice({
  name: 'country',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountry.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCountry.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.country = action.payload;
      })
      .addCase(fetchCountry.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export const selectCountry = (state) => state.country.country;
export const getCountryStatus = (state) => state.country.status;
export const getCountryError = (state) => state.country.error;

export default getCountry.reducer;