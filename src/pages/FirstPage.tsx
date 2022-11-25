import React, {FC} from 'react';
import FirstScreen from "../FirstScreen";
import Categories from "../category/Categories";
import FormContact from "../FormContact";

export const FirstPage:FC = () => {
    return (
        <div>
            <FirstScreen/>
            <Categories/>
            <FormContact/>
        </div>
    );
};
