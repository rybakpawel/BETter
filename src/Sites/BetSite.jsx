import React, { useState } from 'react'

import Header from '../Components/Header';
import Menu from '../Components/Menu';
import Bet from '../Components/Bet';
import LogIn from '../Components/LogIn';
import Footer from '../Components/Footer';

const BetSite = () => {
    const [isLogIn, setIsLogIn] = useState(false)
    const handleIsLogIn = () => {
        setIsLogIn(!isLogIn)
    }

    return (
        <>
            <Bet />
            <Header isLogInClicked={handleIsLogIn} />
            <Menu />
            {/* <Bet /> */}
            <Footer />
            {isLogIn ? <LogIn isLogInClicked={handleIsLogIn} /> : null}
        </>
    )
}

export default BetSite;