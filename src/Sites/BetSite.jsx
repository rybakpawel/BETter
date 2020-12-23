import React, { useState } from 'react'

import Header from '../Components/Header';
import Menu from '../Components/Menu';
import Bet from '../Components/Bet';
import LogIn from '../Components/LogIn';

const BetSite = () => {
    const [isLogIn, setIsLogIn] = useState(false)
    const handleIsLogIn = () => {
        setIsLogIn(!isLogIn)
    }

    return (
        <>
            <Header isLogInClicked={handleIsLogIn} />
            <Menu />
            <Bet />
            {isLogIn ? <LogIn isLogInClicked={handleIsLogIn} /> : null}
        </>
    )
}

export default BetSite;