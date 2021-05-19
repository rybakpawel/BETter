const router = require('express').Router();

const { getSortByDate } = require('../controllers/groups');
const { getTeams } = require('../controllers/teams');
const getStadiums = require('../controllers/stadiums');
const User = require('../model/User');

const getData = async () => {
    try {                                               
        const sortByDate = await getSortByDate()
        const teams = await getTeams()
        const stadiums = await getStadiums()
 
        module.exports.sortByDate = sortByDate
        module.exports.teams = teams
        module.exports.stadiums = stadiums
    } catch {
        console.log('Cos poszło nie tak (bet get).')
    }  
}

getData();

router.post('/', async (req, res) => {
    try {
        const user = await User.findOne({ login: req.body.user[0] });

        for (let i = 0; i < user.bets.length; i++) {
            if (user.bets[req.body.id[i] - 1].result1 == null || req.body.bet1[i]) user.bets[req.body.id[i] - 1].result1 = req.body.bet1[i]
            if (user.bets[req.body.id[i] - 1].result2 == null || req.body.bet2[i]) user.bets[req.body.id[i] - 1].result2 = req.body.bet2[i]
        }

        await user.save();

        res.redirect('http://localhost:3000/bet')
    } catch {
        console.log('Cos poszło nie tak (bet post).')
    }
})

router.get('/', (req, res) => {
    res.send({
        teams: router.teams,
        sortByDate: router.sortByDate,
        stadiums: router.stadiums,
        bets: router.bets
    })
})

module.exports = router

