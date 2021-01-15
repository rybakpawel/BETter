import React, { useState, useEffect } from 'react'

const Competition = () => {

    const users = [{ name: 'pawel' }, { name: 'ema' }, { name: 'paulina' }]  // próbna tablica użytkowników, docelowa - do pobrania z Mongo

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

    const handleMatchList = (matches) => {
        const matchList = matches.map((match) => <p>{`${teams[match.team1 - 1].name} - ${teams[match.team2 - 1].name}`}</p>)
        return matchList
    }

    const handleUserList = (users) => {
        const userList = users.map((user) => <p>{user.name}</p>)
        return userList
    }

    return (
        <div className='competition'>
            <h3 className='competition__title'>Rozgrywka</h3>
            <div className='competition__grid'>
                {isLoading ? <p>ładuję...</p> : handleMatchList(sorted)}
                {isLoading ? <p>ładuję...</p> : handleUserList(users)}
            </div>
        </div>
    )
}

export default Competition;