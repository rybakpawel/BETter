import React from 'react'

const MatchDetails = (props) => {
    const { match, stadiums, teams, detailRef } = props
    const handleStadium = (stadiums) => {
        let correctStadium;
        stadiums.forEach((stadium) => {
            if (stadium.id === match.stadium) {
                correctStadium = stadium
            }
        })
        return correctStadium
    }

    const handleStadiumImage = (stadiums) => {
        const stadium = handleStadium(stadiums);
        return (
            `url('../images/stadiums/${stadium.id}.jpg')`
        )
    }

    const handleStadiumDetails = (stadiums) => {
        const stadium = handleStadium(stadiums);
        return (
            `${stadium.city}, ${stadium.name}, poj. ${stadium.capacity}`
        )
    }

    return (
        <div className='detail' ref={detailRef} style={{ backgroundImage: handleStadiumImage(stadiums) }}>
            <div className='detail__teams'>
                <div className='detail__teams__one-team'>
                    <p>{teams[match.team1 - 1].name}</p>
                </div>
                <div className='detail__teams__one-team'>
                    <p>{teams[match.team2 - 1].name}</p>
                </div>
            </div>
            <div className='detail__menu'>
                <div className='detail__menu__section'>
                    <p>ostatni mecz</p>
                </div>
                <div className='detail__menu__section'>
                    <p>miejsce</p>
                </div>
                <div className='detail__menu__section'>
                    <p>forma</p>
                </div>
                <div className='detail__menu__section'>
                    <p>???</p>
                </div>
                <div className='detail__menu__section'>
                    <p>stadion</p>
                </div>
            </div>
            <div className='detail__results'>
                <div className='detail__results__one-result'>
                    <p className='detail__results__one-result__text'>ostatni mecz 1</p>
                    <p className='detail__results__one-result__text'>ostatni mecz 2</p>
                </div>
                <div className='detail__results__one-result'>
                    <p className='detail__results__one-result__text'>miejsce 1 (punktów 1)</p>
                    <p className='detail__results__one-result__text'>miejsce 2 (punktów 1)</p>
                </div>
                <div className='detail__results__one-result'>
                    <p className='detail__results__one-result__text'>forma 1</p>
                    <p className='detail__results__one-result__text'>forma 2</p>
                </div>
                <div className='detail__results__one-result'>
                    <p className='detail__results__one-result__text'>??? 1</p>
                    <p className='detail__results__one-result__text'>??? 2</p>
                </div>
                <p>{handleStadiumDetails(stadiums)}</p>
            </div>
        </div>
    )
}

export default MatchDetails