const api = require('../src/api/api.json')
// const connection = require('./connection');

const { a, b, c, d, e, f } = api.groups
const allGroups = a.matches.concat(b.matches, c.matches, d.matches, e.matches, f.matches)
const teams = api.teams

const compareBet = (a, b) => {
    return a.date.slice(0, 2) - b.date.slice(0, 2);
}

const isMatchResult = (match) => {
    if (match.result1 === -1) return match
}

const nextMatches = allGroups.filter(isMatchResult)
const sortByDate = nextMatches.sort(compareBet)

module.exports.sortByDate = sortByDate
module.exports.teams = teams