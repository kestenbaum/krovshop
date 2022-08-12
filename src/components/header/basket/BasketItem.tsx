import React, {FC, useMemo, useState} from 'react';
import Counter from "../../UI/Counter/Counter";
import MainButton from "../../UI/MainButton/MainButton";
import {BasketSlice} from "../../../store/reducer/BasketSlice";
import {IBasket} from "../../../models/Items";
import {useAppDispatch} from "../../../hooks/redux";

interface IBasketItem {
    props: IBasket
}

const BasketItem:FC<IBasketItem> = ({props}) => {
    {/*---- create dispatch ----*/}
    const dispatch = useAppDispatch()

    {/*---- create counter ----*/}
    const [counter, setCounter] = useState<number>(props.count || 1)

    {/*---- functions ----*/}
    const removeItem = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        dispatch(BasketSlice.actions.removeToBasket(props.id))
    }

    const allPrice =  useMemo(() => {
        return props.price ? props.price * counter : null
    }, [counter])




    return (
        <div className='basket-item'>

            <div className="f-block">
                <div className="title-block">
                    <h3>{props.title}</h3>
                </div>
                <img src={props.img} alt="img-item"/>
            </div>

            <div className="s-block">
                <Counter count={counter} onChangeCount={setCounter}/>
                <div className="all-price">{allPrice} руб</div>
                <MainButton onClick={removeItem}>Удалить</MainButton>
            </div>

        </div>
    );
};

export default BasketItem;