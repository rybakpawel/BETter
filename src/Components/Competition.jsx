import React, { useContext, useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Loading from './helpers/Loading';

import DeviceContext from '../context/deviceContext'

const Competition = () => {

    const { orientation } = useContext(DeviceContext)

    const [isLoading, setIsLoading] = useState(true)
    const [sortedMatches, setSortedMatches] = useState(null)
    const [teams, setTeams] = useState(null)
    const [users, setUsers] = useState(null)
    const [activeDetails, setActiveDetails] = useState(
        {
            match: null,
            bet: null,
        }
    )
    const [mousePosition, setMousePosition] = useState(
        {
            x: null,
            y: null,
        }
    )

    const buttonRef = useRef();
    const detailRef = useRef();
    const usersInTable = () => {
        return users.length < 10 ? 10 : users.length
    }

    useEffect(() => {
        loadData();
    }, [])

    useEffect(() => {
        if (activeDetails.match) {
            detailRef.current.style.top = `${mousePosition.y}px`;
            detailRef.current.style.left = `${mousePosition.x}px`;
        }
    })

    const updateMousePosition = e => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const loadData = async () => {
        const response = await fetch('/competition')
        const data = await response.json()
        setSortedMatches(data.sortByDate)
        setTeams(data.teams)
        setUsers(data.users)
        setIsLoading(false);
    }

    const handleDetails = (match, bet) => {
        window.addEventListener("mousemove", updateMousePosition);
        setActiveDetails({
            match,
            bet
        })
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
            <div className={`competition__grid__${field}`}
                style={{
                    gridTemplateColumns: orientation === 'portrait' || orientation === 'portrait-tablet' ? `22% repeat(${usersInTable()}, 1fr)` : null
                }}>
                {field === 'points' ? <p className={`competition__grid__${field}__title`}>Punkty</p> : <div className={`competition__grid__${field}__title`}></div>}
                {userList}
            </div>
        )
    }

    const showDetails = (match, bet) => {
        return (
            <div className='result__details' ref={detailRef}>
                <div className='result__details__teams'>
                    <p className='result__details__teams__team1'>{match.team1}</p>
                    <p className='result__details__teams__team2'>{match.team2}</p>
                </div>
                <div className='result__details__real'>
                    <p>Wynik</p>
                    <p>{match.result1 === -1 ? '-' : match.result1}</p>
                    <p>{match.result2 === -1 ? '-' : match.result2}</p>
                </div>
                <div className='result__details__user'>
                    <p>Typ</p>
                    <p>{bet.result1 === null ? '-' : bet.result1}</p>
                    <p>{bet.result2 === null ? '-' : bet.result2}</p>
                </div>
            </div>
        )
    }

    const showResult = (color, match, bet) => {
        return (
            <>
                <p
                    className={`result result--${color}`}
                    onMouseEnter={() => handleDetails(match, bet)}
                    onMouseLeave={() => handleDetails(null, null)}
                    ref={buttonRef}
                >

                </p>
                {(activeDetails.match === match && activeDetails.bet === bet) ? showDetails(match, bet) : null}
            </>
        )
    }

    const handleResults = (matches, users) => {
        const userResult = users.map(user => {
            const userBets = user.bets.map(bet => {
                if (matches[bet.id - 1].result1 === -1)
                    return showResult('grey', matches[bet.id - 1], bet)
                else if (matches[bet.id - 1].result1 === bet.result1 && matches[bet.id - 1].result2 === bet.result2)
                    return showResult('green', matches[bet.id - 1], bet)

                else if (
                    (matches[bet.id - 1].result1 > matches[bet.id - 1].result2 && bet.result1 > bet.result2)
                    ||
                    (matches[bet.id - 1].result1 < matches[bet.id - 1].result2 && bet.result1 < bet.result2)
                    ||
                    (matches[bet.id - 1].result1 === matches[bet.id - 1].result2 && bet.result1 === bet.result2)
                )
                    return showResult('yellow', matches[bet.id - 1], bet)

                else
                    return showResult('red', matches[bet.id - 1], bet)
            })
            return <div className='competition__grid__results__user'>{userBets}</div>
        })

        return (
            <div className='competition__grid__results'
                style={{
                    gridTemplateColumns: orientation === 'portrait' || orientation === 'portrait-tablet' ? `repeat(${usersInTable()}, 1fr)` : null
                }}>
                {userResult}
            </div>
        )
    }

    const handleGrid = () => {
        const compare = (a, b) => {
            if (a.points < b.points) return -1
            if (a.points > b.points) return 1
            return 0
        }

        console.log(users.length)

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
            {isLoading ?
                <Loading /> :
                <div className='competition__grid'>
                    {handleGrid()}
                </div>

            }
            <Link to='/bet' className='competition__link'>
                <button className='competition__link__button' type='button'>Przejdź do typowania!</button>
            </Link>
        </div>
    )
}

export default Competition;