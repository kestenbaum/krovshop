import React, {FC} from 'react';
import style from '../MainButton/MainButton.module.css'

interface IMainButton extends React.HTMLProps<HTMLButtonElement>{}

const MainButton:FC<IMainButton> = ({children}) => {

    return (
        <button className={style.btn}>
            {children}
        </button>
    );
};

export default MainButton;