import React, {FC} from 'react';
import IconProfile from '../../assets/img/profile.svg'
import {NavLink} from "react-router-dom";

const Profile:FC = () => {
    return (
        <NavLink to='/profile' className='profile'>
            <div className='profile-icon'>
                <img src={IconProfile} alt='Иконка профиля'/>
            </div>
            <div className='info-profile'>
                <span className='m-text'>Мой аккаунт</span>
            </div>
        </NavLink>
    );
};

export default Profile;