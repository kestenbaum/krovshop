import React, {FC} from 'react';
import IconFavorites from '../../assets/img/like.svg'

const Favorites:FC = () => {
    return (
        <div className='favorites'>
            <img src={IconFavorites} alt='Иконка избраного'/>
        </div>
    );
};

export default Favorites;