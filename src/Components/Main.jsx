import React, { useState } from 'react'

import '../Styles/Main.min.css'

import heroImage from '../images/goalImage.jpg'

const Main = () => {
    const [isTutorialClicked, setIsTutorialClicked] = useState(false)

    const handleTutorialClick = () => {
        setIsTutorialClicked(true)
    }

    const showTutorial = () => {
        return (
            <button>Dalej</button>
        )
    }

    return (
        <>
            <img src={heroImage} alt="mainImage" className='hero' />
            {isTutorialClicked ? showTutorial() : <button className='tutorialButton' onClick={handleTutorialClick}>Samouczek</button>}
        </>
    )
}

export default Main