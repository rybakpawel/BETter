import React, { useState } from 'react'

import Header from '../Header';
import Rules from '../Rules';
import Menu from '../Menu';
import LogIn from '../LogIn';
import Footer from '../Footer';

const RegisterSite = () => {
    const [isLogIn, setIsLogIn] = useState(false)
    const handleIsLogIn = () => {
        setIsLogIn(!isLogIn)
    }

    return (
        <>
            <Rules />
            <Header isLogInClicked={handleIsLogIn} />
            <Menu activeComponent={'rules'} />
            <Footer icons={true} />
            {isLogIn ? <LogIn isLogInClicked={handleIsLogIn} /> : null}
        </>
    )
}

export default RegisterSite;