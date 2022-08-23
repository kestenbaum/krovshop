import React, {FC} from 'react';
import Avatar from "../../../assets/img/avatar.jpg";
import MainButton from "../../UI/MainButton/MainButton";

const ProfileInfo :FC= () => {
    /*---- Получение юзера ----*/
    const user = localStorage.getItem('user')
    const getUser = user && JSON.parse(user)

    return (
        <div className="profile-info">
            <div className="profile-avatar">
                <img className='user-avatar' src={Avatar} alt="user-avatar"/>
                <MainButton>Редактировать профиль</MainButton>
            </div>

            <div className="profile-names">
                <span className='profile-user'>Имя: {getUser.name}</span>
                <span className='profile-user'>Фамилия: {getUser.surname}</span>
            </div>
        </div>
    );
};

export default React.memo(ProfileInfo);