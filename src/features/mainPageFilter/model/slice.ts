import { createSlice } from '@reduxjs/toolkit';
import { regions } from './data';

type initState = { region: regions };

const urlParams = new URLSearchParams(window.location.search);

const initialState: initState = {
  region: (urlParams.get('filter') || regions.All) as regions,
};
window.history.pushState(null, '', `?filter=${initialState.region}`);

export const regionFilter = createSlice({
  name: 'regionFilter',
  initialState,
  reducers: {
    setRegion: (state, action: { payload: regions }) => {
      window.history.pushState(null, '', `?filter=${action.payload}`);
      state.region = action.payload;
    },
  },
});

export const { setRegion } = regionFilter.actions;
export const setRegionReducer = regionFilter.reducer;
