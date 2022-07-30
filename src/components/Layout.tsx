import React, {FC} from 'react';
import Header from "./header/Header";
import FirstScreen from "./FirstScreen";
import Footer from "./Footer";
import FormContact from "./FormContact";
import Categories from "./category/Categories";


const Layout:FC = () => {
    return (
        <div>
            <Header/>
            <FirstScreen/>
            <Categories/>
            <FormContact/>
            <Footer/>
        </div>
    );
};

export default Layout;