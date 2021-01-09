import React, { useState, useEffect } from 'react'

import api from '../api/api'

const Bet = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [sorted, setSorted] = useState(null)

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const response = await fetch('/bet')
        const data = await response.json()
        setSorted(data)
        setIsLoading(false);
    }

    let match = 0;
    const addMatch = () => {
        match++;
    }

    const handleMatchList = () => {
        return (
            <div className='matches bet__form__matches'>
                <div className='matches__one-match'>
                    <label className='matches__one-match__team' htmlFor="">{api.teams[sorted[match].team1 - 1].name}</label>
                    <input className='matches__one-match__result' type="number" />
                        :
                    <input className='matches__one-match__result' type="number" />
                    <label className='matches__one-match__team' htmlFor="">{api.teams[sorted[match].team2 - 1].name}</label>
                </div>
                <p className='matches__date'>{sorted[match].date}</p>
                <button className='matches__details'>szczegóły</button>
                {addMatch()}
            </div>
        )
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
                    {isLoading ? <p>ładowanie..</p> : handleMatchList()}
                    {isLoading ? <p>ładowanie..</p> : handleMatchList()}
                    {isLoading ? <p>ładowanie..</p> : handleMatchList()}
                    {isLoading ? <p>ładowanie..</p> : handleMatchList()}
                    {isLoading ? <p>ładowanie..</p> : handleMatchList()}
                    {isLoading ? <p>ładowanie..</p> : handleMatchList()}
                </form>
                <button className="bet__submit" type="submit">Zatwierdź</button>
            </div>
        )
    }
}

export default Bet