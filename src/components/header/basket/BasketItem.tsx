import React, {useState} from 'react';
import Counter from "../../UI/Counter/Counter";
import MainButton from "../../UI/MainButton/MainButton";
import m1 from '../../../assets/img/materials/m-1.png'
const BasketItem = () => {

    const [conter, setCounter] = useState<number>(1)

    return (
        <div className='basket-item'>
            <div className="title-block">
                <h3>Title</h3>
            </div>
            <img src={m1} alt="img-item"/>
            <Counter count={conter} onChangeCount={setCounter}/>
            <div className="all-price"></div>
            <MainButton>Удалить</MainButton>
        </div>
    );
};

export default BasketItem;