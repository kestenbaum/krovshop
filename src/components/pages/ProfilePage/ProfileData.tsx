import React, {FC} from 'react';
import MainButton from "../../UI/MainButton/MainButton";

const ProfileData :FC = () => {
    return (
        <div className="profile-data">
            <h3 className="user-info">Информация о пользывателе:</h3>
            <div className="user-label">
                <span className="user-info">Телефон:</span>
                <a href='tel:+380-00-000-00' className='user-phone'>+380-000-00-00</a>
            </div>
            <div className="user-label">
                <span className="user-info">Почта:</span>
                <a href='mailto:mail@gmail.com' className='user-phone'>mail@gmail.com</a>
            </div>
            <MainButton>Редактировать</MainButton>
        </div>
    );
};

export default React.memo(ProfileData);