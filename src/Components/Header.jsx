import React from 'react'
import { Link } from 'react-router-dom'

import '../Styles/Header.min.css'

const Header = () => {

    return (
        <>
            <div className='header'>
                <Link to="/">
                    <button className='logo'>BETter</button>
                </Link>
                <div className='logIn'>
                    <Link to="/login">
                        <button>Zaloguj się</button>
                    </Link>
                    <span> / </span>
                    <Link to="/register">
                        <button>Zarejestruj się</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default Header