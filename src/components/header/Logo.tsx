import React from 'react';
import logo from '../../assets/img/logo.svg'


const Logo = () => {
    return (
        <div className='logo'>
            <img src={logo} alt='Логотип сайта'/>
        </div>
    );
};

export default Logo;