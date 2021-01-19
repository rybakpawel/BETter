const express = require('express');
const loadDB = require('./connection');

const app = express();
const port = 3080;

// const launchServer = async () => {
    // const db = await loadDB();
    // await db.collection('teams').find().toArray((err, teams) => {
    //     if (err) console.log("Błędne zapytanie o kolekcję 'teams'")
    //     else {
    //         console.log(`Baza danych teams: ${teams}`)
    //     }
    // })

    const path = require('path')
    const bet = require('./bet')
    const table = require('./table')
    const competition = require('./competition')
    
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

    app.get('/competition', (req, res) => {
        res.send(competition)
    })
// }

// launchServer();
