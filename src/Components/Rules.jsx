import React, { useState } from 'react'

import { VscChromeClose, VscArrowRight } from 'react-icons/vsc'
import '../images/icons/font/flaticon.css'

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
                        <p className="rules__rule__description"><span className='rules__rule__description__better'>BETter</span> jest platformą, służącą do typowania wyników meczów piłkarskich na największych światowych turniejch (wkrótce być może i ligach). W tym celu należy założyć konto oraz mieszcząc się w przydzielonym czasie obstawiać rezultaty poszczególnych spotkań. Zabawa trwa przez cały okres rozgrywek, a zwycięzcą jest osoba, która zdobyła największą ilość punktów.</p>
                        <button className="rules__rule__close" onClick={() => handleIsActive(0)}><VscChromeClose /></button>
                        <button className="rules__rule__next" onClick={() => handleIsActive(2)}><VscArrowRight /></button>
                    </>
                )
            case 2:
                return (
                    <>
                        <p className="rules__rule__description">Każdy mecz punktowany jest osobno. Za wytypowanie dokładnego wyniku spotkania gracz otrzymuje 3 pkt. W przypadku trafienia tylko i wyłącznie odpowiedniego rozstrzygnięcia (czyli np. remisu lub zwycięstwa jednej z drużyn, ale innym stosunkiem bramek niż obstawił gracz) przewidziany jest 1 pkt. W momencie błędnego typu, bądź nie dokonania go wcale nie należą się żadne punkty. Końcowym rezultatem gracza jest suma punktów zebranych z wszystkich 51 spotkań EURO 2021.</p>
                        <button className="rules__rule__close" onClick={() => handleIsActive(0)}><VscChromeClose /></button>
                        <button className="rules__rule__next" onClick={() => handleIsActive(3)}><VscArrowRight /></button>
                    </>
                )
            case 3:
                return (
                    <>
                        <p className="rules__rule__description">Wynik meczu należy zatwierdzić maksymalnie do pierwszego gwizdka sędziego. Po tym czasie typowanie spotkania będzie zablokowane, a gracz otrzyma 0 punktów.</p>
                        <button className="rules__rule__close" onClick={() => handleIsActive(0)}><VscChromeClose /></button>
                        <button className="rules__rule__next" onClick={() => handleIsActive(1)}><VscArrowRight /></button>
                    </>

                )
            default:
                return (
                    null
                )
        }
    }

    return (
        <div className="rules">
            <h3 className="rules__title">Zasady</h3>
            <div className="rules__rule">
                <button
                    className={`rules__rule__card ${isActive && isActive !== 1 ? 'rules__rule--not-active' : (isActive ? 'rules__rule--active' : '')}`}
                    onClick={() => handleIsActive(1)}>

                    <span className="rules__rule__card__icon flaticon-whistle-1"></span>
                    <h4 className="rules__rule__card__title">Ogólne</h4>
                </button>
                <button
                    className={`rules__rule__card ${isActive && isActive !== 2 ? 'rules__rule--not-active' : (isActive ? 'rules__rule--active' : '')}`}
                    onClick={() => handleIsActive(2)}>

                    <span className="rules__rule__card__icon flaticon-scores"></span>
                    <h4 className="rules__rule__card__title">Punktacja</h4>
                </button>
                <button
                    className={`rules__rule__card ${isActive && isActive !== 3 ? 'rules__rule--not-active' : (isActive ? 'rules__rule--active' : '')}`}
                    onClick={() => handleIsActive(3)}>

                    <span className="rules__rule__card__icon flaticon-chronometer-sports-tool"></span>
                    <h4 className="rules__rule__card__title">Terminy</h4>
                </button>
                {isActive ? showRule(isActive) : null}
            </div>
            <button className="rules__button" type='button'>Załóż konto</button>
        </div>
    )
}

export default Rules;