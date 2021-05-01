const Groups = require('../model/Groups');

const getAllMatches = async () => {
    try {
        const groups = await Groups.find({}, (err, groups) => {
            if (err) console.log(`Nie znaleziono kolekcji 'groups'`)
        })
    
        const allMatches = groups[0].matches.concat(groups[1].matches, groups[2].matches, groups[3].matches, groups[4].matches, groups[5].matches)
        
        return await allMatches

    } catch {
        console.log('Coś poszło nie tak (groups)')
    }
}

const getSortByDate = async () => {
    try {
        const groups = await Groups.find({}, (err, groups) => {
            if (err) console.log(`Nie znaleziono kolekcji 'groups'`)
        })
    
        const allMatches = groups[0].matches.concat(groups[1].matches, groups[2].matches, groups[3].matches, groups[4].matches, groups[5].matches)

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
                    
        const nextMatches = allMatches.filter(isMatchResult)
        const sortByDate = nextMatches.sort(compareBet)
        
        return await sortByDate
    } catch {
        console.log('Coś poszło nie tak (groups)')
    }
}

module.exports = {
    getAllMatches,
    getSortByDate
}