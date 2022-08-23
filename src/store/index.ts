import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {MetalTileSliceReducer} from "./reducer/MetalSlice";
import {BasketSliceReducer} from "./reducer/BasketSlice";
import {FavoriteSliceReducer} from "./reducer/FavoriteSlice";

export const store = combineReducers({
    MetalTileSliceReducer,
    BasketSliceReducer,
    FavoriteSliceReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: store
    })
}

export type RootState = ReturnType<typeof store>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']