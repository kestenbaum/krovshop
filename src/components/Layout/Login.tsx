import React from 'react';
import MainButton from "../UI/MainButton/MainButton";

const Login = () => {
    return (
        <div className='login'>
            <div className="container">
                <div className="login-wrapper">
                    <form className="form-login">
                        <label className='label-form'>
                            <span>Login</span>
                            <input
                                className='form-inp'
                                placeholder='Write your login'
                                type='text'
                            />
                        </label>
                        <label className='label-form'>
                            <span>Password</span>
                            <input
                                className='form-inp'
                                placeholder='Write your password'
                                type='password'
                            />
                        </label>
                        <div className="block-btn">
                            <MainButton>Войти</MainButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;