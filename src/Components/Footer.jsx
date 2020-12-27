import React from 'react'

import { BiCopyright } from 'react-icons/bi';

import '../Styles/Footer.min.css'

const Footer = (props) => {
    return (
        <>
            <footer className='footerContainer'>
                {props.icons ? <div className='footerIconsDescription'>Icons made by
                    <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> Freepik </a>
                    from
                    <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                </div> : null}
                <h4 className='footerCopyright'><span>BETter</span><BiCopyright /> 2020. Wszelkie prawa zastrzeżone.</h4>
            </footer>
        </>
    )
}

export default Footer;