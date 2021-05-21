const router = require('express').Router();

const { getAllMatches } = require('../controllers/groups');
const { getGroups, getTeams } = require('../controllers/teams');

const getData = async () => {
    try {                                               
        const allMatches = await getAllMatches()
        const groups = await getGroups()
        
        module.exports.allMatches = allMatches
        module.exports.groups = groups
    } catch {
        console.log('Cos poszło nie tak (table).')
    }  
}

const saveStatistics = async () => {
    try {                                               
        const allMatches = await getAllMatches()
        const teams = await getTeams()

        const teamStatistics = teams.map((team) => {
            Object.entries(team).forEach(([key, value]) => {
                if (key !== '_id' && key !== 'id' && key !== 'name' && key !== 'group') value = 0
            })

            const teamMatches = allMatches.filter(match => {
                return match.team1 === team.id || match.team2 === team.id
            })
            team.points = 0
            teamMatches.forEach(match => {
    
                const { result1, result2, team1, team2 } = match

                
                
                if (result1 >= 0 || result2 >= 0) {
                    team.numberOfMatches++
                    if (team.id === team1) {
                        if (result1 > result2) {
                            team.wins++
                            team.points += 3
                        }
                        else if (result1 === result2) {
                            team.ties++
                            team.points += 1
                        }
                        else team.loses++
                        team.goalsScored += result1
                        team.goalsLost += result2
                    } else if (team.id === team2) {
                        if (result2 > result1) {
                            team.wins++
                            team.points += 3
                        }
                        else if (result2 === result1) {
                            team.ties++
                            team.points += 1
                        }
                        else team.loses++
                        team.goalsScored += result2
                        team.goalsLost += result1
                    }
                }
            })
            return team
        })

        await Promise.all(teamStatistics.map(async (statistic) => {
            await statistic.save();
        }))
        
    } catch {
        console.log('Cos poszło nie tak (table).')
    }  
}

getData();
saveStatistics();

router.get('/', (req, res) => {
    res.send({
        groups: router.groups,
        allMatches: router.allMatches,
    })
})

module.exports = router