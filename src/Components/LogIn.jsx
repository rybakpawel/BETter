import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import '../Styles/LogIn.min.css'

const LogIn = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const divRef = useRef();

    useEffect(() => {
        divRef.current.style.opacity = '1';
    })

    const handleInputLogin = (e) => {
        setLogin(e.target.value);
    }

    const handleInputPassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <>

            <Link to='/'>
                <div className={'loginContainer'}></div>
            </Link>
            <form action="" className='loginForm' ref={divRef}>
                <div>
                    <label htmlFor="">login</label>
                    <input type="text" value={login} onChange={handleInputLogin} />
                </div>
                <div>
                    <label htmlFor="">hasło</label>
                    <input type="password" value={password} onChange={handleInputPassword} />
                    <button>przypomnij hasło</button>
                </div>

                <input type="submit" value="Zaloguj" className={'logButton'} />
                <button>Nie masz konta? Zarejestruj się!</button>
            </form>
        </>
    )
}

export default LogIn