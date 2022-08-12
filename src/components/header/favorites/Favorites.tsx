import React, {FC, useState} from 'react';
import IconFavorites from '../../../assets/img/like.svg'
import Modal from "../../UI/Modal/Modal";
import FavoriteItem from "./FavoriteItem";

const Favorites:FC = () => {
    {/*---- Create State Modal ----*/}
    const [modal, setModal] = useState<boolean>(false)

    {/*---- functions ----*/}
    const handlerModal = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault()
        setModal(!modal)
    }
    return (
        <div className='favorites' onClick={handlerModal}>
            <img src={IconFavorites} alt='Иконка избраного'/>
            <Modal visible={modal} setVisible={setModal}>
                <FavoriteItem/>
            </Modal>
        </div>
    );
};

export default Favorites;