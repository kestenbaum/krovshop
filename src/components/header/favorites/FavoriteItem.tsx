import React, {FC} from 'react';
import MainButton from "../../UI/MainButton/MainButton";
import {IFavoriteElement} from "../../../models/Items";


interface IFavoriteItem {
    props: IFavoriteElement
}

const FavoriteItem:FC<IFavoriteItem> = ({props}) => {

    return (
        <div className='favorite-item'>
            <div className="favorite-info">
                <h3>{props.title}</h3>
                <img src={props.img} alt="img"/>
            </div>
            <MainButton>Cмотреть товар</MainButton>
        </div>
    );
};

export default React.memo(FavoriteItem);