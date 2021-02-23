import React, { useContext } from 'react'

import LoginContext from '../../context/loginContext'

import Header from '../Header';
import Rules from '../Rules';
import Menu from '../Menu';
import LogIn from '../LogIn';
import Footer from '../Footer';

const RegisterSite = () => {

    const { isLoginActive } = useContext(LoginContext)

    return (
        <>
            <Rules />
            <Header />
            <Menu activeComponent={'rules'} />
            <Footer icons={true} />
            {isLoginActive ? <LogIn /> : null}
        </>
    )
}

export default RegisterSite;