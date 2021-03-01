import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import MenuContext from '../context/menuContext'

import { FaBars } from 'react-icons/fa'
import { VscChromeClose } from 'react-icons/vsc'

const Menu = (props) => {

    const { isMenuActive, toggleActiveMenu } = useContext(MenuContext)

    const [isMenuHover, setIsMenuHover] = useState('')
    const [zIndex, setZIndex] = useState(isMenuActive ? 'navigation--active-z-index' : '');
    const [isAnimationActive, setIsAnimationActive] = useState('');

    const blockComponent = (e) => {
        e.preventDefault();
    }

    const handleIsMenuHover = () => {
        if (!isMenuHover) setIsMenuHover('navigation__menu__hamburger--active')
        else if (isMenuHover) setIsMenuHover('')
    }

    const menuAnimation = () => {
        if (!isMenuActive) {
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

    const handleIsMenuListActive = () => {
        toggleActiveMenu();
        menuAnimation();
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