import React, {FC} from 'react';
import FirstScreen from "../components/FirstScreen";
import Categories from "../components/category/Categories";
import FormContact from "../components/FormContact";

export const FirstPage:FC = () => {
    return (
        <div>
            <FirstScreen/>
            <Categories/>
            <FormContact/>
        </div>
    );
};
