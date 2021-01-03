import React from 'react'

import { BiCopyright } from 'react-icons/bi';

const Footer = (props) => {
    return (
        <>
            <footer className='footer'>
                {props.icons ? <div className='footer__iconsDescription'>Icons made by
                    <a href="https://www.flaticon.com/authors/freepik" className='footer__iconsDescription__link' title="Freepik"> Freepik </a>
                    from
                    <a href="https://www.flaticon.com/" className='footer__iconsDescription__link' title="Flaticon"> www.flaticon.com</a>
                </div> : null}
                <h4 className='footer__copyright'><span className='footer__copyright__logo'>BETter</span><BiCopyright /> 2020. Wszelkie prawa zastrzeżone.</h4>
            </footer>
        </>
    )
}

export default Footer;