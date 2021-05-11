const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path')
const cookieParser = require("cookie-parser")

const bet = require('./routes/bet')
const table = require('./routes/table')
const competition = require('./routes/competition')
const auth = require('./routes/auth');
const main = require('./routes/main');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3080
  
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
})

mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true, useNewUrlParser: true }, () => console.log('polaczona z mongoose'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '../src')))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())


app.use('/bet', bet)
app.use('/table', table)
app.use('/competition', competition)
app.use('/user', auth)
app.use('/main', main)

