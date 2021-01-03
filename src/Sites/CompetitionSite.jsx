import React, { useState } from 'react'

import Header from '../Components/Header';
import Menu from '../Components/Menu';
import Competition from '../Components/Competition';
import LogIn from '../Components/LogIn';
import Footer from '../Components/Footer';

const BetSite = () => {
    const [isLogIn, setIsLogIn] = useState(false)
    const handleIsLogIn = () => {
        setIsLogIn(!isLogIn)
    }

    return (
        <>
            <Competition />
            <Header isLogInClicked={handleIsLogIn} />
            <Menu />
            <Footer />
            {isLogIn ? <LogIn isLogInClicked={handleIsLogIn} /> : null}
        </>
    )
}

export default BetSite;