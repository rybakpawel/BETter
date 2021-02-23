import React, { useContext } from 'react'

import LoginContext from '../../context/loginContext'

import Header from '../Header';
import Menu from '../Menu';
import Bet from '../Bet';
import LogIn from '../LogIn';
import Footer from '../Footer';

const BetSite = () => {

    const { isLoginActive } = useContext(LoginContext)

    return (
        <>
            <Bet />
            <Header />
            <Menu activeComponent={'bet'} />
            <Footer />
            {isLoginActive ? <LogIn /> : null}
        </>
    )
}

export default BetSite;