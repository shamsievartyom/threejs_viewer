import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: THREE.Group[] = [];

export const uploadSclice = createSlice({
  name: 'upload',
  initialState,
  reducers: {
    addObject: (state, action: PayloadAction<THREE.Group>) => {
        state.push(action.payload);
    },
  },
});

export const { addObject } = uploadSclice.actions;

export default uploadSclice.reducer;