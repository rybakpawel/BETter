import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Loading from '../components/Loading';

const Table = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [groups, setGroups] = useState(null)
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const response = await fetch('/table')
        const data = await response.json()
        setGroups(data.groups)
        setIsLoading(false);
    }

    let tablePosition = 0;

    const handleOption = (e) => {
        tablePosition = 0;
        setSelected(e.target.value - 1)
    }

    const handleTeam = (team) => {

        const { name, numberOfMatches, wins, ties, loses, goalsScored, goalsLost, points } = team

        tablePosition++;

        return (
            <div className='table__group__position'>
                <div>
                    <p>{`${tablePosition}.`}</p>
                    <p>{name}</p>
                </div>
                <div>
                    <p>{numberOfMatches}</p>
                    <p>{wins}</p>
                    <p>{ties}</p>
                    <p>{loses}</p>
                    <p>{`${goalsScored}-${goalsLost}`}</p>
                    <p>{points}</p>
                </div>
            </div>
        )
    }

    const handleTable = () => {
        return (
            <>
                {handleTeam(groups[selected][0])}
                {handleTeam(groups[selected][1])}
                {handleTeam(groups[selected][2])}
                {handleTeam(groups[selected][3])}
            </>
        )
    }

    return (
        <div className='table'>
            <h3 className='table__title'>Tabela</h3>
            <div className='table__group'>
                <div className='table__group__form-shortcuts form-shortcuts'>
                    <form action="" className='form-shortcuts__form'>
                        <select className='form-shortcuts__form__select-group' value={selected + 1} name="groups" id="groups" onChange={handleOption}>
                            <option value={1}>Grupa A</option>
                            <option value={2}>Grupa B</option>
                            <option value={3}>Grupa C</option>
                            <option value={4}>Grupa D</option>
                            <option value={5}>Grupa E</option>
                            <option value={6}>Grupa F</option>
                        </select>
                    </form>
                    <div className='form-shortcuts__shortcuts'>
                        <p className='form-shortcuts__shortcuts__shortcut'>M</p>
                        <p className='form-shortcuts__shortcuts__shortcut'>Z</p>
                        <p className='form-shortcuts__shortcuts__shortcut'>R</p>
                        <p className='form-shortcuts__shortcuts__shortcut'>P</p>
                        <p className='form-shortcuts__shortcuts__shortcut'>B</p>
                        <p className='form-shortcuts__shortcuts__shortcut'>Pkt</p>
                    </div>
                </div>
                {isLoading ? <Loading /> : handleTable()}
            </div>
            <Link to='/bet' className='table__link'>
                <button className='table__link__button' type='button'>Przejdź do typowania!</button>
            </Link>
        </div>
    )
}

export default Table