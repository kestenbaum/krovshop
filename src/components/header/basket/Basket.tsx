import React, {FC, useState} from 'react';
import IconBasket from '../../../assets/img/basket.svg'
import Modal from "../../UI/Modal/Modal";
import {useAppSelector} from "../../../hooks/redux";
import BasketItem from "./BasketItem";


const Basket:FC = () => {

    const [modal, setModal] = useState<boolean>(false)
    const handlerModal = () => {
        setModal(!modal)
    }
    const data = useAppSelector(state => state.BasketSliceReducer.basket)

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
                {
                    data.length === 1
                    ? <div>Корзина пуста</div>
                    : <BasketItem/>

                }
            </Modal>
        </div>
    );
};

export default Basket;