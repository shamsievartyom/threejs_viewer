import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface initialStateType {
    ambientLigth: number,
    shadowResolution: number,
}

const initialState: initialStateType = {
    ambientLigth: 0,
    shadowResolution: 1024,
};

export const sceneSlice = createSlice({
    name: 'scene',
    initialState,
    reducers: {
        changeItensity: (state, action: PayloadAction<number>) => {
            state.ambientLigth = action.payload;
        },
        changeShadowResolution: (state, action: PayloadAction<number>) => {
            state.shadowResolution = action.payload;
        },
    },
});

export const { changeItensity, changeShadowResolution } = sceneSlice.actions;

export default sceneSlice.reducer;