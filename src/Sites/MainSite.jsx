import React, { useState } from 'react'

import Header from '../Components/Header';
import Main from '../Components/Main';
import Menu from '../Components/Menu';
import LogIn from '../Components/LogIn';

const MainSite = () => {
    const [isLogIn, setIsLogIn] = useState(false)
    const handleIsLogIn = () => {
        setIsLogIn(!isLogIn)
    }

    return (
        <>
            <Header isLogInClicked={handleIsLogIn} />
            <Menu />
            <Main />
            {isLogIn ? <LogIn isLogInClicked={handleIsLogIn} /> : null}
        </>
    )
}

export default MainSite;