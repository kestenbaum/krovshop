import React, {FC, useEffect, useMemo, useState} from 'react';
import Counter from "../../UI/Counter/Counter";
import MainButton from "../../UI/MainButton/MainButton";
import {BasketSlice} from "../../../store/reducer/BasketSlice";
import {IBasket} from "../../../models/Items";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

interface IBasketItem {
    props: IBasket
    onChange: (num: number) => any
}

const BasketItem:FC<IBasketItem> = ({props, onChange}) => {

    const basket = useAppSelector(state => state.BasketSliceReducer.basket)
    {/*---- create dispatch ----*/}
    const dispatch = useAppDispatch()

    {/*---- create counter ----*/}
    const countProps = props.count ? props.count : 1
    const [counter, setCounter] = useState<number>(countProps)

    {/*---- functions ----*/}
    const removeItem = () => {
        dispatch(BasketSlice.actions.removeToBasket(props.id))
    }

    const allPrice =  useMemo(() => {
        return props.price ? props.price * counter : 0
    }, [counter])


    useEffect(() => {
        onChange(allPrice)
        console.log('all ', allPrice)
    }, [countProps, counter])

    return (
        <div className='favorite-item'>

            <div className="f-block">
                    <div className="title-favorite">
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

export default React.memo(BasketItem);