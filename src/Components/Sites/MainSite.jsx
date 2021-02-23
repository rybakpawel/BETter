import React, { useState, useContext } from 'react'
import MenuContext from '../../context/menuContext'

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

    return (
        <>
            <Main />
            <Header isLogInClicked={handleIsLogIn} activeComponent={'main'} />
            <Menu />
            <Footer />
            {isLogIn ? <LogIn isLogInClicked={handleIsLogIn} /> : null}
        </>
    )
}

export default MainSite;