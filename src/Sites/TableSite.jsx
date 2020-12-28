import React, { useState } from 'react'

import Header from '../Components/Header';
import Menu from '../Components/Menu';
import Table from '../Components/Table';
import LogIn from '../Components/LogIn';
import Footer from '../Components/Footer';

const TableSite = () => {
    const [isLogIn, setIsLogIn] = useState(false)
    const handleIsLogIn = () => {
        setIsLogIn(!isLogIn)
    }
    return (
        <>
            <Table />
            <Header isLogInClicked={handleIsLogIn} />
            <Menu />
            {/* <Table /> */}
            <Footer />
            {isLogIn ? <LogIn isLogInClicked={handleIsLogIn} /> : null}
        </>
    )
}

export default TableSite;