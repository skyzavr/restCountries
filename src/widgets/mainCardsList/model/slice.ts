import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchParams, initState, Country } from './types';
import { baseUrl } from './data';

const initialState: initState = {
  countries: [],
  status: 'idle',
  error: '',
};

const getFullPath = ({ query, filter }: fetchParams) => {
  if (query.trim() !== '') return `${baseUrl}/name/${query}`;
  if (filter === 'all') return `${baseUrl}/all`;
  return `${baseUrl}/region/${filter}`;
};

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async (params: fetchParams, { rejectWithValue, fulfillWithValue }) => {
    const url = getFullPath({ ...params });

    try {
      const response = await fetch(url);
      if (!response.ok) return rejectWithValue(response.status);

      const data = (await response.json()) as Country[];
      return fulfillWithValue(data);
    } catch (error) {
      throw rejectWithValue('There is some problem with data');
    }
  }
);

const fetchCountriesSlice = createSlice({
  name: 'fetchCountries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchCountries.rejected, (state) => {
        state.status = 'failed';
        state.error = 'Oups! Some problem here...';
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.status = 'succeeded';
        state.error = '';
      });
  },
});

export const fetchCountriesReducer = fetchCountriesSlice.reducer;
