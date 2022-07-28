import React, {FC} from 'react';
import Header from "./header/Header";
import FirstScreen from "./FirstScreen";
import Footer from "./Footer";

const Layout:FC = () => {
    return (
        <div>
            <Header/>
            <FirstScreen/>
            <Footer/>
        </div>
    );
};

export default Layout;