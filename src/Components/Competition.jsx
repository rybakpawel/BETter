import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Competition = () => {

    const users = [{ name: 'pawel', points: 20 }, { name: 'ema', points: 10 }, { name: 'paulina', points: 35 }]  // próbna tablica użytkowników, docelowa - do pobrania z Mongo

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

    const handleMatchList = matches => {
        const matchList = matches.map(match =>
            <p className='competition__grid__matchList__match' key={match.id}>{`${teams[match.team1 - 1].name.slice(0, 3)} - ${teams[match.team2 - 1].name.slice(0, 3)}`}</p>
        )
        return (
            <div className='competition__grid__matchList'>
                {matchList}
            </div>
        )
    }

    const handlePoints = () => {
        const userPoints = users.map(user =>
            <p className='competition__grid__points__userPoints'>{user.points}</p>
        )
        return (
            <div className='competition__grid__points'>
                <p className='competition__grid__points__title'>Punkty</p>
                {userPoints}
            </div>
        )
    }

    const handleUserList = users => {
        const userList = users.map(user =>
            <p className='competition__grid__user'>{user.name}</p>
        )
        return (
            <div className='competition__grid__userList'>
                {userList}
            </div>
        )
    }

    const handleResults = (matches, users) => {
        // const userList = users.map(user => {
        //     const matchesList = matches.map(match => {
        //         <p></p>
        //     })
        // })
        return (
            <div className='competition__grid__results'>

            </div>
        )
    }

    const handleGrid = () => {
        return (
            <>
                {handleMatchList(sorted)}
                {handlePoints()}
                {handleUserList(users)}
                {handleResults(sorted, users)}
            </>
        )
    }

    return (
        <div className='competition'>
            <h3 className='competition__title'>Rozgrywka</h3>
            <div className='competition__grid'>
                {isLoading ? <p>ładuję...</p> : handleGrid()}
            </div>
            <Link to='/bet' className='table__link'>
                <button className='table__link__button' type='button'>Przejdź do typowania!</button>
            </Link>
        </div>
    )
}

export default Competition;