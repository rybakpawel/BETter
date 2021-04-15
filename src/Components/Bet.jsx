import React, { useContext, useEffect, useRef, useState } from 'react'

import Loading from './helpers/Loading';

import AuthContext from '../context/authContext'
import LoginContext from '../context/loginContext'
import DeviceContext from '../context/deviceContext'
import mousePosition from './helpers/mousePosition'

const Bet = () => {

    const { isLogged } = useContext(AuthContext)
    const { toggleActiveLogin } = useContext(LoginContext)
    const { orientation, changeOrientation } = useContext(DeviceContext)

    const [isLoading, setIsLoading] = useState(true)
    const [sorted, setSorted] = useState(null)
    const [teams, setTeams] = useState(null)
    const [stadiums, setStadiums] = useState(null)
    const [activeDetails, setActiveDetails] = useState(null)
    const [mousePosition, setMousePosition] = useState(
        {
            x: null,
            y: null,
        }
    )

    const buttonRef = useRef();
    const detailRef = useRef();

    useEffect(() => {
        window.addEventListener("resize", changeOrientation);

        return () => window.removeEventListener("resize", changeOrientation);
    }, []);

    useEffect(() => {
        loadData();
    }, [])

    useEffect(() => {
        if (activeDetails) {
            detailRef.current.style.top = `${mousePosition.y - 100}px`;
            detailRef.current.style.left = `${mousePosition.x}px`;
        }
    })

    const updateMousePosition = e => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const loadData = async () => {
        const response = await fetch('/bet')
        const response2 = await fetch('/login')
        const data = await response.json()
        const auth = await response2.json()
        setSorted(data.sortByDate)
        setTeams(data.teams)
        setStadiums(data.stadiums)
        setIsLoading(false);
        console.log(auth)
    }

    const handleClick = (e) => {
        e.preventDefault()
    }

    const handleDetails = (id) => {
        window.addEventListener("mousemove", updateMousePosition);
        setActiveDetails(id)
    }

    const showDetails = (match) => {
        const handleStadium = (stadiums) => {
            let correctStadium;
            stadiums.forEach((stadium) => {
                if (stadium.id === match.stadium) {
                    correctStadium = stadium
                }
            })
            return correctStadium
        }

        const handleStadiumImage = (stadiums) => {
            const stadium = handleStadium(stadiums);
            return (
                `url('../images/stadiums/${stadium.id}.jpg')`
            )
        }

        const handleStadiumDetails = (stadiums) => {
            const stadium = handleStadium(stadiums);
            return (
                `${stadium.city}, ${stadium.name}, poj. ${stadium.capacity}`
            )
        }

        return (
            <div className='detail' ref={detailRef} style={{ backgroundImage: handleStadiumImage(stadiums) }}>
                <div className='detail__teams'>
                    <div className='detail__teams__one-team'>
                        <p>{teams[match.team1 - 1].name}</p>
                    </div>
                    <div className='detail__teams__one-team'>
                        <p>{teams[match.team2 - 1].name}</p>
                    </div>
                </div>
                <div className='detail__menu'>
                    <div className='detail__menu__section'>
                        <p>ostatni mecz</p>
                    </div>
                    <div className='detail__menu__section'>
                        <p>miejsce</p>
                    </div>
                    <div className='detail__menu__section'>
                        <p>forma</p>
                    </div>
                    <div className='detail__menu__section'>
                        <p>???</p>
                    </div>
                    <div className='detail__menu__section'>
                        <p>stadion</p>
                    </div>
                </div>
                <div className='detail__results'>
                    <div className='detail__results__one-result'>
                        <p className='detail__results__one-result__text'>ostatni mecz 1</p>
                        <p className='detail__results__one-result__text'>ostatni mecz 2</p>
                    </div>
                    <div className='detail__results__one-result'>
                        <p className='detail__results__one-result__text'>miejsce 1 (punktów 1)</p>
                        <p className='detail__results__one-result__text'>miejsce 2 (punktów 1)</p>
                    </div>
                    <div className='detail__results__one-result'>
                        <p className='detail__results__one-result__text'>forma 1</p>
                        <p className='detail__results__one-result__text'>forma 2</p>
                    </div>
                    <div className='detail__results__one-result'>
                        <p className='detail__results__one-result__text'>??? 1</p>
                        <p className='detail__results__one-result__text'>??? 2</p>
                    </div>
                    <p>{handleStadiumDetails(stadiums)}</p>
                </div>
            </div>
        )
    }

    const nextMatch = (matches) => {
        const matchList = matches.map((match) => {
            return (
                <div className='matches bet__form__matches' key={match.id}>
                    <div className='matches__one-match'>
                        <label className='matches__one-match__team' htmlFor="">{teams[match.team1 - 1].name}</label>
                        <input className='matches__one-match__result' type="number" name="bet1" />
                        :
                        <input className='matches__one-match__result' type="number" name="bet2" />
                        <label className='matches__one-match__team' htmlFor="">{teams[match.team2 - 1].name}</label>
                    </div>
                    <p className='matches__date'>{match.date}</p>
                    { orientation === 'portrait' || orientation === 'portrait-tablet' || window.innerWidth < 860 ? null :
                        <button
                            className='matches__details'
                            onClick={handleClick}
                            onMouseEnter={() => handleDetails(match.id)}
                            onMouseLeave={() => handleDetails(null)}
                            ref={buttonRef}>
                            szczegóły
                        {activeDetails === match.id ? showDetails(match) : null}
                        </button>
                    }
                </div>
            )
        })
        return matchList
    }

    return (
        <form method='POST' action='http://localhost:3080/bet' className='bet'>
            <h3 className='bet__title'>Najbliższe mecze</h3>
            <div className='bet__form'>
                {isLoading ? <Loading /> : nextMatch(sorted)}
            </div>
            <button className="bet__submit" type={isLogged ? 'submit' : 'button'} onClick={isLogged ? null : toggleActiveLogin}>{isLogged ? 'Zatwierdź' : 'Zaloguj się'}</button>
        </form>
    )
}

export default Bet