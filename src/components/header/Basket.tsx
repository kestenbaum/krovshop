import React, {FC, useState} from 'react';
import IconBasket from '../../assets/img/basket.svg'
import Modal from "../UI/Modal/Modal";


const Basket:FC = () => {

    const [modal, setModal] = useState<boolean>(false)
    const handlerModal = () => {
        setModal(!modal)
    }

    return (
        <div className='basket' onClick={handlerModal}>
            <div className='icon-basket'>
                <img src={IconBasket} alt='Иконка корзины'/>
            </div>
            <div className='info-basket'>
                <span className='m-text'>Корзина </span>
                <span className='m-text'>/ 0 руб</span>
            </div>
            <Modal visible={modal} setVisible={setModal}>
                46565
            </Modal>
        </div>
    );
};

export default Basket;