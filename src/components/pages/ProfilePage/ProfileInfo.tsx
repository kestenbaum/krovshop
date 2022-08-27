import React, {FC, useState} from 'react';
import Avatar from "../../../assets/img/avatar.jpg";
import MainButton from "../../UI/MainButton/MainButton";
import Modal from "../../UI/Modal/Modal";
import ProfileForm from "./ProfileForm";

const ProfileInfo :FC= () => {

    /*---- Получение юзера ----*/
    const user = localStorage.getItem('user')
    const getUser = user && JSON.parse(user)

    /*---- modal state ----*/
    const [modal, setModal] = useState<boolean>(false)
    const handlerModal = () => {
        setModal(!modal)
    }

    return (
        <div className="profile-info">
            <div className="profile-avatar">
                <img className='user-avatar' src={Avatar} alt="user-avatar"/>
                <MainButton
                    onClick={handlerModal}
                >
                    Редактировать профиль
                </MainButton>
            </div>

            <div className="profile-names">
                <span className='profile-user'>Имя: {getUser.name}</span>
                <span className='profile-user'>Фамилия: {getUser.surname}</span>
            </div>
            <Modal visible={modal} setVisible={setModal}>
                <ProfileForm modal={modal} setModal={setModal}/>
            </Modal>
        </div>
    );
};

export default React.memo(ProfileInfo);