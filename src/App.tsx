import React from 'react';
import '../src/scss/index.css';
import {AppRouter} from "./components/AppRouter";

const App = () => {
    return (
        <div className='app'>
            <AppRouter/>
        </div>
    );
};

export default App;