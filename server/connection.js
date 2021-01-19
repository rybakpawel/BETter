const MongoClient = require('mongodb').MongoClient;

let db;

const loadDB = async () => {
    if (db) {
        return db;
    }
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true });
        db = client.db('better');
    } catch (err) {
        console.log('nie połączono z bazą danych..')
    }
    return db;
};

module.exports = loadDB;
