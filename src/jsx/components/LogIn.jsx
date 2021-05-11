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

    const divRef = useRef();

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
                    <label className='login__form__label' htmlFor="">login</label>
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
            </form>
        </>
    )
}

export default LogIn