import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import AuthContext from '../context/authContext'
import LoginContext from '../context/loginContext'
import DeviceContext from '../context/deviceContext'
import MenuContext from '../context/menuContext'

import { FaBars } from 'react-icons/fa'
import { VscChromeClose } from 'react-icons/vsc'

const Header = (props) => {

    const { isLogged } = useContext(AuthContext)
    const { toggleActiveLogin } = useContext(LoginContext)
    const { orientation, changeOrientation } = useContext(DeviceContext)
    const { isMenuActive, toggleActiveMenu } = useContext(MenuContext)

    useEffect(() => {
        window.addEventListener("resize", changeOrientation);
    }, []);

    const blockComponent = e => {
        e.preventDefault();
    }

    const handleLogin = (isLogged) => {
        if (!isLogged) {
            return (
                <div className='header__login'>
                    { orientation === 'portrait'
                        ? <button className={`header__login__hamburger`} onClick={toggleActiveMenu}>{isMenuActive ? <VscChromeClose /> : <FaBars />}</button>
                        : null}
                    <div className='header__login__wrapper'>
                        <button className='header__login__wrapper__button' onClick={toggleActiveLogin}>Zaloguj się</button>
                        {orientation === 'portrait' || orientation === 'portrait-tablet' ? null : <span className='header__login__wrapper__span'> / </span>}
                        <Link to="/register">
                            <button className='header__login__wrapper__button' onClick={props.activeComponent === 'register' ? blockComponent : null}>Zarejestruj się</button>
                        </Link>
                    </div>

                </div>
            )
        } else {
            return (
                <div className='header__login'>
                    { orientation === 'portrait'
                        ? <button className={`header__login__hamburger`} onClick={toggleActiveMenu}>{isMenuActive ? <VscChromeClose /> : <FaBars />}</button>
                        : null}
                    <div className='header__login__wrapper'>
                        <h4 className='header__login__wrapper__welcome'>Witaj (name)!</h4>
                        <button className='header__login__wrapper__button'>Wyloguj się</button>
                    </div>
                </div>
            )
        }
    }

    return (
        <>
            <div className='header'>
                <Link to="/" className='header__link'>
                    <button className='header__link__logo' onClick={props.activeComponent === 'main' ? blockComponent : null}>BETter</button>
                </Link>
                {handleLogin(isLogged)}
            </div>
        </>
    )
}
export default Header