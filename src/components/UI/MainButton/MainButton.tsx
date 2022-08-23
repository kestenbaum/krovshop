import React, {FC} from 'react';
import style from '../MainButton/MainButton.module.css'

interface IMainButton extends
    React.DetailedHTMLProps<React.BaseHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{
    disabled?: boolean
}

const MainButton:FC<IMainButton> = (props) => {

    const {children, ...rest} = props

    return (
        <button
            className={style.btn}
            {...rest}
        >
            {children}
        </button>
    );
};

export default MainButton;