import React from 'react'

import '../Styles/Main.min.css'

import heroImage from '../images/goalImage.jpg'

const Main = () => {
    return (
        <>
            <img src={heroImage} alt="mainImage" className='hero' />
            <button className='startButton'>Rozpocznij</button>
        </>
    )
}

export default Main