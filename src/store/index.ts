import {combineReducers, configureStore} from "@reduxjs/toolkit";

export const store = combineReducers({

})

export const setupStore = () => {
    return configureStore({
        reducer: store
    })
}

export type RootState = ReturnType<typeof store>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']