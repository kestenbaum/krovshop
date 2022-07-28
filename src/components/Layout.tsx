import React, {FC} from 'react';
import Header from "./header/Header";
import FirstScreen from "./FirstScreen";

const Layout:FC = () => {
    return (
        <div>
            <Header/>
            <FirstScreen/>
        </div>
    );
};

export default Layout;