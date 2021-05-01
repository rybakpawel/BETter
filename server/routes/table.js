const router = require('express').Router();

const { getAllMatches } = require('../controllers/groups');
const { getGroups } = require('../controllers/teams');

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

getData();

// const launchServer = async () => {
//     const db = await loadDB();
//     const groupsCollection = await db.collection('groups').find()
//     groupsCollection.toArray((err, res) => {
//         if (err) console.log("Błędne zapytanie o kolekcję 'groups'")
//         else {
//             const groups = res
//             const allGroups = groups[0].matches.concat(groups[1].matches, groups[2].matches, groups[3].matches, groups[4].matches, groups[5].matches)
//             module.exports.allGroups = allGroups
//         }
//     })

//     const teamsCollection = await db.collection('teams').find()
//     teamsCollection.toArray((err, res) => {
//         if (err) console.log("Błędne zapytanie o kolekcję 'teams'")
//         else {
//             const teams = res
//             const getGroup = (group) => {
//                 const wholeGroup = teams.filter(team => {
//                     return team.group === group
//                 })
//                 return wholeGroup
//             }
//             const compareTable = (a, b) => {
//                 return b.points - a.points;
//             }
//             const groups = [
//                 getGroup("a").sort(compareTable),
//                 getGroup("b").sort(compareTable),
//                 getGroup("c").sort(compareTable),
//                 getGroup("d").sort(compareTable),
//                 getGroup("e").sort(compareTable),
//                 getGroup("f").sort(compareTable), 
//             ]
//             module.exports.groups = groups
//         }
//     })
// }

// launchServer();

router.get('/', (req, res) => {
    res.send({
        groups: router.groups,
        allMatches: router.allMatches,
    })
})

module.exports = router