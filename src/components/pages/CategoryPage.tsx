import React, {FC, useEffect, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import Item from "../category/Item";
import {useAppSelector} from "../../hooks/redux";



const CategoryPage:FC = () => {

    /*---- data ----*/
    const dataItems = useAppSelector(state => state.MetalTileSliceReducer)
    const initialState = useAppSelector(state => state.MetalTileSliceReducer.items)

    /*---- state array elements----*/
    const [data, setData] = useState(initialState)

    /*---- get array keys and value elements ----*/
    const dataItemsKeys = Object.keys(dataItems)
    const dataItemsValue = Object.values(dataItems)

    /*---- create params ----*/
    const params = useParams()

    /*---- get element array to id----*/
    const elementPageTitle = dataItemsKeys[Number(params.id)]
    const elementId = dataItemsKeys.indexOf(elementPageTitle)
    const pageId = dataItemsValue[elementId]

    /*---- change page items ----*/
    useEffect(() => {
        setData(pageId)
    }, [elementId])


    /*---- Временный стейт ----*/
    const [state, setState] = useState([
        {id: 0, title: 'Металлочерепица', count: dataItems.items.length},
        {id: 1, title: 'Композитная черепица', count: dataItems.metal.length},
        {id: 2, title: 'Гибкая черепица', count: dataItems.flexible.length},
        {id: 3, title: 'Профнастил', count: dataItems.decking.length},
        {id: 4, title: 'Натуральная черепица', count: dataItems.natural.length},
        {id: 5, title: 'Изоляционие пленки', count: dataItems.izolate.length}
    ])

    /*---- get title page----*/
    const titleId = state[elementId].title

    return (
        <div className='category-page'>
            <div className="container">
                <div className="wrapper">

                    {/*---- Header page ----*/}
                    <div className="header-page">
                        <h2 className="title-page">{titleId}</h2>
                        <span className="amount-items">Найдено товаров: {pageId.length}</span>
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
                                    to={`/page/${item.id}`}
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