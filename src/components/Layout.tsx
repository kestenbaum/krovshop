import React, {FC} from 'react';
import Header from "./header/Header";
import FirstScreen from "./FirstScreen";
import Footer from "./Footer";
import FormContact from "./FormContact";
import Category from "./category/Category";


const Layout:FC = () => {
    return (
        <div>
            <Header/>
            <FirstScreen/>
            <Category/>
            <FormContact/>
            <Footer/>
        </div>
    );
};

export default Layout;