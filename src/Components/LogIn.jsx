import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import '../Styles/LogIn.min.css'

const LogIn = (props) => {

    const [inputLogin, setInputLogin] = useState(
        {
            login: '',
            password: '',
        }
    );

    const divRef = useRef();

    useEffect(() => {
        divRef.current.style.opacity = '1';
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputLogin({
            ...inputLogin,
            [name]: value
        });
    }

    return (
        <>
            <div className='loginContainer' onClick={props.isLogInClicked}></div>
            <form action="" className='loginForm' ref={divRef}>
                <div>
                    <label htmlFor="">login</label>
                    <input name="login" type="text" value={inputLogin.login} onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor="">hasło</label>
                    <input name="password" type="password" value={inputLogin.password} onChange={handleInput} />
                    <button>przypomnij hasło</button>
                </div>

                <input type="submit" value="Zaloguj" className={'logButton'} />
                <Link to='/register'>
                    <button className='loginRegisterButton'>Nie masz konta? Zarejestruj się!</button>
                </Link>
            </form>
        </>
    )
}

export default LogIn