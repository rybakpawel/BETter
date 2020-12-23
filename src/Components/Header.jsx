import React from 'react'
import { Link } from 'react-router-dom'

import '../Styles/Header.min.css'

const Header = (props) => {
    return (
        <>
            <div className='header'>
                <Link to="/">
                    <button className='logo'>BETter</button>
                </Link>
                <div className='logIn'>
                    <button onClick={props.isLogInClicked}>Zaloguj się</button>
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