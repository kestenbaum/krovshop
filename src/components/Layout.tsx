import React, {FC} from 'react';
import Header from "./header/Header";
import FirstScreen from "./FirstScreen";
import Footer from "./Footer";
import FormContact from "./FormContact";


const Layout:FC = () => {
    return (
        <div>
            <Header/>
            <FirstScreen/>
            <FormContact/>
            <Footer/>
        </div>
    );
};

export default Layout;