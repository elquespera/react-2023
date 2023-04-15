import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface SearchSliceState {
  query: string;
}

const initialState: SearchSliceState = {
  query: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { setQuery } = searchSlice.actions;

export const selectSearchQuery = (state: RootState) => state.search;
export const selectSearchResults = (state: RootState) => state.search;

export const searchReducer = searchSlice.reducer;
