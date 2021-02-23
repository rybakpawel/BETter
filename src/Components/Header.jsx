import React from 'react'
import { Link } from 'react-router-dom'
import { useLoginContext } from '../context/loginContext'

const Header = (props) => {
    const blockComponent = e => {
        e.preventDefault();
    }

    const handleLogin = (isLogged) => {
        if (!isLogged) {
            return (
                <div className='header__login'>
                    <button className='header__login__button' onClick={props.isLogInClicked}>Zaloguj się</button>
                    <span> / </span>
                    <Link to="/register">
                        <button className='header__login__button' onClick={props.activeComponent === 'register' ? blockComponent : null}>Zarejestruj się</button>
                    </Link>
                </div>
            )
        } else {
            return (
                <div className='header__login'>
                    <button className='header__login__button'>Wyloguj się</button>
                </div>
            )
        }
    }

    return (
        <>
            <div className='header'>
                <Link to="/">
                    <button className='header__logo' onClick={props.activeComponent === 'main' ? blockComponent : null}>BETter</button>
                </Link>
                {handleLogin(false)}
            </div>
        </>
    )
}
export default Header