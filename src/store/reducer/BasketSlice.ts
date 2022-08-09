import {createSlice} from "@reduxjs/toolkit";

const initialState = [1]

const BasketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {

    }
})

export const BasketSliceReducer = BasketSlice.reducer