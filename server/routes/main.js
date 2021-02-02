const router = require('express').Router();

router.get('/', (req, res) => {
    res.json( {message: "BETter"})
})

module.exports = router