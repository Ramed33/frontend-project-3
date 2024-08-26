import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContinent = createAsyncThunk(
  'continent/fetchContinent', 
  async (continent) => {
      const response = await axios.get(`https://restcountries.com/v3.1/region/${continent}`);
      return response.data;
  }
);

const initialState = {
  continent: {},
  //status: 'idle',
  //error: null,
};


const getContinent = createSlice({
  name: 'continent',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContinent.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContinent.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.continent = action.payload;
      })
      .addCase(fetchContinent.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export const selectContinent = (state) => state.continent.continent;
export const getContinentStatus = (state) => state.continent.status;
export const getContinentError = (state) => state.continent.error;

export default getContinent.reducer;