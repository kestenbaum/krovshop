import React, {FC} from 'react';
import IconBasket from '../../assets/img/basket.svg'

const Basket:FC = () => {
    return (
        <div className='basket'>
            <div className='icon-basket'>
                <img src={IconBasket} alt='Иконка корзины'/>
            </div>
            <div className='info-basket'>
                <span className='m-text'>Корзина </span>
                <span className='m-text'>/ 0 руб</span>
            </div>
        </div>
    );
};

export default Basket;