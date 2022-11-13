import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cityMove from './sliceCity'

export const rootReducer = combineReducers({
    cityMove
})

export const reducerToolkit = () => configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type ReducerToolkitState = ReturnType<typeof reducerToolkit>
export type AppDispatch = ReducerToolkitState['dispatch']
