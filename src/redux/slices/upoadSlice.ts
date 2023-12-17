import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: string[] = [];

export const uploadSclice = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    addObject: (state, action: PayloadAction<string>) => {
        state.push(action.payload);
    },
  },
});

export const { addObject } = uploadSclice.actions;

export default uploadSclice.reducer;