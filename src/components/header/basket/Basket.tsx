import React, {FC, useMemo, useState} from 'react';
import IconBasket from '../../../assets/img/basket.svg'
import Modal from "../../UI/Modal/Modal";
import {useAppSelector} from "../../../hooks/redux";
import BasketItem from "./BasketItem";
import {IBasket} from "../../../models/Items";


const Basket: FC = () => {
    /*---- Состояние модального окна ----*/
    const [modal, setModal] = useState<boolean>(false)

    /*---- Создание состояние для приема данных от ребенка ----*/
    const [totalPrice, setTotalPrice] = useState(0)

    /*---- калбек фунция по приему данных с BasketItems ----*/
    const handler = (num:number) => {
        setTotalPrice(num)
    }

    /*---- Получение данные с редакс ----*/
    const getBasketData = useAppSelector(state => state.BasketSliceReducer.basket)
    const getProducts = useAppSelector(state => state.MetalTileSliceReducer)
    const getProductsData = Object.values(getProducts).flat()

    /*---- events ----*/
    const handlerModal = () => {
        setModal(!modal)
    }

    /*---- functions ----*/
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
    /*----  подсчет всей суммы ----*/
    const totalPriceBasket = useMemo(() => {
        return totalPrice * getBasketData.length
    }, [totalPrice])

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
                        : <div className='favorite-wrapper'>
                            <div className='favorites-block'>
                                {result.map(item =>
                                    <BasketItem key={item.id} props={item} onChange={handler}/>
                                )}
                                <div className='basket-price'>Общая сумма товаров: {totalPriceBasket} рублей</div>
                            </div>
                        </div>
                }
            </Modal>
        </div>
    );
};

export default React.memo(Basket);