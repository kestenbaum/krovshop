import {createSlice} from "@reduxjs/toolkit";
import m1 from '../../assets/img/materials/m-1.png'

const initialState = {
     'Металлочерепица': [
        {
            id: 1,
            article: 12548,
            availability: true,
            title: 'Трехслойная мягкая черепица SHINGLAS гибкая кровля “CONTINENT”. Финская кровля.',
            img: m1,
            price: 500,
            favorite: false
        },
        {
            id: 2,
            article: 125418,
            availability: true,
            title: 'Битумная черепица RUFLEX (РУФЛЕКС) | коллекция MINT',
            img: m1,
            price: 1750,
            favorite: false
        },
        {
            id: 3,
            article: 125486,
            availability: true,
            title: 'Композитная черепица Metrotile (Метротайл) MetroBond коллекция “Викториан”',
            img: m1,
            price: 1500,
            favorite: false
        },{
            id: 4,
            article: 19486,
            availability: false,
            title: 'Новая композитная черепица Metrotile (Метротайл) MetroBond коллекция “Зевс”',
            img: m1,
            price: 3500,
            favorite: false
        }
    ],
     'Композитная черепица': [
        {
            id: 5,
            article: 12548,
            availability: true,
            title: 'Трехслойная мягкая черепица SHINGLAS гибкая кровля “CONTINENT”. Финская кровля.',
            img: m1,
            price: 500,
            favorite: false
        },
        {
            id: 6,
            article: 125418,
            availability: true,
            title: 'Битумная черепица RUFLEX (РУФЛЕКС) | коллекция MINT',
            img: m1,
            price: 1750,
            favorite: false
        },
        {
            id: 7,
            article: 125486,
            availability: true,
            title: 'Композитная черепица Metrotile (Метротайл) MetroBond коллекция “Викториан”',
            img: m1,
            price: 1500,
            favorite: false
        },{
            id: 8,
            article: 19486,
            availability: false,
            title: 'Новая композитная черепица Metrotile (Метротайл) MetroBond коллекция “Зевс”',
            img: m1,
            price: 3500,
            favorite: false
        },{
            id: 9,
            article: 12548,
            availability: true,
            title: 'Трехслойная мягкая черепица SHINGLAS гибкая кровля “CONTINENT”. Финская кровля.',
            img: m1,
            price: 500,
            favorite: false
        },
        {
            id: 10,
            article: 125418,
            availability: true,
            title: 'Битумная черепица RUFLEX (РУФЛЕКС) | коллекция MINT',
            img: m1,
            price: 1750,
            favorite: false
        },
        {
            id: 11,
            article: 125486,
            availability: true,
            title: 'Композитная черепица Metrotile (Метротайл) MetroBond коллекция “Викториан”',
            img: m1,
            price: 1500,
            favorite: false
        },{
            id: 12,
            article: 19486,
            availability: false,
            title: 'Новая композитная черепица Metrotile (Метротайл) MetroBond коллекция “Зевс”',
            img: m1,
            price: 3500,
            favorite: false
        }
    ],
     'Гибкая черепица' : [
        {
            id: 13,
            article: 12548,
            availability: true,
            title: 'Трехслойная мягкая черепица SHINGLAS гибкая кровля “CONTINENT”. Финская кровля.',
            img: m1,
            price: 500,
            favorite: false
        },
        {
            id: 14,
            article: 125418,
            availability: true,
            title: 'Битумная черепица RUFLEX (РУФЛЕКС) | коллекция MINT',
            img: m1,
            price: 1750,
            favorite: false
        },
        {
            id: 15,
            article: 125486,
            availability: true,
            title: 'Композитная черепица Metrotile (Метротайл) MetroBond коллекция “Викториан”',
            img: m1,
            price: 1500,
            favorite: false
        },{
            id: 16,
            article: 19486,
            availability: false,
            title: 'Новая композитная черепица Metrotile (Метротайл) MetroBond коллекция “Зевс”',
            img: m1,
            price: 3500,
            favorite: false
        },{
            id: 17,
            article: 12548,
            availability: true,
            title: 'Трехслойная мягкая черепица SHINGLAS гибкая кровля “CONTINENT”. Финская кровля.',
            img: m1,
            price: 500,
            favorite: false
        },
        {
            id: 18,
            article: 125418,
            availability: true,
            title: 'Битумная черепица RUFLEX (РУФЛЕКС) | коллекция MINT',
            img: m1,
            price: 1750,
            favorite: false
        },
        {
            id: 19,
            article: 125486,
            availability: true,
            title: 'Композитная черепица Metrotile (Метротайл) MetroBond коллекция “Викториан”',
            img: m1,
            price: 1500,
            favorite: false
        },{
            id: 20,
            article: 19486,
            availability: false,
            title: 'Новая композитная черепица Metrotile (Метротайл) MetroBond коллекция “Зевс”',
            img: m1,
            price: 3500,
            favorite: false
        }
    ],
     'Профнастил' : [
        {
            id: 21,
            article: 12548,
            availability: true,
            title: 'Трехслойная мягкая черепица SHINGLAS гибкая кровля “CONTINENT”. Финская кровля.',
            img: m1,
            price: 500,
            favorite: false
        },
        {
            id: 22,
            article: 125418,
            availability: true,
            title: 'Битумная черепица RUFLEX (РУФЛЕКС) | коллекция MINT',
            img: m1,
            price: 1750,
            favorite: false
        },
        {
            id: 23,
            article: 125486,
            availability: true,
            title: 'Композитная черепица Metrotile (Метротайл) MetroBond коллекция “Викториан”',
            img: m1,
            price: 1500,
            favorite: false
        },{
            id: 24,
            article: 19486,
            availability: false,
            title: 'Новая композитная черепица Metrotile (Метротайл) MetroBond коллекция “Зевс”',
            img: m1,
            price: 3500,
            favorite: false
        }
    ],
     'Натуральная черепица' : [
        {
            id: 25,
            article: 12548,
            availability: true,
            title: 'Трехслойная мягкая черепица SHINGLAS гибкая кровля “CONTINENT”. Финская кровля.',
            img: m1,
            price: 500,
            favorite: false
        },
        {
            id: 26,
            article: 125418,
            availability: true,
            title: 'Битумная черепица RUFLEX (РУФЛЕКС) | коллекция MINT',
            img: m1,
            price: 1750,
            favorite: false
        },
        {
            id: 27,
            article: 125486,
            availability: true,
            title: 'Композитная черепица Metrotile (Метротайл) MetroBond коллекция “Викториан”',
            img: m1,
            price: 1500,
            favorite: false
        },{
            id: 28,
            article: 19486,
            availability: false,
            title: 'Новая композитная черепица Metrotile (Метротайл) MetroBond коллекция “Зевс”',
            img: m1,
            price: 3500,
            favorite: false
        }
    ],
     'Изоляционие пленки': [
        {
            id: 29,
            article: 12548,
            availability: true,
            title: 'Трехслойная мягкая черепица SHINGLAS гибкая кровля “CONTINENT”. Финская кровля.',
            img: m1,
            price: 500,
            favorite: false
        },
        {
            id: 30,
            article: 125418,
            availability: true,
            title: 'Битумная черепица RUFLEX (РУФЛЕКС) | коллекция MINT',
            img: m1,
            price: 1750,
            favorite: false
        },
        {
            id: 31,
            article: 125486,
            availability: true,
            title: 'Композитная черепица Metrotile (Метротайл) MetroBond коллекция “Викториан”',
            img: m1,
            price: 1500,
            favorite: false
        },{
            id: 32,
            article: 19486,
            availability: false,
            title: 'Новая композитная черепица Metrotile (Метротайл) MetroBond коллекция “Зевс”',
            img: m1,
            price: 3500,
            favorite: false
        },
        {
            id: 33,
            article: 125486,
            availability: true,
            title: 'Композитная черепица Metrotile (Метротайл) MetroBond коллекция “Викториан”',
            img: m1,
            price: 1500,
            favorite: false
        },{
            id: 34,
            article: 19486,
            availability: false,
            title: 'Новая композитная черепица Metrotile (Метротайл) MetroBond коллекция “Зевс”',
            img: m1,
            price: 3500,
            favorite: false
        },{
             id: 35,
             article: 19486,
             availability: false,
             title: 'Новая композитная черепица Metrotile (Метротайл) MetroBond коллекция “Зевс”',
             img: m1,
             price: 3500,
             favorite: false
         }
    ],
}

export const MetalSlice = createSlice({
    name: 'metal-tile',
    initialState,
    reducers: {}
})

export const MetalTileSliceReducer = MetalSlice.reducer