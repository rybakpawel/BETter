const router = require('express').Router();

const { getNextMatches } = require('../controllers/groups');
const { getTeams } = require('../controllers/teams');
const getUsers = require('../controllers/users');

const getData = async () => {
    try {                                               
        const nextMatches = await getNextMatches()
        const teams = await getTeams()
        const users = await getUsers()
 
        module.exports.nextMatches = nextMatches
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
        nextMatches: router.nextMatches,
        users: router.users,
    })
})

module.exports = router