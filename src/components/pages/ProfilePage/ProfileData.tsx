import React, {FC} from 'react';
import MainButton from "../../UI/MainButton/MainButton";

const ProfileData :FC = () => {

    /*---- Получение юзера ----*/
    const user = localStorage.getItem('user')
    const getUser = user && JSON.parse(user)

    return (
        <div className="profile-data">
            <h3 className="user-info">Информация о пользывателе: </h3>
            <div className="user-label">
                <span className="user-info">Телефон:</span>
                <a href='tel: ' className='user-phone'>{getUser.number}</a>
            </div>
            <div className="user-label">
                <span className="user-info">Почта:</span>
                <a href='mailto:mail@gmail.com' className='user-phone'>{getUser.email}</a>
            </div>
            <MainButton>Редактировать</MainButton>
        </div>
    );
};

export default React.memo(ProfileData);