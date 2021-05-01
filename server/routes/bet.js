const router = require('express').Router();

const { getSortByDate } = require('../controllers/groups');
const { getTeams } = require('../controllers/teams');
const getStadiums = require('../controllers/stadiums');

const getData = async () => {
    try {                                               
        const sortByDate = await getSortByDate()
        const teams = await getTeams()
        const stadiums = await getStadiums()
 
        module.exports.sortByDate = sortByDate
        module.exports.teams = teams
        module.exports.stadiums = stadiums
    } catch {
        console.log('Cos poszło nie tak (bet).')
    }  
}

getData();

router.post('/', async (req, res) => {
    try {

    } catch {

    }
})

router.get('/', (req, res) => {
    res.send({
        teams: router.teams,
        sortByDate: router.sortByDate,
        stadiums: router.stadiums,
    })
})

module.exports = router

