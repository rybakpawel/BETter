import React, { useState } from 'react'

import Header from '../Components/Header';
import Menu from '../Components/Menu';
import Table from '../Components/Table';
import LogIn from '../Components/LogIn';

const TableSite = () => {
    const [isLogIn, setIsLogIn] = useState(false)
    const handleIsLogIn = () => {
        setIsLogIn(!isLogIn)
    }
    return (
        <>
            <Header isLogInClicked={handleIsLogIn} />
            <Menu />
            <Table />
            {isLogIn ? <LogIn isLogInClicked={handleIsLogIn} /> : null}
        </>
    )
}

export default TableSite;