import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TransformState {
  current: string | null;
  mode: number;
}

const initialState: TransformState = {
  current: null,
  mode: 0
};

export const transformSlice = createSlice({
  name: 'transform',
  initialState,
  reducers: {
    setCurrent: (state, action: PayloadAction<string | null>) => {
      state.current = action.payload;
    },
    setMode: (state) => {
      state.mode = (state.mode + 1) % 3;
    },
  },
});

export const { setCurrent, setMode } = transformSlice.actions;

export default transformSlice.reducer;