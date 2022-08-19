import React, {FC, useMemo, useState} from 'react';
import {NavLink} from "react-router-dom";
import Item from "../category/Item";
import {useAppSelector} from "../../hooks/redux";

const CategoryPage:FC = () => {

    const data = useAppSelector(state => state.MetalTileSliceReducer.items)
    const [state, setState] = useState([
        {id: 1, title: 'Металлочерепица', count: data.length},
        {id: 2, title: 'Композитная черепица', count: 222},
        {id: 3, title: 'Гибкая черепица', count: 1654},
        {id: 4, title: 'Профнастил', count: 12},
        {id: 5, title: 'Натуральная черепица', count: 1111},
        {id: 6, title: 'Изоляционие пленки', count: 122}
    ])

    const amountAll = useMemo(()  => {
        return state.reduce((acc, item) => item.count + acc, 0)
    }, [])

    return (
        <div className='category-page'>
            <div className="container">
                <div className="wrapper">

                    {/*---- Header page ----*/}
                    <div className="header-page">
                        <h2 className="title-page">Металлочерепица</h2>
                        <span className="amount-items">Найдено товаров: {amountAll}</span>
                    </div>

                    {/*---- Categories page----*/}
                    <div className="wrapper-page">

                        {/*---- filter items ----*/}
                        <div className="categories-page">
                            <h3 className="categories-title">
                                Категории
                            </h3>
                            {state.map(item =>
                                <NavLink
                                    to='/'
                                    className='nav-category'
                                    key={item.id}
                                >
                                    {item.title}({item.count})
                                </NavLink>
                            )}
                        </div>

                        {/*---- Items ----*/}
                        <div className="block-materials">
                            {
                                data.length === 0
                                    ? <div>Товары отсутсвуют</div>
                                    : data.map(item =>
                                        <Item key={item.id} props={item}/>
                                    )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(CategoryPage);