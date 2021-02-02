const router = require('express').Router();
const bcrypt = require('bcryptjs')

const userData = []
let errorMsg = {
    msg: null,
    input: null,
}

const setErrorMessage = (res, err) => {
    if (err) {
        errorMsg.msg = `Taki ${err} już istnieje w serwisie`
        res.redirect('http://localhost:3000/register')
    }
    else {
        errorMsg.msg = err
        res.redirect('http://localhost:3000/')
    }
    errorMsg.input = err
}

router.post('/', async (req, res) => {
    try {
        const { login, email, password } = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
    
        if (userData.some(user => user.name === login)) {
            setErrorMessage(res, 'login')
        }
        else if (userData.some(user => user.email === email)) {
            setErrorMessage(res, 'email')
        }
        else {
            userData.push({
                name: login,
                email,
                password: hashedPassword
            })
            setErrorMessage(res, null)
        }
    } catch {
        res.redirect('http://localhost:3000/register')
    }
})

router.get('/', (req, res) => {
    res.send({
        userData,
        errorMsg,
        })
})

module.exports = router