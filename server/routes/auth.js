const router = require('express').Router();
const bcrypt = require('bcryptjs');

const { registerValidation, loginValidation } = require('../validation');
const User = require('../model/User');
const { getAllMatches } = require('../controllers/groups');

let errorMsg = {
    email: null,
    login: null,
    password: null,
    confirmPassword: null
}

router.post('/register', async (req, res) => {
    try {
    const { error } = registerValidation(req.body);
    if (error) {
        Object.keys(errorMsg).forEach(message => errorMsg[message] = false)
        const path = error.details[0].path[0]
        errorMsg[path] = `${(error.details[0].message)}`
        return res.redirect('http://localhost:3000/register')
    } 
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
        errorMsg.email = 'Założono już konto na podany e-mail'
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
        res.redirect('http://localhost:3000/')
    } catch(err) { 
        res.status(400).send(err)
    }
});

router.post('/login', async (req, res) => {
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Nie istnieje konto o podanym emailu');

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Nieprawidłowe hasło');

    res.send('Zalogowałeś się!')
})

router.get('/register', (req, res) => {
    res.send({
        errorMsg,
        })
})

router.get('/login', (req, res) => {
    res.send('elo login')
})

module.exports = router;