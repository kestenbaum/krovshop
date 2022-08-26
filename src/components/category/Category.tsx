import React, {FC, useState} from 'react';
import CategoryItems from "./CategoryItems";
import {useAppSelector} from "../../hooks/redux";


const Category:FC = () => {
    /*---- получение всего обьекта с элементами ----*/
    const dataItems = useAppSelector(state => state.MetalTileSliceReducer)

    /*---- получение ключей элементов ----*/
    const state = Object.keys(dataItems)

    /*---- Получение количества всех элементов ----*/
    const amountAll = Object.values(dataItems).flat().length

    return (
        <div className='category'>
            <div className="container">
                <div className="category-wrapper">
                    {/*---- Information block----*/}
                    <div className="category-information">
                        <div className="category-title">Товары в наличие</div>
                        <div className="category-amount">{amountAll}</div>
                    </div>

                    {/*---- Items block----*/}
                    <div className="category-items">
                        {state.map((element, idx) => <CategoryItems
                            key={idx}
                            title={element}
                            id={idx}
                        />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Category);