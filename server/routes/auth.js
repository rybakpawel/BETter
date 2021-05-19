const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { registerValidation, loginValidation } = require('../validation');
const User = require('../model/User');
const { getAllMatches } = require('../controllers/groups');
const { sendEmail } = require('../nodemailer');

let registerErrorMsg = {
    email: null,
    login: null,
    password: null,
    confirmPassword: null
}

let loginErrorMsg = null

router.post('/register', async (req, res) => {
    try {
    const { error } = registerValidation(req.body);
    if (error) {
        Object.keys(registerErrorMsg).forEach(message => registerErrorMsg[message] = false)
        const path = error.details[0].path[0]
        registerErrorMsg[path] = `${(error.details[0].message)}`
        return res.redirect('http://localhost:3000/register')
    } 
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
        registerErrorMsg.email = 'Założono już konto na podany e-mail'
        return res.redirect('http://localhost:3000/register')
    } 

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
  
    const matches = await getAllMatches()
    
    const bets = matches.map(match => {
        return {
            id: match.id, 
            result1: null, 
            result2: null
        }
    })

    const user = new User({
        login: req.body.login,
        email: req.body.email,
        password: hashedPassword,
        bets
    });
    await user.save();

    sendEmail(req.body.email, req.body.login)

    res.redirect('http://localhost:3000/')

    } catch(err) { 
        res.status(400).send(err)
    }
});

router.post('/login', async (req, res) => {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        loginErrorMsg = 'Nie istnieje konto o podanym e-mailu'
        return res.redirect('http://localhost:3000/')
    }

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) {
        loginErrorMsg = 'Nieprawidłowe hasło'
        return res.redirect('http://localhost:3000/')
    }

    const token = jwt.sign({ 
        _id: user._id, 
        login: user.login,
        bets: user.bets
    }, process.env.TOKEN_SECRET);

    res.cookie('cookieToken', token, { httpOnly: true })
    res.redirect('http://localhost:3000/')   
})

router.get('/register', (req, res) => {
    res.send({
        registerErrorMsg,
        })
})

router.get('/login', (req, res) => {
    res.send(loginErrorMsg)
})

router.get('/logout', (req, res) => {
    res.clearCookie('cookieToken')
    res.redirect('http://localhost:3000/')
  })

module.exports = router; 