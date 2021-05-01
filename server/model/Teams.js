const mongoose = require('mongoose');

const teamsSchema = new mongoose.Schema({
    id: Number,
    name: String,
    points: {
        type: Number,
        default: 0
    },
    group: String,
    numberOfMatches: {
        type: Number,
        default: 0
    },
}, { collection: 'teams'});

module.exports = mongoose.model('Teams', teamsSchema);