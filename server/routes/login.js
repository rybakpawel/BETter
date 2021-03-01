if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const router = require('express').Router();
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

const loadDB = require('../connection');
const initializePassport = require('../passport');
const checkAuthenticate = require('../checkAuthenticate');

const launchServer = async () => {
    const db = await loadDB();
    const usersCollection = await db.collection('users')
    usersCollection.find().toArray((usersErr, usersRes) => {
        if (usersErr) console.log("Błędne zapytanie o kolekcję 'users'")
        else {
            const users = usersRes
            initializePassport(
                passport, 
                login => users.find(user => user.name === login),
                id => users.find(user => user._id === id)
            )
        }
    })
    
    router.post('/', passport.authenticate('local', {
        successRedirect: 'http://localhost:3080/login',
        failureRedirect: 'http://localhost:3000/register',
        failureFlash: true
    }))
}

router.get('/', (req, res) => {

    const auth = req.isAuthenticated()
    console.log(req.isAuthenticated())
    
    res.send({
            user: auth
        })
    
})

router.use(flash())
router.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}))

router.use(passport.initialize())
router.use(passport.session())

launchServer();

module.exports = router