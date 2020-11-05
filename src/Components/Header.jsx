import React from 'react'

import '../Styles/Header.min.css'

const Header = () => {
    return (
        <>
            <div className='header'>
                <h1 className='logo'>BETter</h1>
                <div className='logIn'>
                    <button>Zaloguj się</button>
                    <span> / </span>
                    <button>Zarejestruj się</button>
                </div>
            </div>
        </>
    )
}

export default Header