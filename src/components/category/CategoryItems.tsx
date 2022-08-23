import React, {FC} from 'react';
import material from '../../assets/img/materials/1.png'
import MainButton from "../UI/MainButton/MainButton";
import {NavLink} from "react-router-dom";
import {useAppSelector} from "../../hooks/redux";

interface ICategoryItems {
    id?: number
    title: string
}

const CategoryItems:FC<ICategoryItems> = (props) => {
    const data = useAppSelector(state => state.MetalTileSliceReducer)

    return (
        <div className='category-item'>
            <img src={material} alt="material"/>
            <div className="item-information">
                <h3 className="item-title">{props.title}</h3>
                <span className="item-description">В продаже можно найти матовую, глянцевую {props.title.toLowerCase()}, черепицу с сатиновой, велюровой, бархатной поверхностью, а также в ассортименте производителей есть покрытия, имитирующие разный рисунок гонта.</span>
                <NavLink to={`/page/${props.id}`}>
                    <MainButton>Смотреть каталог</MainButton>
                </NavLink>
            </div>
        </div>
    );
};

export default CategoryItems;