import React, { useEffect, useRef, useState } from 'react'

import '../Styles/Menu.min.css'

const Menu = () => {
    const menuRef = useRef();

    const [isMenuActive, setIsMenuActive] = useState(false);
    const [isMenuListActive, setIsMenuListActive] = useState(false);
    const [zIndex, setZIndex] = useState('');
    const [isAnimationActive, setIsAnimationActive] = useState('');

    const handleIsMenuActive = () => {
        setIsMenuActive(!isMenuActive);
        if (!isMenuActive) {
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

    const handleIsMenuListActive = () => {
        setIsMenuListActive(!isMenuListActive);
    }

    return (
        <>
            <nav className={`menu ${zIndex} ${isAnimationActive}`}
                onMouseEnter={handleIsMenuActive}
                onMouseLeave={handleIsMenuActive}
                ref={menuRef}>
                <aside>
                    {isMenuListActive
                        ?
                        <>
                            <button className='menuList'>Wytypuj wyniki!</button>
                            <button className='menuList'>Tabela</button>
                            <button className='menuList'>Terminarz</button>
                            <button className='menuList'>Uczestnicy</button>
                            <button className='menuList'>Zasady</button>
                        </>
                        :
                        <button className='hamburger' onClick={handleIsMenuListActive}>hamburger</button>}
                </aside>
            </nav>
        </>
    )
}

export default Menu