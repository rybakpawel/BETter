import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import DeviceContext from '../context/deviceContext'
import MenuContext from '../context/menuContext'

import { FaBars } from 'react-icons/fa'
import { VscChromeClose } from 'react-icons/vsc'

const Menu = (props) => {

    const { isMenuActive, toggleActiveMenu, zIndex, isAnimationActive } = useContext(MenuContext)
    const { orientation, changeOrientation } = useContext(DeviceContext)

    const [isMenuHover, setIsMenuHover] = useState('')

    useEffect(() => {
        window.addEventListener("resize", changeOrientation);
    }, []);

    const blockComponent = (e) => {
        e.preventDefault();
    }

    const handleIsMenuHover = () => {
        if (!isMenuHover) setIsMenuHover('navigation__menu__hamburger--active')
        else if (isMenuHover) setIsMenuHover('')
    }

    return (
        <>
            <nav className={`navigation ${zIndex} ${isAnimationActive}`} onMouseEnter={handleIsMenuHover} onMouseLeave={handleIsMenuHover}>
                <aside className='navigation__menu'>
                    {isMenuActive
                        ?
                        <>
                            <Link className='navigation__menu__link' to='/bet' style={{ textDecoration: 'none' }}>
                                <button className='navigation__menu__link__list-item' onClick={props.activeComponent === 'bet' ? blockComponent : null}>Wytypuj wyniki!</button>
                            </Link>
                            <Link className='navigation__menu__link' to='/competition' style={{ textDecoration: 'none' }}>
                                <button className='navigation__menu__link__list-item' onClick={props.activeComponent === 'competition' ? blockComponent : null}>Rozgrywka</button>
                            </Link>
                            <Link className='navigation__menu__link' to='/table' style={{ textDecoration: 'none' }}>
                                <button className='navigation__menu__link__list-item' onClick={props.activeComponent === 'table' ? blockComponent : null}>Tabela</button>
                            </Link>
                            <Link className='navigation__menu__link' to='/rules' style={{ textDecoration: 'none' }}>
                                <button className='navigation__menu__link__list-item' onClick={props.activeComponent === 'rules' ? blockComponent : null}>Zasady</button>
                            </Link>
                            <Link className='navigation__menu__link' to='/account' style={{ textDecoration: 'none' }}>
                                <button className='navigation__menu__link__list-item' onClick={props.activeComponent === 'account' ? blockComponent : null}>Konto</button>
                            </Link>
                            {orientation === 'portrait'
                                ? null
                                : <button className={`navigation__menu__hamburger ${isMenuHover}`} onClick={toggleActiveMenu}><VscChromeClose /></button>
                            }
                        </>
                        :
                        orientation === 'portrait'
                            ? null
                            : <button className={`navigation__menu__hamburger ${isMenuHover}`} onClick={toggleActiveMenu}><FaBars /></button>}
                </aside>
            </nav>
        </>
    )
}

export default Menu