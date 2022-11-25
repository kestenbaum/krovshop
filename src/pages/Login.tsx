import React, {FC, useState} from 'react';
import MainButton from "../components/UI/MainButton/MainButton";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../hooks/redux";
import {AuthSlice} from "../store/reducer/AuthSlice";
import AddModal from "../components/UI/AddModal/AddModal";
import Modal from "../components/UI/Modal/Modal";

export const Login: FC = () => {

    const [modal, setModal] = useState<boolean>(false)

    /*---- Хук диспатч, все знаем для чего он :)))) ----*/
    const dispatch = useDispatch()

    /*---- Проверка авторизован ли пользыватель или нет ----*/
    const localStore = localStorage.getItem('user')

    if (localStore && localStore.length > 0){
        dispatch(AuthSlice.actions.handlerAuth(true))
    } else {
        dispatch(AuthSlice.actions.handlerAuth(false))
    }

    /*---- данные фейк быза пользывателей для сравнение с полями ----*/
    const dataUser = useAppSelector(state => state.AuthSliceReducer.dataUser)

    /*---- Хранение информации с полей ----*/
    const [data, setData] = useState({email: '', password: ''})

    /*---- Описание ошыбки инпутов ----*/
    const [errorInput, setErrorInput] = useState(
        {
            email: 'Емейл не может быть пустым',
            password: 'Пароль не может быть меньше чем 8 елементов'
        }
    )

    /*---- Проверка на ошыбки инпутов ----*/
    const [checkedInput, setCheckedInput] = useState({email: false, password: false})

    /*---- Состояние кнопки в зависимости от ошыбки инпутов----*/
    const [disabled, setDisabled] = useState<boolean>(false)

    /*---- Функция для onBlur, для проверки полей на ошыбки----*/
    const handlerData = (event: React.ChangeEvent<HTMLInputElement>) => {
        const eventInput = event.target.value
        const regularEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        switch (event.target.name){
            case 'email':
                if (!regularEmail.test(String(eventInput).toLowerCase())) {
                        setCheckedInput({...checkedInput, email: true} )
                        setDisabled(true)
                } else {
                        setCheckedInput({...checkedInput, email: false} )
                        setDisabled(false)
                }
                break
            case 'password':
                if (eventInput.length < 8){
                     setCheckedInput({...checkedInput, password: true} )
                     setDisabled(true)
                } else {
                        setCheckedInput({...checkedInput, password: false} )
                        setDisabled(false)
                }
                break
        }
    }

    /*---- Получение данных с полей ----*/
    const getUserData = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        const result = dataUser.find(element =>
            element.email === data.email && element.password === data.password)

       if ( result) {
           dispatch(AuthSlice.actions.handlerAuth(true))
           localStorage.setItem('user', JSON.stringify(result))
       } else {
           setModal(true)
           localStorage.clear()
       }
    }

    return (
        <div className='login'>
            <Modal
                visible={modal}
                setVisible={setModal}
            >
                <div>Введен не верный <span style={{color: '#e2269e'}}>логин</span> либо <span style={{color: '#e2269e'}}>пароль</span>!</div>
            </Modal>
            <div className="container">
                <div className="login-wrapper">
                    <form className="form-login">
                        <label className='label-form'>
                            <span>Ваш емайл:</span>
                            {checkedInput.email && <div style={{color: 'red'}}>{errorInput.email}</div>}
                            <input
                                className='form-inp'
                                placeholder='Write your login'
                                type='email'
                                name='email'
                                value={data.email}
                                onChange = {e => setData({...data, email: e.target.value})}
                                onBlur={e => handlerData(e)}
                            />
                        </label>
                        <label className='label-form'>
                            <span>Ваш пароль:</span>
                            {checkedInput.password && <div style={{color: 'red'}}>{errorInput.password}</div>}
                            <input
                                className='form-inp'
                                placeholder='Write your password'
                                type='password'
                                name='password'
                                value={data.password}
                                onChange = {e => setData({...data, password: e.target.value})}
                                onBlur={e => handlerData(e)}
                            />
                        </label>
                        <div className="block-btn">
                            <MainButton
                                onClick={getUserData}
                                disabled={disabled}
                            >
                                Войти
                            </MainButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
