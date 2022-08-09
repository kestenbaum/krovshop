import React, {FC} from 'react';
import style from '../MainButton/MainButton.module.css'

interface IMainButton extends
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{}

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