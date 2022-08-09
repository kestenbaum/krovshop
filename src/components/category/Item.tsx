import React, {FC, useState} from 'react';
import material from '../../assets/img/materials/m-1.png'
import IVisible from '../../assets/img/IVisible.png'
import IFavorites from '../../assets/img/IFavorites.png'
import {NavLink} from "react-router-dom";
import MainButton from "../UI/MainButton/MainButton";
import Counter from "../UI/Counter/Counter";
import {IMetalTile} from "../../models/Items";


const Item:FC<IMetalTile> = (props) => {

    const [state, setState] = useState(1)

    const addToBasket = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        console.log(1)
    }

    return (
        <div className='item'>

            {/*---- item info ----*/}
            <div className="item-info">
                <div className="item-article">Артикул: {props.article}</div>
                <div className="item-availability">
                    {props.availability ? 'В наличии' : 'Под заказ'}
                </div>
            </div>

            {/*---- item img ----*/}
            <img src={material} alt={props.img} className='item-img'/>

            {/*---- title item ----*/}
            <div className="title-block">
                <h3>{props.title}</h3>
            </div>


            {/*---- block price ----*/}
            <div className="item-option">
                <span className="item-price">{props.price} руб / м2</span>
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
                <MainButton onClick={addToBasket}>Купить</MainButton>
            </div>
        </div>
    );
};

export default Item;