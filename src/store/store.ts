import { configureStore } from '@reduxjs/toolkit';
import { submissionsReducer } from './submissions';
import { searchReducer } from './search';
import { propertiesApi, propertiesReducer } from '../services/properties';

export const store = configureStore({
  reducer: {
    submissions: submissionsReducer,
    search: searchReducer,
    [propertiesApi.reducerPath]: propertiesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(propertiesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
