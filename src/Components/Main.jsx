import React, { useState } from 'react'

import '../Styles/Main.min.css'

import heroImage from '../images/football.jpg'

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
        <div className='mainContainer'>
            <img src={heroImage} alt="mainImage" className='hero' />
            <h2 className='quote'>Football,<br></br>bloody hell!</h2>
            {isTutorialClicked ? showTutorial() : <button className='tutorialButton' onClick={handleTutorialClick}>Samouczek</button>}
        </div>
    )
}

export default Main