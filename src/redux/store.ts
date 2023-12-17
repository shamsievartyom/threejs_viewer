import { configureStore } from '@reduxjs/toolkit'
import transform from './slices/transformSlice'
import upoad from './slices/upoadSlice'

export const store = configureStore({
    reducer: {
        transform: transform,
        upolad: upoad,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch