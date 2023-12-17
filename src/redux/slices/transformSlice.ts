import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const modes = ['translate', 'rotate', 'scale'] as const

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
    switchMode: (state) => {
      state.mode = (state.mode + 1) % modes.length;
    },
  },
});

export const { setCurrent, switchMode } = transformSlice.actions;

export default transformSlice.reducer;