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

router.get('/', (req, res) => {
    res.send({
        groups: router.groups,
        allMatches: router.allMatches,
    })
})

module.exports = router