import React, { useContext } from 'react'

import LoginContext from '../../context/loginContext'

import Header from '../Header';
import Register from '../Register';
import Menu from '../Menu';
import LogIn from '../LogIn';
import Footer from '../Footer';

const RegisterSite = () => {

    const { isLoginActive } = useContext(LoginContext)

    return (
        <>
            <Register />
            <Header activeComponent={'register'} />
            <Menu />
            <Footer />
            {isLoginActive ? <LogIn /> : null}
        </>
    )
}

export default RegisterSite;