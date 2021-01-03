import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <>
            <div className='header'>
                <Link to="/">
                    <button className='header__logo'>BETter</button>
                </Link>
                <div className='header__login'>
                    <button className='header__login__button' onClick={props.isLogInClicked}>Zaloguj się</button>
                    <span> / </span>
                    <Link to="/register">
                        <button className='header__login__button'>Zarejestruj się</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Header