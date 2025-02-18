import { createSlice } from '@reduxjs/toolkit';

type initState = { query: string };

const initialState: initState = { query: '' };

export const mainPageSearchSlice = createSlice({
  name: 'mainPageSearch',
  initialState,
  reducers: {
    setSearchQuery: (state, action: { payload: string }) => {
      state.query = action.payload.trim();
    },
  },
});

export const { setSearchQuery } = mainPageSearchSlice.actions;
export const searchReducer = mainPageSearchSlice.reducer;
