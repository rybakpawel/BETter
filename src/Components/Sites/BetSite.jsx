import React, { useState } from 'react'

import Header from '../Header';
import Menu from '../Menu';
import Bet from '../Bet';
import LogIn from '../LogIn';
import Footer from '../Footer';

const BetSite = () => {
    const [isLogIn, setIsLogIn] = useState(false)

    const handleIsLogIn = () => {
        setIsLogIn(!isLogIn)
    }

    return (
        <>
            <Bet />
            <Header isLogInClicked={handleIsLogIn} />
            <Menu activeComponent={'bet'} />
            <Footer />
            {isLogIn ? <LogIn isLogInClicked={handleIsLogIn} /> : null}
        </>
    )
}

export default BetSite;