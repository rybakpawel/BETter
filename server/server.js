const express = require('express');
const path = require('path')
const bet = require('./bet')
const table = require('./table')

const app = express();
const port = 3080;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`);
})

app.use(express.static(
    path.join(__dirname, '../src')
))

app.get('/bet', (req, res) => {
    res.send(bet)
})

app.get('/table', (req, res) => {
    res.send({
        groups: table.groups,
        allGroups: table.allGroups
    })
})