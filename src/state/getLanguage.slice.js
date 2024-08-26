import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLanguage = createAsyncThunk(
  'language/fetchLanguage', 
  async (language) => {
      const response = await axios.get(`https://restcountries.com/v3.1/lang/${language}`);
      return response.data;
  }
);

const initialState = {
  language: {},
  //status: 'idle',
  //error: null,
};


const getLanguage = createSlice({
  name: 'language',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLanguage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLanguage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.language = action.payload;
      })
      .addCase(fetchLanguage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export const selectLanguage = (state) => state.language.language;
export const getLanguageStatus = (state) => state.language.status;
export const getLanguageError = (state) => state.language.error;

export default getLanguage.reducer;