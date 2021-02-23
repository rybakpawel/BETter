import React, { useEffect, useRef, useState } from 'react'

const Bet = () => {

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
        loadData();
    }, [])

    useEffect(() => {
        if (activeDetails) {
            detailRef.current.style.top = `${mousePosition.y}px`;
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
        setIsLoading(false);
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
                        <p className='detail__results__one-result__text'>miejsce 2 (punktów 2)</p>
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
                        <input className='matches__one-match__result' type="number" />
                        :
                    <input className='matches__one-match__result' type="number" />
                        <label className='matches__one-match__team' htmlFor="">{teams[match.team2 - 1].name}</label>
                    </div>
                    <p className='matches__date'>{match.date}</p>
                    <button
                        className='matches__details'
                        onClick={handleClick}
                        onMouseEnter={() => handleDetails(match.id)}
                        onMouseLeave={() => handleDetails(null)}
                        ref={buttonRef}>
                        szczegóły
                        {activeDetails === match.id ? showDetails(match) : null}
                    </button>
                </div>
            )
        })
        return matchList
    }

    if (isLoading) {
        return (
            <div>ładuję</div>
        )
    } else {
        return (
            <div className='bet'>
                <h3 className='bet__title'>Najbliższe mecze</h3>
                <form className='bet__form'>
                    {isLoading ? <p>ładowanie..</p> : nextMatch(sorted)}
                </form>
                <button className="bet__submit" type="submit">Zatwierdź</button>
            </div>
        )
    }
}

export default Bet