import React from 'react';
import '../src/scss/index.css';
import Layout from "./components/Layout/Layout";
import Private from "./components/Layout/Private";
import Login from "./components/Layout/Login";




const App = () => {
    const auth = false

    return (
        <div className='app'>
           <Layout children={auth ? <Private/> : <Login/>}/>
        </div>
    );
};

export default App;