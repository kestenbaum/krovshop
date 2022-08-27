import React, {FC} from 'react';
import style from '../Search/Search.module.css'

interface ISearch {
    valueInput: string
    setValueInput: any
}

const Search :FC<ISearch> = ({valueInput, setValueInput}) => {
    return (
            <input
                className={style.inputModule}
                placeholder='Поиск...'
                type='text'
                value={valueInput}
                onChange={setValueInput}
            />
    );
};

export default React.memo(Search);