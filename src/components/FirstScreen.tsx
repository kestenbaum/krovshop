import React, {FC} from 'react';


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
                    <a href='#' className='link'>
                        Подробнее
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FirstScreen;