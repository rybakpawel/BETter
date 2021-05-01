const mongoose = require('mongoose');

const stadiumsSchema = new mongoose.Schema({
    id: Number,
    city: String,
    name: String,
    capacity: Number
}, { collection: 'stadiums'});

module.exports = mongoose.model('Stadiums', stadiumsSchema);