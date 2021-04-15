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
        const response = await fetch('/register')
        const data = await response.json()
        if (data.errorMsg.input === 'login') {
            setErrorMessage({
                login: data.errorMsg.msg,
                email: ''
            })
        } else if (data.errorMsg.input === 'email') {
            setErrorMessage({
                login: '',
                email: data.errorMsg.msg
            })
        }

    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputRegister({
            ...inputRegister,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        setErrorMessage(() => {
            let errorMessage = {}
            if (!inputRegister.email) errorMessage.email = "Wprowadź adres e-mail"
            else if (!inputRegister.email.includes('@')) errorMessage.email = "Brakuje @"

            if (!inputRegister.login) errorMessage.login = "Wprowadź login"
            else if (inputRegister.login.length < 5) errorMessage.login = "Za krótki login"

            if (!inputRegister.password) errorMessage.password = "Wprowadź hasło"
            else if (inputRegister.password.length < 5) errorMessage.password = "Za krótkie hasło"
            else if (!/[A-Z]/.test(inputRegister.password)) errorMessage.password = "Brakuje wielkiej litery"
            else if (!/[0-9]/.test(inputRegister.password)) errorMessage.password = "Brakuje cyfry"

            if (!inputRegister.confirmPassword) errorMessage.confirmPassword = "Potwierdź hasło"
            else if (inputRegister.confirmPassword !== inputRegister.password) errorMessage.confirmPassword = "Nieprawidłowe hasło"

            return errorMessage
        })
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
            <form method='POST' action='http://localhost:3080/register' className='register__form' onSubmit={handleSubmit} noValidate>
                {form('e-mail', 'email', 'email', inputRegister.email, errorMessage.email)}
                {form('login', 'login', 'text', inputRegister.login, errorMessage.login)}
                {form('hasło', 'password', 'password', inputRegister.password, errorMessage.password)}
                {form('potwierdź hasło', 'confirmPassword', 'password', inputRegister.confirmPassword, errorMessage.confirmPassword)}
                <button type="submit" className="register__form__button" onSubmit={handleSubmit}>Załóż konto</button>
            </form>
        </div>
    )
}

export default Register;