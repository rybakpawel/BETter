import React, { useState, useEffect } from 'react'

const Bet = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [sorted, setSorted] = useState(null)
    const [teams, setTeams] = useState(null)

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const response = await fetch('/bet')
        const data = await response.json()
        setSorted(data.sortByDate)
        setTeams(data.teams)
        setIsLoading(false);
    }

    const nextMatch = (matches) => {
        const matchList = matches.map((match) => {
            return (
                <div className='matches bet__form__matches'>
                    <div className='matches__one-match'>
                        <label className='matches__one-match__team' htmlFor="">{teams[match.team1 - 1].name}</label>
                        <input className='matches__one-match__result' type="number" />
                        :
                    <input className='matches__one-match__result' type="number" />
                        <label className='matches__one-match__team' htmlFor="">{teams[match.team2 - 1].name}</label>
                    </div>
                    <p className='matches__date'>{match.date}</p>
                    <button className='matches__details'>szczegóły</button>
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