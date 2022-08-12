import React, {FC} from 'react';
import Logo from "./Logo";
import Profile from "./Profile";
import Favorites from "./favorites/Favorites";
import Basket from "./basket/Basket";
import Search from "./Search";

const Header:FC = () => {

    return (
        <header className='header'>
            <div className='container'>
                <div className='header-wrapper'>
                    <div className='header-row'>
                        <div className='header-col6 col-active'>
                             <Logo/>
                             <Search/>
                        </div>
                        <div className='header-col6'>
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