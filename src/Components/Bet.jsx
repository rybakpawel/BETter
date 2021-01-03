import React from 'react'

import api from '../api/api'

const Bet = () => {
    const { a, b, c, d, e, f } = api.groups
    let match = 0;

    const compare = (a, b) => {
        return a.date.slice(0, 2) - b.date.slice(0, 2);
    }

    const addMatch = () => {
        match++;
    }

    const isMatchResult = (match) => {
        if (match.result1 === -1) return match
    }

    const allGroups = a.matches.concat(b.matches, c.matches, d.matches, e.matches, f.matches)
    const nextMatches = allGroups.filter(isMatchResult)
    const sortByDate = nextMatches.sort(compare)

    const handleMatchList = () => {
        return (
            <div className='matches bet__form__matches'>
                <div className='matches__one-match'>
                    <label className='matches__one-match__team' htmlFor="">{api.teams[sortByDate[match].team1 - 1].name}</label>
                    <input className='matches__one-match__result' type="number" />
                        :
                    <input className='matches__one-match__result' type="number" />
                    <label className='matches__one-match__team' htmlFor="">{api.teams[sortByDate[match].team2 - 1].name}</label>
                </div>
                <p className='matches__date'>{sortByDate[match].date}</p>
                <button className='matches__details'>szczegóły</button>
                {addMatch()}
            </div>
        )
    }

    return (
        <div className='bet'>
            <h3 className='bet__title'>Najbliższe mecze</h3>
            <form className='bet__form'>
                {handleMatchList()}
                {handleMatchList()}
                {handleMatchList()}
                {handleMatchList()}
                {handleMatchList()}
                {handleMatchList()}
            </form>
            <input className="bet__submit" type="submit" value="Zatwierdź"></input>
        </div>
    )
}

export default Bet