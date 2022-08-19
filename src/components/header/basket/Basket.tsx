import React, {FC, useMemo, useState} from 'react';
import IconBasket from '../../../assets/img/basket.svg'
import Modal from "../../UI/Modal/Modal";
import {useAppSelector} from "../../../hooks/redux";
import BasketItem from "./BasketItem";
import {IBasket} from "../../../models/Items";


const Basket: FC = () => {

    {/*---- State Modal ----*/}
    const [modal, setModal] = useState<boolean>(false)

    {/*---- get Data----*/}
    const getBasketData = useAppSelector(state => state.BasketSliceReducer.basket)
    const getProductsData = useAppSelector(state => state.MetalTileSliceReducer.items)

    {/*---- events ----*/}
    const handlerModal = () => {
        setModal(!modal)
    }

    {/*---- functions ----*/}
    let result: IBasket[] = []

    if (getBasketData.length > 0) {
        result = getBasketData.map(item => {
                const itemBasket = getProductsData.find(el => el.id === item.id)
                return {
                    ...itemBasket,
                    count: item.count || 1,
                }
            }
        )
    }

    return (
        <div className='basket' onClick={handlerModal}>
            <div className='icon-basket'>
                <img src={IconBasket} alt='Иконка корзины'/>
            </div>

            <div className='info-basket'>
                <span className='m-text r-text'>
                    {/*---- count items favorites ----*/}
                    <div className="basket-count">
                        <span>{getBasketData.length}</span>
                    </div>
                </span>
            </div>


            <Modal visible={modal} setVisible={setModal}>
                {
                    result.length === 0
                        ? <div>Корзина пуста</div>
                        : <div className='basket-wrapper'>
                            {result.map(item =>
                                <BasketItem key={item.id} props={item} />
                            )}
                            <div className='basket-price'>Общая сумма товаров: 0 рублей</div>
                        </div>
                }
            </Modal>
        </div>
    );
};

export default React.memo(Basket);