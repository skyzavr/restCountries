import { setRegionReducer } from '@features/mainPageFilter/model/slice';
import { searchReducer } from '@features/mainPageSearch/model/slice';
import { configureStore } from '@reduxjs/toolkit';
import { fetchCountriesReducer } from '@widgets/mainCardsList/model/slice';

export const store = configureStore({
  reducer: {
    mainPageSearch: searchReducer,
    mainPageFilter: setRegionReducer,
    countries: fetchCountriesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
