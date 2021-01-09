const api = require('../src/api/api.json')

const { a, b, c, d, e, f } = api.groups
const allGroups = a.matches.concat(b.matches, c.matches, d.matches, e.matches, f.matches)

const getGroup = (group) => {
    const wholeGroup = api.teams.filter(team => {
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

module.exports.groups = groups
module.exports.allGroups = allGroups
// module.exports.allGroups = allGroups