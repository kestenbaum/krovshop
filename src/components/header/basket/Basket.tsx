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

    const priceAll = useMemo(() => {
        if (Array.isArray(getBasketData)) {
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
                                <BasketItem props={item} />
                            )}
                        </div>
                }
            </Modal>
        </div>
    );
};

export default Basket;