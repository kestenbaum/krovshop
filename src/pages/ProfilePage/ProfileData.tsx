import React, {FC} from 'react';
import MainButton from "../../components/UI/MainButton/MainButton";


const ProfileData :FC = () => {

    const user = localStorage.getItem('user')
    const getUser = user && JSON.parse(user)

    const deleteLocalStorage = () => {
        localStorage.clear()
    }

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
            <a href='/'>
                <MainButton
                    onClick={deleteLocalStorage}
                >
                    Выйти из аккаунта
                </MainButton>
            </a>
        </div>
    );
};

export default React.memo(ProfileData);