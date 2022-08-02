import React, {FC} from 'react';
import material from '../../assets/img/materials/1.png'
import MainButton from "../UI/MainButton/MainButton";
import {NavLink} from "react-router-dom";

const CategoryItems:FC = () => {
    return (
        <div className='category-item'>
            <img src={material} alt="material"/>
            <div className="item-information">
                <h3 className="item-title">Металлочерепица</h3>
                <span className="item-description">В продаже можно найти матовую, глянцевую металлочерепицу, черепицу с сатиновой, велюровой, бархатной поверхностью, а также в ассортименте производителей есть покрытия, имитирующие разный рисунок гонта.</span>
                <NavLink to={'/page'}>
                    <MainButton>Смотреть каталог</MainButton>
                </NavLink>
            </div>
        </div>
    );
};

export default CategoryItems;