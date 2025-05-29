import { configureStore } from '@reduxjs/toolkit';

import { fetchCountryReducer } from '@pages/country/model/slice';
import { fetchCountriesReducer } from '@widgets/mainCardsList/model/slice';
import { setRegionReducer } from '@features/mainPageFilter/model/slice';
import { searchReducer } from '@features/mainPageSearch/model/slice';

export const store = configureStore({
  reducer: {
    mainPageSearch: searchReducer,
    mainPageFilter: setRegionReducer,
    countries: fetchCountriesReducer,
    country: fetchCountryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
