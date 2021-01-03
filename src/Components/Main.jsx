import React, { useState } from 'react'

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
        <div className='main'>
            <img className='main__hero' src={heroImage} alt="mainImage" />
            <h2 className='main__quote'>Football,<br></br>bloody hell!</h2>
            {isTutorialClicked ? showTutorial() : <button className='main__button' onClick={handleTutorialClick}>Samouczek</button>}
        </div>
    )
}

export default Main