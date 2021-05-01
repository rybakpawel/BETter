const mongoose = require('mongoose');

const groupsSchema = new mongoose.Schema({
    matches: [{
        id: Number,
        group: Number,
        team1: Number,
        result1: {
            type: Number,
            default: -1
        },
        team2: Number,
        result2: {
            type: Number,
            default: -1
        },
        date: String,
        stadium: Number
    }],
    winner: {
        type: String,
        default: null
    },
    runnerup: {
        type: String,
        default: null
    }
}, { collection: 'groups'});

module.exports = mongoose.model('Groups', groupsSchema);