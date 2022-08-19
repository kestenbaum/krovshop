import {createSlice} from "@reduxjs/toolkit";
import {IFavoriteElement} from "../../models/Items";


interface IInitialState {
    items: IFavoriteElement[]
}

export const initialState:IInitialState = {
    items: []
}

export const FavoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorite(state, action) {
            let idxItem = state.items.findIndex(element => element.id === action.payload.id)
            if (idxItem === -1) {
                state.items = [...state.items, action.payload]
            }
        },
        removeFavorite(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload.id)
        }
    }
})

export const FavoriteSliceReducer = FavoriteSlice.reducer