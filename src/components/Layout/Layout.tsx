import React, {FC} from 'react';
import Header from "../header/Header";
import Footer from "../Footer";

interface ILayout {
    children: React.ReactNode | React.ReactElement
}

const Layout:FC<ILayout> = ({children}) => {
    return (
        <div>
            <Header/>
                {children}
            <Footer/>
        </div>
    );
};

export default React.memo(Layout);