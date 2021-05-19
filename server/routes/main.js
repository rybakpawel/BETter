const router = require('express').Router();
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    jwt.verify(req.cookies.cookieToken, process.env.TOKEN_SECRET, function (err, decoded) {
        if (err) {
          res.send({
              isLogged: false,
              name: null,
              bets: null,
            })
        } else {
          res.send({ 
              isLogged: true,
              name: decoded.login,
              bets: decoded.bets
            })
        }
      })
})

module.exports = router;