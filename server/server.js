const express = require('express');

const app = express();
const PORT = process.env.PORT || 3080;

const path = require('path')
const bet = require('./bet')
const table = require('./table')
const competition = require('./competition')
    
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
})

app.use(express.static(
    path.join(__dirname, '../src')
))

app.get('/', (req, res) => {
    res.json( {message: "BETter"})
})

app.get('/bet', (req, res) => {
    res.send(bet)
})

app.get('/table', (req, res) => {
    res.send({
        groups: table.groups,
        allGroups: table.allGroups
    })
})

app.get('/competition', (req, res) => {
    res.send(competition)
})

