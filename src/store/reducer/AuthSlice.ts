import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    dataUser: [
        {
            id: 1,
            email: 'admin@bk.ru',
            password: '12345678',
            admin: true,
            name: 'Alex',
            surname: 'Novitskii',
            number: '+380-666-014-56'
        },
        {
            id: 2,
            email: 'User@bk.ru',
            password: '123456789',
            admin: false,
            name: 'Adams',
            surname: 'Kergunov',
            number: '+380-050-014-56'
        }
    ],
    auth: false
}

export const AuthSlice = createSlice({
    name: 'authUser',
    initialState,
    reducers: {
        handlerAuth (state, action ) {
            state.auth = action.payload
        }
    }
})

export const AuthSliceReducer = AuthSlice.reducer