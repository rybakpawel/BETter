const router = require('express').Router();
const bcrypt = require('bcryptjs')
const loadDB = require('../connection');

let userData = []
let errorMsg = {
    msg: null,
    input: null,
}

const launchServer = async () => {
    const db = await loadDB();

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

            const usersCollection = await db.collection('users')
            usersCollection.find().toArray((usersErr, usersRes) => {
                if (usersErr) console.log("Błędne zapytanie o kolekcję 'users'")
                else {
                    const users = usersRes
                    if (users.some(user => user.name === login)) {
                        setErrorMessage(res, 'login')
                    }
                    else if (users.some(user => user.email === email)) {
                        setErrorMessage(res, 'email')
                    }
                    else {
                        usersCollection.insertOne({ 
                            name: login,
                            email,
                            password: hashedPassword,
                            points: 0
                        })
                        setErrorMessage(res, null)
                    }
                    userData = users
                }
            })
        } catch {
            res.redirect('http://localhost:3000/register')
        }
    })
}

launchServer();

router.get('/', (req, res) => {
    res.send({
        userData,
        errorMsg,
        })
})

module.exports = router