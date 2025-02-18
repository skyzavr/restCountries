import { setRegionReducer } from '@features/mainPageFilter/model/slice';
import { searchReducer } from '@features/mainPageSearch/model/slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    mainPageSearch: searchReducer,
    mainPageFilter: setRegionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
