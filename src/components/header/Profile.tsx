import React from 'react';
import IconProfile from '../../assets/img/profile.svg'

const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile-icon'>
                <img src={IconProfile} alt='Иконка профиля'/>
            </div>
            <div className='info-profile'>
                <span className='m-text'>Мой аккаунт</span>
            </div>
        </div>
    );
};

export default Profile;