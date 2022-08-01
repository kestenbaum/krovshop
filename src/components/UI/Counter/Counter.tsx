import React, {FC} from 'react';
import style from '../Counter/Counter.module.css'


interface ICounter {
    count: number
    onChangeCount: any
}

const Counter:FC<ICounter> = ({count, onChangeCount}) => {

    const increment = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        onChangeCount(count + 1)
    }

    const decrement = (event : React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        count === 1 ? onChangeCount(1) : onChangeCount(count - 1)
    }

    return (
        <div className={style.counter}>
            <button
                onClick={decrement}
                className={style.btn}
            >
                -
            </button>
            <span className="count">{count}</span>
            <button
                onClick={increment}
                className={style.btn}
            >
                +
            </button>
        </div>
    );
};

export default Counter;