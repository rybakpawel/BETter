import React, { useState } from 'react'

import api from '../api/api'

import '../Styles/Bet.min.css'

const Bet = () => {

    const [matchList, setMatchList] = useState([]);

    const handleMatchList = () => {

        return (
            <div>
                <label htmlFor="">{api.teams[api.groups.a.matches[0].team1 - 1].name}</label>
                <div className="betInputContainer">
                    <input type="number" />
                        :
                    <input type="number" />
                </div><span></span>
                <label htmlFor="">{api.teams[api.groups.a.matches[0].team2 - 1].name}</label>
                <p>{api.groups.a.matches[0].date}</p>
                <button>szczegóły</button>
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
                {handleMatchList()}
                {handleMatchList()}
                {handleMatchList()}
                {handleMatchList()}
                {handleMatchList()}
                {handleMatchList()}
                {handleMatchList()}
                {handleMatchList()}
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