const express = require('express');
const path = require('path')

const main = require('./routes/main')
const bet = require('./routes/bet')
const table = require('./routes/table')
const competition = require('./routes/competition')
const register = require('./routes/register')
const login = require('./routes/login');

const app = express();
const PORT = process.env.PORT || 3080
  
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
})

app.use(express.static(path.join(__dirname, '../src')))
app.use(express.urlencoded({ extended: false }))

app.use('/', main)
app.use('/bet', bet)
app.use('/table', table)
app.use('/competition', competition)
app.use('/register', register)
app.use('/login', login)

