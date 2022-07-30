import React, {FC} from 'react';
import material from '../../assets/img/materials/1.png'
import MainButton from "../UI/MainButton/MainButton";

const CategoryItems:FC = () => {
    return (
        <div className='category-item'>
            <img src={material} alt="material"/>
            <div className="item-information">
                <h3 className="item-title">Металлочерепица</h3>
                <span className="item-description">В продаже можно найти матовую, глянцевую металлочерепицу, черепицу с сатиновой, велюровой, бархатной поверхностью, а также в ассортименте производителей есть покрытия, имитирующие разный рисунок гонта.</span>
                <MainButton>Смотреть каталог</MainButton>
            </div>
        </div>
    );
};

export default CategoryItems;