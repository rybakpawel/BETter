import React from 'react'

import api from '../api/api'

import '../Styles/Bet.min.css'

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
        if (!match.result1) return match
    }

    const allGroups = a.matches.concat(b.matches, c.matches, d.matches, e.matches, f.matches)
    const nextMatches = allGroups.filter(isMatchResult)
    const sortByDate = nextMatches.sort(compare)

    const handleMatchList = () => {
        return (
            <div>
                <div className="betInputContainer">
                    <label htmlFor="">{api.teams[sortByDate[match].team1 - 1].name}</label>
                    <input type="number" />
                        :
                    <input type="number" />
                    <label htmlFor="">{api.teams[sortByDate[match].team2 - 1].name}</label>
                </div>
                <p>{sortByDate[match].date}</p>
                <button>szczegóły</button>
                {addMatch()}
            </div>
        )
    }

    return (
        <div className='betContainer'>
            <h3>Najbliższe mecze</h3>
            <form className='betForm'>
                {handleMatchList()}
                {handleMatchList()}
                {handleMatchList()}
                {handleMatchList()}
                {handleMatchList()}
                {handleMatchList()}
            </form>
            <input type="submit" value="Zatwierdź" className="betSubmit"></input>
        </div>
    )
}

export default Bet