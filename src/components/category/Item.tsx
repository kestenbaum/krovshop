import React, {FC, useState} from 'react';
import material from '../../assets/img/materials/m-1.png'
import IFavorites from '../../assets/img/favorite.svg'
import IFavoritesActive from '../../assets/img/favorite-active.svg'
import MainButton from "../UI/MainButton/MainButton";
import Counter from "../UI/Counter/Counter";
import {IMetalTile} from "../../models/Items";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {BasketSlice} from "../../store/reducer/BasketSlice";
import {FavoriteSlice} from "../../store/reducer/FavoriteSlice";

interface IItem {
    props: IMetalTile
}

const Item:FC<IItem> = ({props}) => {

    const dataProduct = useAppSelector(state => state.MetalTileSliceReducer.items)
    const dataFavorites = useAppSelector(state => state.FavoriteSliceReducer.items)

    const [disabled, setDisabled] = useState<boolean>(false)

    {/*---- State Counter ----*/}
    const [counter, setCounter] = useState<number>(1)

    {/*---- Create Dispatch----*/}
    const dispatch = useAppDispatch()

    {/*---- functions ----*/}
    const addToBasket = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        let addToItemBasket = {
            id: props.id,
            count: counter
        }
        dispatch(BasketSlice.actions.addToBasket(addToItemBasket))
    }

    const addToFavorites = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        let addToItemFavorite = {
            id: props.id,
            disabled: disabled
        }

        if (disabled){
            dispatch(FavoriteSlice.actions.removeFavorite(props.id))
            console.log('a')
        }
        else {
            dispatch(FavoriteSlice.actions.addToFavorite(addToItemFavorite))
            const idx = dataFavorites.find(item => item.id === addToItemFavorite.id)
            console.log(idx?.disabled)
        }
        setDisabled(!disabled)
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
                    {/*---- btn to favorites ----*/}
                    <button
                       className='icon-favorite'
                       onClick={addToFavorites}
                    >
                        <img src={disabled ? IFavoritesActive : IFavorites} alt="favorites" className='favorite-img'/>
                    </button>

                </div>
            </div>

            {/*---- item counter ----*/}
            <div className="item-buy">
                <Counter count={counter} onChangeCount={setCounter}/>
                <MainButton onClick={addToBasket}>Купить</MainButton>
            </div>
        </div>
    );
};

export default React.memo(Item);