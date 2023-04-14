import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PropertyData } from '../types';
import { RootState } from './store';

const initialState: PropertyData[] = [];

export const submissionsSlice = createSlice({
  name: 'submissions',
  initialState,
  reducers: {
    addSubmission: (state, action: PayloadAction<PropertyData>) => {
      state.push(action.payload);
    },
  },
});

export const { addSubmission } = submissionsSlice.actions;

export const selectSubmissions = (state: RootState) => state.submissions;

export const submissionsReducer = submissionsSlice.reducer;
