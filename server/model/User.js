const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        min: 3,
        max: 255,
    },
    email: {
        type: String,
        required: true,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024
    },
    points: {
        type: Number,
        default: 0
    },
    bets: [{
        id: Number,
        result1: {
            type: Number,
            default: null
        },
        result2: {
            type: Number,
            default: null
        },
    }]
})

module.exports = mongoose.model('User', userSchema);