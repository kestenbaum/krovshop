import React, {FC} from 'react';

const FormContact:FC = () => {
    return (
        <div className='form-contact'>
            <div className='container'>
                <div className="form-wrapper">
                    <h2 className="tittle-form">Вызвать специалиста для замера, консультации и составления расчета!</h2>
                    <form className="form-container">
                        <input type="text"/>
                        <input type="text"/>
                        <button>Оставить заявку</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormContact;