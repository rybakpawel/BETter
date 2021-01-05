import React, { useState } from 'react'

import Header from '../Header';
import Register from '../Register';
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
            <Register />
            <Header isLogInClicked={handleIsLogIn} />
            <Menu />
            <Footer />
            {isLogIn ? <LogIn isLogInClicked={handleIsLogIn} /> : null}
        </>
    )
}

export default RegisterSite;