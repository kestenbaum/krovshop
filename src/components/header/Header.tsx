import React, {FC} from 'react';
import Logo from "./Logo";
import Profile from "./Profile";
import Favorites from "./favorites/Favorites";
import Basket from "./basket/Basket";


const Header:FC = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='header-wrapper'>
                    <div className='header-row'>
                        <div className='header-col6 col-active'>
                             <Logo/>
                        </div>
                        <div className='header-col6 header-nav'>
                            <Profile/>
                            <Favorites/>
                            <Basket/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;