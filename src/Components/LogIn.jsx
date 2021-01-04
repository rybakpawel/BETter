import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const LogIn = (props) => {

    const [inputLogin, setInputLogin] = useState(
        {
            login: '',
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
            <div className='login-wrapper' onClick={props.isLogInClicked}></div>
            <form action="" className='login' ref={divRef}>
                <div className='login__form'>
                    <label className='login__form__label' htmlFor="">login</label>
                    <input className='login__form__input' name="login" type="text" value={inputLogin.login} onChange={handleInput} />
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