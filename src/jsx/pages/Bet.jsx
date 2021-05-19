import React, { useContext, useEffect, useRef, useState } from 'react'

import Loading from '../components/Loading';
import MatchDetails from '../components/MatchDetails';

import AuthContext from '../context/authContext'
import LoginContext from '../context/loginContext'
import DeviceContext from '../context/deviceContext'
import mousePosition from '../helpers/mousePosition'

const Bet = () => {

    const { auth } = useContext(AuthContext)
    const { isLogged, name, bets } = auth
    const { isLoginActive, setIsLoginActive } = useContext(LoginContext)
    const { orientation, changeOrientation } = useContext(DeviceContext)

    const [isLoading, setIsLoading] = useState(true)
    const [sorted, setSorted] = useState(null)
    const [teams, setTeams] = useState(null)
    const [stadiums, setStadiums] = useState(null)
    const [betss, setBets] = useState(null)
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
        const data = await response.json()

        setSorted(data.sortByDate)
        setTeams(data.teams)
        setStadiums(data.stadiums)
        // setBets(data.bets)
        setIsLoading(false);
    }

    const handleClick = (e) => {
        e.preventDefault()
    }

    const handleDetails = (id) => {
        window.addEventListener("mousemove", updateMousePosition);
        setActiveDetails(id)
    }

    const nextMatch = (matches) => {
        const matchList = matches.map((match) => {
            const { date, id, team1, team2 } = match
            let betedMatch = {};
            let { result1, result2 } = betedMatch
            const currentDate = new Date()

            if ((currentDate.getDate() >= parseInt(date.slice(0, 2), 10)
                && currentDate.getMonth() + 1 >= parseInt(date.slice(3, 5), 10)
                && currentDate.getHours() >= parseInt(date.slice(10, 12), 10))
                || currentDate.getMonth() + 1 > parseInt(date.slice(3, 5), 10)) {
                return null
            }


            bets.forEach((bet) => {
                if (id === bet.id) {
                    result1 = bet.result1
                    result2 = bet.result2
                }
            })

            return (
                <div className='matches bet__form__matches' key={id}>
                    <div className='matches__one-match'>
                        <label className='matches__one-match__team' htmlFor="">{teams[team1 - 1].name}</label>
                        <input className='matches__one-match__result' type="number" name="bet1" placeholder={result1} />
                        :
                        <input className='matches__one-match__result' type="number" name="bet2" placeholder={result2} />
                        <label className='matches__one-match__team' htmlFor="">{teams[team2 - 1].name}</label>
                        <input type='hidden' name='user' value={name} />
                        <input type='hidden' name='date' value={date} />
                        <input type='hidden' name='id' value={id} />
                    </div>
                    <p className='matches__date'>{date}</p>
                    { orientation === 'portrait' || orientation === 'portrait-tablet' || window.innerWidth < 860 ? null :
                        <button
                            className='matches__details'
                            onClick={handleClick}
                            onMouseEnter={() => handleDetails(id)}
                            onMouseLeave={() => handleDetails(null)}
                            ref={buttonRef}>
                            szczegóły
                            {activeDetails === id ? <MatchDetails match={match} stadiums={stadiums} teams={teams} detailRef={detailRef} /> : null}
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
                {isLoading || !bets ? <Loading /> : nextMatch(sorted)}
            </div>
            <button className='bet__submit' type={isLogged ? 'submit' : 'button'} onClick={isLogged ? null : () => setIsLoginActive(!isLoginActive)}>{isLogged ? 'Zatwierdź' : 'Zaloguj się'}</button>
        </form>
    )
}

export default Bet