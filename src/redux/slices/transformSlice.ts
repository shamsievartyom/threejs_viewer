import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const modes = ['translate', 'rotate', 'scale'] as const

interface Transform {
  position: {
    x: number
    y: number
    z: number
  }
  rotation: {
    x: number
    y: number
    z: number
  }
  scale: {
    x: number
    y: number
    z: number
  }
}

interface TransformState {
  current: string | null;
  mode: number;
  transform: Transform;
}

const initialState: TransformState = {
  current: null,
  transform: {
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    rotation: {
      x: 0,
      y: 0,
      z: 0,
    },
    scale: {
      x: 0,
      y: 0,
      z: 0,
    }
  },
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
    setTransform: (state, action: PayloadAction<Transform>) => {
      state.transform = action.payload
    },
  },
});

export const { setCurrent, switchMode, setTransform } = transformSlice.actions;

export default transformSlice.reducer;