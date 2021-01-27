import React, { useState } from 'react'

import Header from '../Header';
import Menu from '../Menu';
import Table from '../Table';
import LogIn from '../LogIn';
import Footer from '../Footer';

const TableSite = () => {
    const [isLogIn, setIsLogIn] = useState(false)
    const handleIsLogIn = () => {
        setIsLogIn(!isLogIn)
    }
    return (
        <>
            <Table />
            <Header isLogInClicked={handleIsLogIn} />
            <Menu activeComponent={'table'} />
            <Footer />
            {isLogIn ? <LogIn isLogInClicked={handleIsLogIn} /> : null}
        </>
    )
}

export default TableSite;