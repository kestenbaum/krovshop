import React, {FC} from 'react';
import logo from '../../assets/img/logo.svg'
import {NavLink} from "react-router-dom";


const Logo:FC = () => {
    return (
        <NavLink to='/' className='logo'>
            <img src={logo} alt='Логотип сайта'/>
        </NavLink>
    );
};

export default React.memo(Logo);