import React, {FC, useMemo, useState} from 'react';
import CategoryItems from "./CategoryItems";
import {useAppSelector} from "../../hooks/redux";


const Category:FC = () => {

    const dataItems = useAppSelector(state => state.MetalTileSliceReducer)

    const [state, setState] = useState([
        {id: 0, title: 'Металлочерепица', count: dataItems.items.length},
        {id: 1, title: 'Композитная черепица', count: dataItems.metal.length},
        {id: 2, title: 'Гибкая черепица', count: dataItems.natural.length},
        {id: 3, title: 'Профнастил', count: dataItems.izolate.length},
        {id: 4, title: 'Натуральная черепица', count: dataItems.flexible.length},
        {id: 5, title: 'Изоляционие пленки', count: dataItems.decking.length}
    ])

    const amountAll = useMemo(()  => {
        return state.reduce((acc, item) => item.count + acc, 0)
    }, [])



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
                        {state.map(element => <CategoryItems
                            key={element.id}
                            title={element.title}
                            id={element.id}
                        />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;