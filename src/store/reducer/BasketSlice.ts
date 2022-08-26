import {createSlice} from "@reduxjs/toolkit";
import {IBasket} from "../../models/Items";

interface IInitialState {
    basket: IBasket[]
}

const initialState:IInitialState = {
    basket: []
}

export const BasketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket (state, action) {
            let idxItem = state.basket.findIndex(element => element.id === action.payload.id)
            if (idxItem === -1) {
                state.basket = [...state.basket, action.payload]
            } else {
                state.basket[idxItem].count += action.payload.count + 1
            }
        },
       removeToBasket(state, action) {
            state.basket = state.basket.filter(item => item.id !== action.payload)
       }
    }
})

export const BasketSliceReducer = BasketSlice.reducer