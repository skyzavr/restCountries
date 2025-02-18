import { createSlice } from '@reduxjs/toolkit';
import { regions } from './data';

type initState = { region: regions };

const initialState: initState = { region: regions.All };

export const regionFilter = createSlice({
  name: 'regionFilter',
  initialState,
  reducers: {
    setRegion: (state, action: { payload: regions }) => {
      state.region = action.payload;
    },
  },
});

export const { setRegion } = regionFilter.actions;
export const setRegionReducer = regionFilter.reducer;
