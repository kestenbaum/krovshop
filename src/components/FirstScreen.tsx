import React, {FC} from 'react';
import {NavLink} from "react-router-dom";


const FirstScreen:FC = () => {
    return (
        <div className='first-screen'>
            <div className='container'>
                <div className='first-screen-wrapper'>
                    <h1 className='m-tittle'>
                        Всё для вашей кровли и фасада
                    </h1>
                    <span className='description'>
                        Более 10 лет компания KROV.SHOP успешно работает на российском рынке
                    </span>
                    <NavLink to='/about' className='link'>
                        Подробнее
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default FirstScreen;