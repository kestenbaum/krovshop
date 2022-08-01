import React, {FC} from 'react';
import style from '../MainButton/MainButton.module.css'
import {NavLink} from "react-router-dom";

interface IMainButton extends React.HTMLProps<HTMLLinkElement>{
    page: string
}

const MainButton:FC<IMainButton> = ({children, page}) => {

    return (
        <NavLink
            to={page}
            className={style.btn}
        >
            {children}
        </NavLink>
    );
};

export default MainButton;