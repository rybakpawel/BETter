import React, { useState } from 'react'

import Header from '../Components/Header';
import Rules from '../Components/Rules';
import Menu from '../Components/Menu';
import LogIn from '../Components/LogIn';
import Footer from '../Components/Footer';

const RegisterSite = () => {
    const [isLogIn, setIsLogIn] = useState(false)
    const handleIsLogIn = () => {
        setIsLogIn(!isLogIn)
    }

    return (
        <>
            <Rules />
            <Header isLogInClicked={handleIsLogIn} />
            <Menu />
            {/* <Rules /> */}
            <Footer icons={true} />
            {isLogIn ? <LogIn isLogInClicked={handleIsLogIn} /> : null}
        </>
    )
}

export default RegisterSite;