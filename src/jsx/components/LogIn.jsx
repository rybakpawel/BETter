import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import LoginContext from '../context/loginContext'

const LogIn = () => {

    // const { toggleActiveLogin } = useContext(LoginContext)
    const { isLoginActive, setIsLoginActive } = useContext(LoginContext)

    const [inputLogin, setInputLogin] = useState(
        {
            email: '',
            password: '',
        }
    );

    const [errorMessage, setErrorMessage] = useState(null);

    const divRef = useRef();

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        try {
            const response = await fetch('/user/login')
            const data = await response.json()
            console.log(response)
            if (data) setErrorMessage(data)
            else setErrorMessage(null)
        } catch {
            console.log(':(')
        }

    }

    useEffect(() => {
        divRef.current.style.opacity = '1';
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputLogin({
            ...inputLogin,
            [name]: value
        });
    }

    return (
        <>
            <div className='login-wrapper' onClick={() => setIsLoginActive(!isLoginActive)}></div>
            <form method='POST' action='http://localhost:3080/user/login' className='login' ref={divRef}>
                <div className='login__form'>
                    <label className='login__form__label' htmlFor="">e-mail</label>
                    <input className='login__form__input' name="email" type="text" value={inputLogin.email} onChange={handleInput} />
                </div>
                <div className='login__form'>
                    <label className='login__form__label' htmlFor="">hasło</label>
                    <input className='login__form__input' name="password" type="password" value={inputLogin.password} onChange={handleInput} />
                    <button className='login__form__button'>przypomnij hasło</button>
                </div>
                <button className='login__login-button' type="submit">Zaloguj</button>
                <Link to='/register'>
                    <button className='login__register-button'>Nie masz konta? Zarejestruj się!</button>
                </Link>
                <p className='login__error'>{errorMessage}</p>
            </form>
        </>
    )
}

export default LogIn