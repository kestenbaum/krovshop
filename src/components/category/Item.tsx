import React, {FC, useMemo, useState} from 'react';
import material from '../../assets/img/materials/m-1.png'
import IVisible from '../../assets/img/IVisible.png'
import IFavorites from '../../assets/img/IFavorites.png'
import {NavLink} from "react-router-dom";
import MainButton from "../UI/MainButton/MainButton";
import Counter from "../UI/Counter/Counter";

const Item:FC = () => {

    const [state, setState] = useState(1)
    const [price, setPrice] = useState<number>(572)

    const finalPriceItem = useMemo(() => {
        return price * state
    }, [state])

    return (
        <div className='item'>

            {/*---- item info ----*/}
            <div className="item-info">
                <div className="item-article">Артикул: 123456</div>
                <div className="item-availability">В наличие</div>
            </div>

            {/*---- item img ----*/}
            <img src={material} alt="img" className='item-img'/>

            {/*---- title item ----*/}
            <div className="title-block">
                <h3>Трехслойная мягкая черепица SHINGLAS гибкая кровля “CONTINENT”. Финская кровля.</h3>
            </div>


            {/*---- block price ----*/}
            <div className="item-option">
                <span className="item-price">{finalPriceItem}руб / м2</span>
                <div className="block-option">
                    <NavLink to='/'>
                        <img src={IVisible} alt="visible"/>
                    </NavLink>
                    <NavLink to='/'>
                        <img src={IFavorites} alt="favorites"/>
                    </NavLink>
                </div>
            </div>

            {/*---- item counter ----*/}
            <div className="item-buy">
                <Counter count={state} onChangeCount={setState}/>
                <MainButton page={'/page'}>Купить</MainButton>
            </div>
        </div>
    );
};

export default Item;