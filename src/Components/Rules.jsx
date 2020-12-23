import React from 'react'

import '../icons/font/flaticon.css'
import '../Styles/Rules.min.css'

const Rules = () => {
    return (
        <div className="rulesContainer">
            <h3>Zasady</h3>
            <div className="rules">
                <button className="rulesButtonContainer">
                    <span className="rulesButtonIcon flaticon-whistle-1"></span>
                    <h4>Ogólne</h4>
                </button>
                <button className="rulesButtonContainer">
                    <span className="rulesButtonIcon flaticon-scores"></span>
                    <h4>Punktacja</h4>
                </button>
                <button className="rulesButtonContainer">
                    <span className="rulesButtonIcon flaticon-chronometer-sports-tool"></span>
                    <h4>Terminy</h4>
                </button>
            </div>
            <button className="rulesSubmit">Załóż konto</button>
        </div>
    )
}

export default Rules;