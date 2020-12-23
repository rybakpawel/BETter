import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaBars } from 'react-icons/fa'
import { VscChromeClose } from 'react-icons/vsc'

import '../Styles/Menu.min.css'

const Menu = () => {

    const [isMenuHover, setIsMenuHover] = useState('')
    const [isMenuListActive, setIsMenuListActive] = useState(false);
    const [zIndex, setZIndex] = useState('');
    const [isAnimationActive, setIsAnimationActive] = useState('');

    const handleIsMenuHover = () => {
        if (!isMenuHover) setIsMenuHover('active')
        else if (isMenuHover) setIsMenuHover('')
    }

    const handleIsMenuListActive = () => {
        setIsMenuListActive(!isMenuListActive);
        if (!isMenuListActive) {
            setIsAnimationActive('animationMenuIn');
            setTimeout(() => {
                setZIndex('activeZIndex');
            }, 250);
        } else {
            setIsAnimationActive('animationMenuOut');
            setTimeout(() => {
                setZIndex('')
            }, 250);
        }
    }

    return (
        <>
            <nav className={`menu ${zIndex} ${isAnimationActive}`} onMouseEnter={handleIsMenuHover} onMouseLeave={handleIsMenuHover}>
                <aside>
                    {isMenuListActive
                        ?
                        <>
                            <Link to='/bet' style={{ textDecoration: 'none' }}>
                                <button className='menuList'>Wytypuj wyniki!</button>
                            </Link>
                            <Link to='/table' style={{ textDecoration: 'none' }}>
                                <button className='menuList'>Tabela</button>
                            </Link>
                            <Link to='/calendar' style={{ textDecoration: 'none' }}>
                                <button className='menuList'>Terminarz</button>
                            </Link>
                            <Link to='/contestants' style={{ textDecoration: 'none' }}>
                                <button className='menuList'>Uczestnicy</button>
                            </Link>
                            <Link to='/rules' style={{ textDecoration: 'none' }}>
                                <button className='menuList'>Zasady</button>
                            </Link>
                            <button className={`hamburger ${isMenuHover}`} onClick={handleIsMenuListActive}><VscChromeClose /></button>
                        </>
                        :
                        <button className={`hamburger ${isMenuHover}`} onClick={handleIsMenuListActive}><FaBars /></button>}
                </aside>
            </nav>
        </>
    )
}

export default Menu