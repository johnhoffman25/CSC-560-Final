const mongoose = require('mongoose');

//Player Schema

const Player = mongoose.model('Player', {
    name: {
        type: String,
        required: true
    },
    jersey_number: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    ppg: {
        type: String,
        required: true
    },
    rpg: {
        type: String,
        required: true
    },
    apg: {
        type: String,
        required: true
    }
});

module.exports = { Player };