import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Competition = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [sortedMatches, setSortedMatches] = useState(null)
    const [teams, setTeams] = useState(null)
    const [users, setUsers] = useState(null)

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const response = await fetch('/competition')
        const data = await response.json()
        setSortedMatches(data.sortByDate)
        setTeams(data.teams)
        setUsers(data.users)
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

    const handleUsers = (users, field) => {
        const userList = users.map(user =>
            <p className={`competition__grid__${field}__user`}>{user[field]}</p>
        )
        return (
            <div className={`competition__grid__${field}`}>
                {field === 'points' ? <p className={`competition__grid__${field}__title`}>Punkty</p> : null}
                {userList}
            </div>
        )
    }

    const handleResults = (matches, users) => {
        return (
            <div className='competition__grid__results'>

            </div>
        )
    }

    const handleGrid = () => {
        const compare = (a, b) => {
            if (a.points < b.points) return -1
            if (a.points > b.points) return 1
            return 0
        }

        const sortedUsers = users.sort(compare)

        return (
            <>
                {handleMatchList(sortedMatches)}
                {handleUsers(sortedUsers, 'points')}
                {handleUsers(sortedUsers, 'name')}
                {handleResults(sortedMatches, users)}
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