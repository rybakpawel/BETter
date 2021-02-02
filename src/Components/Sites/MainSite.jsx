import React, { useState } from 'react'

import Header from '../Header';
import Main from '../Main';
import Menu from '../Menu';
import LogIn from '../LogIn';
import Footer from '../Footer';

const MainSite = () => {
    const [isLogIn, setIsLogIn] = useState(false)
    const handleIsLogIn = () => {
        setIsLogIn(!isLogIn)
    }

    const [isMenuActive, setIsMenuActive] = useState(false)
    const toggleMenu = (menuState) => {
        setIsMenuActive(menuState)
    }

    return (
        <>
            <Main />
            <Header isLogInClicked={handleIsLogIn} activeComponent={'main'} />
            <Menu toggle={toggleMenu} isMenu={isMenuActive} />
            <Footer />
            {isLogIn ? <LogIn isLogInClicked={handleIsLogIn} /> : null}
        </>
    )
}

export default MainSite;