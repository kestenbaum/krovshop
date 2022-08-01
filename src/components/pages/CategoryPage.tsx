import React, {FC, useMemo, useState} from 'react';
import {NavLink} from "react-router-dom";
import Item from "../category/Item";

const CategoryPage:FC = () => {

    const [state, setState] = useState([
        {id: 1, title: 'Металлочерепица', count: 122},
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
                                <Item/>
                                <Item/>
                                <Item/>
                                <Item/>
                                <Item/>
                                <Item/>
                                <Item/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;