import {createSlice} from "@reduxjs/toolkit";
import {IBasket} from "../../models/Items";

interface IInitialState {
    basket: IBasket[]
}

const initialState:IInitialState = {
    basket: []
}

const BasketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket (state, action) {
            state.basket = [...state.basket, action.payload]
        }
    }
})

export const BasketSliceReducer = BasketSlice.reducer