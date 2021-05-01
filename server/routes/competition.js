const router = require('express').Router();

const { getSortByDate } = require('../controllers/groups');
const { getTeams } = require('../controllers/teams');
const getUsers = require('../controllers/users');

const getData = async () => {
    try {                                               
        const sortByDate = await getSortByDate()
        const teams = await getTeams()
        const users = await getUsers()
 
        module.exports.sortByDate = sortByDate
        module.exports.teams = teams
        module.exports.users = users
    } catch {
        console.log('Cos poszło nie tak (competition).')
    }  
}

getData();

router.get('/', (req, res) => {
    res.send({
        teams: router.teams,
        sortByDate: router.sortByDate,
        users: router.users,
    })
})

module.exports = router