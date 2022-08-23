import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import FirstPage from "../pages/FirstPage";
import CategoryPage from "../pages/CategoryPage";
import AboutPage from "../pages/AboutPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";

const Private :FC = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<FirstPage/>}/>
                <Route path='/page/:id' element={<CategoryPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/profile' element={<ProfilePage/>}/>
            </Routes>
        </div>
    );
};

export default Private;