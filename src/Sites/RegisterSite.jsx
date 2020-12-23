import React, { useState } from 'react'

import Header from '../Components/Header';
import Register from '../Components/Register';
import Menu from '../Components/Menu';
import LogIn from '../Components/LogIn';

const RegisterSite = () => {
    const [isLogIn, setIsLogIn] = useState(false)
    const handleIsLogIn = () => {
        setIsLogIn(!isLogIn)
    }

    return (
        <>
            <Header isLogInClicked={handleIsLogIn} />
            <Menu />
            <Register />
            {isLogIn ? <LogIn isLogInClicked={handleIsLogIn} /> : null}
        </>
    )
}

export default RegisterSite;