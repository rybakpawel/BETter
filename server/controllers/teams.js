const Teams = require('../model/Teams');

const getTeams = async () => {
    try {
        const teams = await Teams.find({}, (err, teams) => {
            if (err) console.log(`Nie znaleziono kolekcji 'teams'`)
        })
        return await teams
        // return await Promise.all(teams)
    } catch {
        console.log('Coś poszło nie tak (teams)')
    }
}

const getGroups = async () => {
    try {
        const teams = await Teams.find({}, (err, teams) => {
            if (err) console.log(`Nie znaleziono kolekcji 'teams'`)
        })
        const getGroup = (group) => {
            const wholeGroup = teams.filter(team => {
                return team.group === group
            })
            return wholeGroup
        }
        const compareTable = (a, b) => {
            return b.points - a.points;
        }
        const groups = [
            getGroup("a").sort(compareTable),
            getGroup("b").sort(compareTable),
            getGroup("c").sort(compareTable),
            getGroup("d").sort(compareTable),
            getGroup("e").sort(compareTable),
            getGroup("f").sort(compareTable), 
        ]

        // return await Promise.all(teams)
        return await groups

    } catch {
        console.log('Cos poszło nie tak (teams)')
    }
}

module.exports = {
    getTeams,
    getGroups,
}