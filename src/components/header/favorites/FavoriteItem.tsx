import React, {FC, useState} from 'react';
import MainButton from "../../UI/MainButton/MainButton";
import {IFavoriteElement} from "../../../models/Items";
import {useAppDispatch} from "../../../hooks/redux";
import {FavoriteSlice} from "../../../store/reducer/FavoriteSlice";

interface IFavoritesItem {
  props: IFavoriteElement
}

const FavoriteItem:FC<IFavoritesItem> = ({props}) => {

    const [disabled, setDisabled] = useState(props.disabled)

    {/*---- create dispatch ----*/}
    const dispatch = useAppDispatch()

    {/*---- functions ----*/}
    const removeItemToFavorite = () => {
        dispatch(FavoriteSlice.actions.removeFavorite(props.id))
        setDisabled(!disabled)
    }

    console.log(props)

    return (
        <div className='favorite-item'>
            <div className="favorite-info">
                <h3>{props.title}</h3>
                <img src={props.img} alt="img"/>
            </div>
            <MainButton
                onClick={removeItemToFavorite}
            >
                Удалить</MainButton>
        </div>
    );
};

export default React.memo(FavoriteItem);