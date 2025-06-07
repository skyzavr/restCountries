import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { regions } from '@features/mainPageFilter/model/data';
import { baseUrl, fields } from '@shared/model/apiData';
import { fetchParams, initState, Country } from './types';

const initialState: initState = {
  countries: [],
  status: 'idle',
  error: '',
};

const getFullPath = ({ query, filter }: fetchParams) => {
  if (query.trim() !== '') return `${baseUrl}/name/${query}`;

  const queryString = filter === 'all' ? '/all/' : `/region/${filter}`;
  return `${baseUrl}${queryString}?${fields}`;
};

const filteredListByRegion = (list: Country[], region: regions) => {
  if (region.toLowerCase() === 'all') return list;
  return list.filter((el) => el.region.toLowerCase() === region.toLowerCase());
};

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async (params: fetchParams, { rejectWithValue, fulfillWithValue }) => {
    const { query, filter } = params;
    const url = getFullPath({ query, filter });

    try {
      const response = await fetch(url);
      if (!response.ok) return rejectWithValue(response.status);

      const data = (await response.json()) as Country[];

      return fulfillWithValue(filteredListByRegion(data, filter));
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
