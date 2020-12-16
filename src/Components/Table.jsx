import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import api from '../api/api'

import '../Styles/Table.min.css'

const Table = () => {
    const [selected, setSelected] = useState(0)

    const { a, b, c, d, e, f } = api.groups
    const allGroups = a.matches.concat(b.matches, c.matches, d.matches, e.matches, f.matches);

    let tablePosition = 0;

    const handleOption = (e) => {
        tablePosition = 0;
        setSelected(e.target.value - 1)
    }

    const getGroup = (group) => {
        const wholeGroup = api.teams.filter(team => {
            return team.group === group
        })
        return wholeGroup
    }

    const compare = (a, b) => {
        return b.points - a.points;
    }

    // const addStatistics = (team, rival) => {

    // }

    const groups = [
        getGroup("a").sort(compare),
        getGroup("b").sort(compare),
        getGroup("c").sort(compare),
        getGroup("d").sort(compare),
        getGroup("e").sort(compare),
        getGroup("f").sort(compare),
    ]

    const handleTable = (team) => {
        const teamMatches = allGroups.filter(match => {
            return match.team1 === team.id || match.team2 === team.id
        })

        let numberOfMatches = 0;
        let numberOfWins = 0;
        let numberOfTies = 0;
        let numberOfLosts = 0;
        let teamGoals = 0;
        let rivalGoals = 0;
        let numberOfPoints = 0;

        teamMatches.forEach(match => {
            if (match.result1 >= 0 || match.result2 >= 0) {
                numberOfMatches++
                if (team.id === match.team1) {
                    if (match.result1 > match.result2) {
                        numberOfWins++
                        numberOfPoints += 3
                    }
                    else if (match.result1 === match.result2) {
                        numberOfTies++
                        numberOfPoints += 1
                    }
                    else numberOfLosts++
                    teamGoals += match.result1
                    rivalGoals += match.result2
                } else if (team.id === match.team2) {
                    if (match.result2 > match.result1) {
                        numberOfWins++
                        numberOfPoints += 3
                    }
                    else if (match.result2 === match.result1) {
                        numberOfTies++
                        numberOfPoints += 1
                    }
                    else numberOfLosts++
                    teamGoals += match.result2
                    rivalGoals += match.result1
                }
            }
        })

        tablePosition++;

        return (
            <div className='tablePosition'>
                <div>
                    <p>{`${tablePosition}.`}</p>
                    <p>{team.name}</p>
                </div>
                <div>
                    <p>{numberOfMatches}</p>
                    <p>{numberOfWins}</p>
                    <p>{numberOfTies}</p>
                    <p>{numberOfLosts}</p>
                    <p>{`${teamGoals}-${rivalGoals}`}</p>
                    <p>{numberOfPoints}</p>
                </div>
            </div>
        )
    }

    return (
        <div className='tableContainer'>
            <h3>Tabela</h3>
            <div className='formTableContainer'>
                <form action="" className='formTable'>
                    <select value={selected + 1} name="groups" id="groups" onChange={handleOption}>
                        <option value={1}>Grupa A</option>
                        <option value={2}>Grupa B</option>
                        <option value={3}>Grupa C</option>
                        <option value={4}>Grupa D</option>
                        <option value={5}>Grupa E</option>
                        <option value={6}>Grupa F</option>
                    </select>
                    <p className='formTableLegend'>M - mecze, Z - zwycięstwa, R - remisy, P - porażki, B - bramki, Pkt - punkty</p>
                </form>
                <div className='table'>
                    <div className='tablePositionShortcuts'>
                        <p>M</p>
                        <p>Z</p>
                        <p>R</p>
                        <p>P</p>
                        <p>B</p>
                        <p>Pkt</p>
                    </div>
                    {handleTable(groups[selected][0])}
                    {handleTable(groups[selected][1])}
                    {handleTable(groups[selected][2])}
                    {handleTable(groups[selected][3])}
                </div>
            </div>
            <Link to='/bet'>
                <button className='goToBetButton'>Przejdź do typowania!</button>
            </Link>
        </div>
    )
}

export default Table