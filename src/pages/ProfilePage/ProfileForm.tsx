import React, {FC, useState} from 'react';
import MainButton from "../../UI/MainButton/MainButton";

interface IProfileForm {
    modal: boolean
    setModal: any
}

const ProfileForm :FC<IProfileForm> = ({modal, setModal}) => {
    /*---- получение локал с юзером ----*/
    const data = JSON.parse(String(localStorage.getItem('user')))

    /*---- стейт с полями даных для имзмение пользвывателя ----*/
    const [state, setState] = useState<any>({name: '', surname: '', number: '', email: ''})

    /*---- Функция которая проверяет наличие заполненого и поля и перезаписует его ----*/
    const saveData = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const name = state.name === '' ? data.name : state.name
        const surname = state.surname === '' ? data.surname : state.surname
        const number = state.number === '' ? data.number : state. number
        const email = state.email === '' ? data.email : state.email

        const newObj = {...data, name, surname, number, email}

        localStorage.setItem('user', JSON.stringify(newObj))
        setModal(!modal)
    }

    return (
        <form className='profile-form'>
            <input
                value={state.name}
                type='text'
                placeholder='Введите желаемое имя'
                onChange = {e => setState({...state, name: e.target.value})}
                className='profile-input'
            />
            <input
                value={state.surname}
                type='text'
                placeholder='Введите желаемую фамилию'
                onChange = {e => setState({...state, surname: e.target.value})}
                className='profile-input'
            />
            <input
                value={state.number}
                type='text'
                placeholder='Введите новый телефон'
                onChange = {e => setState({...state, number: e.target.value})}
                className='profile-input'
            />
            <input
                value={state.email}
                type='text'
                placeholder='Введите новую почту'
                onChange = {e => setState({...state, email: e.target.value})}
                className='profile-input'
            />
            <MainButton
                onClick={saveData}
            >
                Сохранить
            </MainButton>
        </form>
    );
};

export default React.memo(ProfileForm);