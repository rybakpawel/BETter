import React, { useState } from 'react'

import { VscChromeClose, VscArrowRight } from 'react-icons/vsc'
import '../icons/font/flaticon.css'

import '../Styles/Rules.min.css'

const Rules = () => {
    const [isActive, setIsActive] = useState(null)
    const handleIsActive = activeButton => {
        setIsActive(activeButton)
    }

    const showRule = (isActive) => {
        switch (isActive) {
            case 1:
                return (
                    <>
                        <p className="ruleDescription"><span className='better'>BETter</span> jest platformą, służącą do typowania wyników meczów piłkarskich na największych światowych turniejch (wkrótce być może i ligach). W tym celu należy założyć konto oraz mieszcząc się w przydzielonym czasie obstawiać rezultaty poszczególnych spotkań. Zabawa trwa przez cały okres rozgrywek, a zwycięzcą jest osoba, która zdobyła największą ilość punktów.</p>
                        <button className="closeRule" onClick={() => handleIsActive(0)}><VscChromeClose /></button>
                        <button className="nextRuleButton" onClick={() => handleIsActive(2)}><VscArrowRight /></button>
                    </>
                )
            case 2:
                return (
                    <>
                        <p className="ruleDescription">Każdy mecz punktowany jest osobno. Za wytypowanie dokładnego wyniku spotkania gracz otrzymuje 3 pkt. W przypadku trafienia tylko i wyłącznie odpowiedniego rozstrzygnięcia (czyli np. remisu lub zwycięstwa jednej z drużyn, ale innym stosunkiem bramek niż przewidział gracz) przewidziany jest 1 pkt. W momencie błędnego typu, bądź nie dokonania go wcale nie należą się żadne punkty. Końcowym rezultatem gracza jest suma punktów zebranych z wszystkich 51 spotkań EURO 2021.</p>
                        <button className="closeRule" onClick={() => handleIsActive(0)}><VscChromeClose /></button>
                        <button className="nextRuleButton" onClick={() => handleIsActive(3)}><VscArrowRight /></button>
                    </>
                )
            case 3:
                return (
                    <>
                        <p className="ruleDescription">Wynik meczu należy zatwierdzić maksymalnie do pierwszego gwizdka sędziego. Po tym czasie typowanie spotkania będzie zablokowane, a gracz otrzyma 0 punktów.</p>
                        <button className="closeRule" onClick={() => handleIsActive(0)}><VscChromeClose /></button>
                        <button className="nextRuleButton" onClick={() => handleIsActive(1)}><VscArrowRight /></button>
                    </>

                )
            default:
                return (
                    null
                )
        }
    }

    return (
        <div className="rulesContainer">
            <h3>Zasady</h3>
            <div className="rules">
                <button
                    className={`rulesButtonContainer ${isActive && isActive !== 1 ? 'notActiveRule' : (isActive ? 'activeRule' : '')}`}
                    onClick={() => handleIsActive(1)}>

                    <span className="rulesButtonIcon flaticon-whistle-1"></span>
                    <h4>Ogólne</h4>
                </button>
                <button
                    className={`rulesButtonContainer ${isActive && isActive !== 2 ? 'notActiveRule' : (isActive ? 'activeRule' : '')}`}
                    onClick={() => handleIsActive(2)}>

                    <span className="rulesButtonIcon flaticon-scores"></span>
                    <h4>Punktacja</h4>
                </button>
                <button
                    className={`rulesButtonContainer ${isActive && isActive !== 3 ? 'notActiveRule' : (isActive ? 'activeRule' : '')}`}
                    onClick={() => handleIsActive(3)}>

                    <span className="rulesButtonIcon flaticon-chronometer-sports-tool"></span>
                    <h4>Terminy</h4>
                </button>
                {isActive ? showRule(isActive) : null}
            </div>
            <button className="rulesSubmit">Załóż konto</button>
        </div>
    )
}

export default Rules;