import React, {FC} from 'react';

const FormContact:FC = () => {
    return (
        <div className='form-contact'>
            <div className='container form-block'>
                <div className="form-wrapper">
                    <h2 className="tittle-form">Вызвать специалиста для замера, консультации и составления расчета!</h2>
                    <form className="form-container">
                        <h3 className="title-form">Наш специалист ответит вам в течении 5 минут в рабочее время и приедет в удобное время. Мы составим расчет в течение 24 часов и свяжемся с вами.</h3>
                        <input
                            type="text"
                            className='f-input'
                            placeholder='+380-(999)-999-999'
                        />
                        <input
                            type="text"
                            className='f-input'
                            placeholder='Ваше имя'
                        />
                        <button
                            className='f-button'
                            type='button'
                        >Оставить заявку</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormContact;