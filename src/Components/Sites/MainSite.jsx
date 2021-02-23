import React, { useContext } from 'react'

import LoginContext from '../../context/loginContext'

import Header from '../Header';
import Main from '../Main';
import Menu from '../Menu';
import LogIn from '../LogIn';
import Footer from '../Footer';

const MainSite = () => {

    const { isLoginActive } = useContext(LoginContext)

    return (
        <>
            <Main />
            <Header activeComponent={'main'} />
            <Menu />
            <Footer />
            {isLoginActive ? <LogIn /> : null}
        </>
    )
}

export default MainSite;