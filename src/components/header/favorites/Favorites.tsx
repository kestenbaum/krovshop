import React, {FC, useState} from 'react';
import IconFavorites from '../../../assets/img/like.svg'
import Modal from "../../UI/Modal/Modal";
import {useAppSelector} from "../../../hooks/redux";
import FavoriteItem from "./FavoriteItem";
import {IFavoriteElement} from "../../../models/Items";

const Favorites:FC = () => {

    {/*---- Create State Modal ----*/}
    const [modal, setModal] = useState<boolean>(false)

    {/*---- get data ----*/}
    const getFavoritesData = useAppSelector(state => state.FavoriteSliceReducer.items)
    const getProducts = useAppSelector(state => state.MetalTileSliceReducer)
    const getProductsData = Object.values(getProducts).flat()

    {/*---- functions ----*/}
    const handlerModal = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault()
        setModal(!modal)
    }

    let result: IFavoriteElement[] = []

    if (getFavoritesData.length > 0) {
        result = getFavoritesData.map(item => {
                const itemBasket = getProductsData.find(el => el.id === item.id)
                return {
                    ...itemBasket,
                    disabled: false
                }
            }
        )
    }

    return (
        <div className='favorites' onClick={handlerModal}>
            <img src={IconFavorites} alt='Иконка избраного'/>

            {/*---- count items favorites ----*/}
            <div className="favorites-count">
                <span>{getFavoritesData.length}</span>
            </div>

            {/*---- modal favorite ----*/}
            <Modal visible={modal} setVisible={setModal}>
                <div className='favorite-wrapper'>
                    {
                        getFavoritesData.length === 0
                        ? <div>Вы пока нечего не добавили в избараное.</div>
                        : <div className='favorites-block'>
                                {
                                    result.map(item => <FavoriteItem key={item.id} props={item} />)
                                }
                        </div>
                    }
                </div>
            </Modal>
        </div>
    );
};

export default React.memo(Favorites);