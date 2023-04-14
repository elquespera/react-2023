import { configureStore } from '@reduxjs/toolkit';
import { submissionsReducer } from './submissions';
import { searchReducer } from './search';

export const store = configureStore({
  reducer: {
    submissions: submissionsReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
