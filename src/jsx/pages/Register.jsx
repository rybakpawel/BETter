import React, { useState, useEffect } from 'react';

const Register = () => {

    const [inputRegister, setInputRegister] = useState(
        {
            email: '',
            login: '',
            password: '',
            confirmPassword: '',
        }
    );
    const [errorMessage, setErrorMessage] = useState(
        {
            email: '',
            login: '',
            password: '',
            confirmPassword: '',
        }
    );

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const response = await fetch('/user/register')
        const data = await response.json()
        const { email, login, password, confirmPassword } = data.errorMsg
        setErrorMessage({
            email,
            login,
            password,
            confirmPassword,
        })
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputRegister({
            ...inputRegister,
            [name]: value
        });
    }

    const form = (label, name, type, inputType, errorMessageType) => {
        return (
            <div className="register__form__box">
                <label htmlFor="" className='register__form__box__label'>{label}</label>
                <input
                    name={name}
                    type={type}
                    className='register__form__box__input'
                    value={inputType}
                    onChange={handleInput} />
                <p className='register__form__box__error'>{errorMessageType}</p>
            </div>
        )
    }

    return (
        <div className='register'>
            <h3 className='register__title'>Rejestracja</h3>
            <form method='POST' action='http://localhost:3080/user/register' className='register__form' noValidate>
                {form('e-mail', 'email', 'email', inputRegister.email, errorMessage.email)}
                {form('login', 'login', 'text', inputRegister.login, errorMessage.login)}
                {form('hasło', 'password', 'password', inputRegister.password, errorMessage.password)}
                {form('potwierdź hasło', 'confirmPassword', 'password', inputRegister.confirmPassword, errorMessage.confirmPassword)}
                <button type="submit" className="register__form__button">Załóż konto</button>
            </form>
        </div>
    )
}

export default Register;