import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {MetalTileSliceReducer} from "./reducer/MetalSlice";
import {BasketSliceReducer} from "./reducer/BasketSlice";
import {FavoriteSliceReducer} from "./reducer/FavoriteSlice";
import {AuthSliceReducer} from "./reducer/AuthSlice";

/*---- рндюсеры ----*/
export const store = combineReducers({
    MetalTileSliceReducer,
    BasketSliceReducer,
    FavoriteSliceReducer,
    AuthSliceReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: store
    })
}

export type RootState = ReturnType<typeof store>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']