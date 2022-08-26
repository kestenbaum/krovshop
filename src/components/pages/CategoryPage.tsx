import React, {FC, useEffect, useMemo, useState} from 'react';
import {NavLink, useParams} from "react-router-dom";
import Item from "../category/Item";
import {useAppSelector} from "../../hooks/redux";
import Search from "../UI/Search/Search";


const CategoryPage:FC = () => {

    /*---- data ----*/
    const dataItems = useAppSelector(state => state.MetalTileSliceReducer)
    const initialState = Object.values(dataItems)[0]

    /*---- state array elements----*/
    const [data, setData] = useState(initialState)

    /*---- state search input ----*/
    const [stateSearch, setValueSearch] = useState<string>('')

    /*---- get value search ----*/
    const handlerSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueSearch(event.target.value)
    }

    /*---- get all items shop----*/
    const getAllValueItems = Object.values(dataItems).flat()

    const resultMass = useMemo(() => {
        return getAllValueItems.filter(item => item.title.includes(stateSearch))
    }, [stateSearch])

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

    useEffect(() => {
        setValueSearch('')
    }, [params.id])

    /*---- get title page----*/
    const titleId = dataItemsKeys[elementId]

    return (
        <div className='category-page'>
            <div className="container">
                <div className="wrapper">

                    {/*---- Header page ----*/}
                    <div className="header-option">
                        <div className='search-wrapper'>
                            <Search valueInput={stateSearch} setValueInput={handlerSearch} />
                        </div>
                    </div>

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
                            {dataItemsKeys.map((item, idx) =>
                                <NavLink
                                    to={`/page/${idx}`}
                                    className='nav-category'
                                    key={idx}
                                >
                                    {item}
                                </NavLink>
                            )}
                        </div>

                        {/*---- Items ----*/}
                        <div className="block-materials">
                            {
                                resultMass.length === getAllValueItems.length
                                ? data.map(item =>
                                        <Item key={item.id} props={item}/>
                                    )
                                    :
                                    resultMass.length === 0
                                ? <div>По вашему запросу, нечего не найдено</div>
                                        : resultMass.map(item =>
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