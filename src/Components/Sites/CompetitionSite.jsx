import React, { useState } from 'react'

import Header from '../Header';
import Menu from '../Menu';
import Competition from '../Competition';
import LogIn from '../LogIn';
import Footer from '../Footer';

const BetSite = () => {
    const [isLogIn, setIsLogIn] = useState(false)
    const handleIsLogIn = () => {
        setIsLogIn(!isLogIn)
    }

    return (
        <>
            <Competition />
            <Header isLogInClicked={handleIsLogIn} />
            <Menu activeComponent={'competition'} />
            <Footer />
            {isLogIn ? <LogIn isLogInClicked={handleIsLogIn} /> : null}
        </>
    )
}

export default BetSite;