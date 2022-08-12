import React, {FC, useMemo, useState} from 'react';
import IconBasket from '../../../assets/img/basket.svg'
import Modal from "../../UI/Modal/Modal";
import {useAppSelector} from "../../../hooks/redux";
import BasketItem from "./BasketItem";
import {IBasket} from "../../../models/Items";


const Basket: FC = () => {

    const [modal, setModal] = useState<boolean>(false)
    const handlerModal = () => {
        setModal(!modal)
    }

    const basket = useAppSelector(state => state.BasketSliceReducer.basket)
    const products = useAppSelector(state => state.MetalTileSliceReducer.items)

    let result: IBasket[] = []

    if (basket.length > 0) {
        result = basket.map(item => {
                const itemBasket = products.find(el => el.id === item.id)
                return {
                    ...itemBasket,
                    count: item.count || 1,
                }
            }
        )
        console.log('result ', result)
    }

    const priceAll = useMemo(() => {
        if (Array.isArray(basket)) {
            const getValueByKey = (item: any, key: string) => {
                return item[key] ? item[key] : 1
            }
            return result.reduce((acc, item) => acc + getValueByKey(item, 'count') * getValueByKey(item, 'price'), 0)
        } else {
            return 0
        }
    }, [result])

    return (
        <div className='basket' onClick={handlerModal}>
            <div className='icon-basket'>
                <img src={IconBasket} alt='Иконка корзины'/>
            </div>
            <div className='info-basket'>
                <span className='m-text'>Корзина </span>
                <span className='m-text'> {priceAll} руб</span>
            </div>
            <Modal visible={modal} setVisible={setModal}>
                {
                    result.length === 0
                        ? <div>Корзина пуста</div>
                        : <div className='basket-wrapper'>
                            {result.map(item =>
                                <BasketItem
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    img={item.img}
                                    count={item.count}
                                />
                            )}
                        </div>
                }
            </Modal>
        </div>
    );
};

export default Basket;