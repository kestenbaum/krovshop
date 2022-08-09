import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {MetalTileSliceReducer} from "./reducer/MetalTileSlice";
import {BasketSliceReducer} from "./reducer/BasketSlice";

export const store = combineReducers({
    MetalTileSliceReducer,
    BasketSliceReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: store
    })
}

export type RootState = ReturnType<typeof store>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']