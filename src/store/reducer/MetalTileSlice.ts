import {createSlice} from "@reduxjs/toolkit";
import {IMetalTile} from "../../models/Items";
import m1 from '../../assets/img/materials/m-1.png'
interface IInitialState {
    items: IMetalTile[]
}
const initialState:IInitialState = {
    items: [
        {
            id: 1,
            article: 12548,
            availability: true,
            title: 'Трехслойная мягкая черепица SHINGLAS гибкая кровля “CONTINENT”. Финская кровля.',
            img: m1,
            price: 500,
            disabled: false
        },
        {
            id: 2,
            article: 125418,
            availability: true,
            title: 'Битумная черепица RUFLEX (РУФЛЕКС) | коллекция MINT',
            img: m1,
            price: 1750,
            disabled: false
        },
        {
            id: 3,
            article: 125486,
            availability: true,
            title: 'Композитная черепица Metrotile (Метротайл) MetroBond коллекция “Викториан”',
            img: m1,
            price: 1500,
            disabled: false
        },{
            id: 4,
            article: 19486,
            availability: false,
            title: 'Новая композитная черепица Metrotile (Метротайл) MetroBond коллекция “Зевс”',
            img: m1,
            price: 3500,
            disabled: false
        }
    ]
}

export const MetalTileSlice = createSlice({
    name: 'metal-tile',
    initialState,
    reducers: {

    }
})

export const MetalTileSliceReducer = MetalTileSlice.reducer