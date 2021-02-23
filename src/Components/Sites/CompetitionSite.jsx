import React, { useContext } from 'react'

import LoginContext from '../../context/loginContext'

import Header from '../Header';
import Menu from '../Menu';
import Competition from '../Competition';
import LogIn from '../LogIn';
import Footer from '../Footer';

const BetSite = () => {

    const { isLoginActive } = useContext(LoginContext)

    return (
        <>
            <Competition />
            <Header />
            <Menu activeComponent={'competition'} />
            <Footer />
            {isLoginActive ? <LogIn /> : null}
        </>
    )
}

export default BetSite;