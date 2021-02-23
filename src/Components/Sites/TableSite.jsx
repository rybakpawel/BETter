import React, { useContext } from 'react'

import LoginContext from '../../context/loginContext'

import Header from '../Header';
import Menu from '../Menu';
import Table from '../Table';
import LogIn from '../LogIn';
import Footer from '../Footer';

const TableSite = () => {

    const { isLoginActive } = useContext(LoginContext)

    return (
        <>
            <Table />
            <Header />
            <Menu activeComponent={'table'} />
            <Footer />
            {isLoginActive ? <LogIn /> : null}
        </>
    )
}

export default TableSite;