import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { Country } from '@shared/model/type';
import { baseUrl, fields } from '@shared/model/apiData';

import { fetchParam } from './type';
import { errors, initialState } from './data';

const nameCheckClb = (el: Country, name: string) => {
  const lowCaseName = name.toLowerCase();
  return (
    el.cca3.toLowerCase() === lowCaseName ||
    el.name.common.toLowerCase() === lowCaseName ||
    el.name.official.toLowerCase() === lowCaseName
  );
};

const bordersFetch = async (name: string) => {
  const link = `${baseUrl}/alpha/${name.trim()}`;
  return fetch(link)
    .then((response) => {
      if (!response.ok) return;
      return response.json();
    })
    .then(
      (data: Country[]) => data.filter((el) => nameCheckClb(el, name))[0].name
    );
};

const fetchBordersList = (correctCountry: Country) => {
  return Promise.allSettled(
    correctCountry.borders.map((el) => bordersFetch(el as unknown as string))
  );
};

export const fetchCountryByQuery = createAsyncThunk(
  'country/fetchCountryByQuery',
  async (params: fetchParam, { rejectWithValue, fulfillWithValue }) => {
    const { query } = params;

    try {
      const link = `${baseUrl}/name/${query.trim()}?${fields}`;

      const response = await fetch(link);
      if (!response.ok) return rejectWithValue(errors.notExist);

      const data = (await response.json()) as Country[];

      const correctCountry =
        data.length > 1 ? data.find((el) => nameCheckClb(el, query)) : data[0];

      if (!correctCountry) return rejectWithValue(errors.noData);

      const correctBorders = await fetchBordersList(correctCountry)
        .then((el) => el.filter((item) => item.status === 'fulfilled'))
        .then((el) => el.map((el) => el.value));

      return fulfillWithValue({
        ...correctCountry,
        correctBorders,
      });
    } catch (error) {
      throw rejectWithValue(errors.other);
    }
  }
);

const fetchCountrySlice = createSlice({
  name: 'fetchCountryByQuery',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountryByQuery.pending, (state) => {
        state.status = 'loading';
        state.error = '';
      })
      .addCase(fetchCountryByQuery.rejected, (state, { payload }) => {
        state.status = 'failed';
        state.error = payload as string;
      })
      .addCase(fetchCountryByQuery.fulfilled, (state, action) => {
        state.countryData = action.payload;
        state.status = 'succeeded';
        state.error = '';
      });
  },
});

export const fetchCountryReducer = fetchCountrySlice.reducer;
