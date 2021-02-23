const router = require('express').Router();
const loadDB = require('../connection');

const launchServer = async () => {
    
    const db = await loadDB();
    const teamsCollection = await db.collection('teams').find()
    teamsCollection.toArray((err, res) => {
        if (err) console.log("Błędne zapytanie o kolekcję 'teams'")
        else {
            const teams = res
            module.exports.teams = teams
        }
    })
    const groupsCollection = await db.collection('groups').find()
    groupsCollection.toArray((err, res) => {
        if (err) console.log("Błędne zapytanie o kolekcję 'groups'")
        else {
            const groups = res
            const allGroups = groups[0].matches.concat(groups[1].matches, groups[2].matches, groups[3].matches, groups[4].matches, groups[5].matches)
            
            const isMatchResult = (match) => {
                if (match.result1 === -1) return match
            }
            
            const compareBet = (a, b) => {
                if (Number(a.date.slice(0, 3)) === Number(b.date.slice(0, 3))) {
                    return Number(a.date.slice(10, 12) - Number(b.date.slice(10, 12)))
                }
                else {
                    return(Number(a.date.slice(0, 3)) - Number(b.date.slice(0, 3)))
                }
            }
            
            const nextMatches = allGroups.filter(isMatchResult)
            const sortByDate = nextMatches.sort(compareBet)

            module.exports.sortByDate = sortByDate
        }
    })
    const stadiumsCollection = await db.collection('stadiums').find()
    stadiumsCollection.toArray((err, res) => {
        if (err) console.log("Błędne zapytanie o kolekcję 'stadiums'")
        else {
            const stadiums = res
            
            module.exports.stadiums = stadiums
        }
    })
}

launchServer();

router.get('/', (req, res) => {
    res.send({
        teams: router.teams,
        sortByDate: router.sortByDate,
        stadiums: router.stadiums,
    })
})

module.exports = router

