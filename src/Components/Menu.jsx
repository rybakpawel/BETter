import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaBars } from 'react-icons/fa'
import { VscChromeClose } from 'react-icons/vsc'

const Menu = () => {

    const [isMenuHover, setIsMenuHover] = useState('')
    const [isMenuListActive, setIsMenuListActive] = useState(false);
    const [zIndex, setZIndex] = useState('');
    const [isAnimationActive, setIsAnimationActive] = useState('');

    const handleIsMenuHover = () => {
        if (!isMenuHover) setIsMenuHover('navigation__menu__hamburger--active')
        else if (isMenuHover) setIsMenuHover('')
    }

    const handleIsMenuListActive = () => {
        setIsMenuListActive(!isMenuListActive);
        if (!isMenuListActive) {
            setIsAnimationActive('navigation--animation-menu-in');
            setTimeout(() => {
                setZIndex('navigation--active-z-index');
            }, 250);
        } else {
            setIsAnimationActive('navigation--animation-menu-out');
            setTimeout(() => {
                setZIndex('')
            }, 250);
        }
    }

    return (
        <>
            <nav className={`navigation ${zIndex} ${isAnimationActive}`} onMouseEnter={handleIsMenuHover} onMouseLeave={handleIsMenuHover}>
                <aside className='navigation__menu'>
                    {isMenuListActive
                        ?
                        <>
                            <Link className='navigation__menu__link' to='/bet' style={{ textDecoration: 'none' }}>
                                <button className='navigation__menu__link__list-item'>Wytypuj wyniki!</button>
                            </Link>
                            <Link className='navigation__menu__link' to='/table' style={{ textDecoration: 'none' }}>
                                <button className='navigation__menu__link__list-item'>Tabela</button>
                            </Link>
                            <Link className='navigation__menu__link' to='/calendar' style={{ textDecoration: 'none' }}>
                                <button className='navigation__menu__link__list-item'>Terminarz</button>
                            </Link>
                            <Link className='navigation__menu__link' to='/competition' style={{ textDecoration: 'none' }}>
                                <button className='navigation__menu__link__list-item'>Rozgrywka</button>
                            </Link>
                            <Link className='navigation__menu__link' to='/rules' style={{ textDecoration: 'none' }}>
                                <button className='navigation__menu__link__list-item'>Zasady</button>
                            </Link>
                            <button className={`navigation__menu__hamburger ${isMenuHover}`} onClick={handleIsMenuListActive}><VscChromeClose /></button>
                        </>
                        :
                        <button className={`navigation__menu__hamburger ${isMenuHover}`} onClick={handleIsMenuListActive}><FaBars /></button>}
                </aside>
            </nav>
        </>
    )
}

export default Menu