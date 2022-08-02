import React, {FC} from 'react';
import Header from "./header/Header";
import Footer from "./Footer";
import {Routes, Route} from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import FirstPage from "./pages/FirstPage";
import AboutPage from "./pages/AboutPage";


const Layout:FC = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<FirstPage/>}/>
                <Route path='/page' element={<CategoryPage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default Layout;