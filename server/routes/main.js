const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    jwt.verify(req.cookies.cookieToken, process.env.TOKEN_SECRET, function (err, decoded) {
        if (err) {
          res.send( {name: null})
        } else {
          res.send( { name: decoded.login })
        }
      })
})

module.exports = router;