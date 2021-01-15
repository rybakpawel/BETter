const mongo = require('mongodb')

const client = new mongo.MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true })

let database

module.exports = {
    connectMongo: () => {
        client.connect((err) => {
            if (err) console.log('błąd połączenia z mongo')
            else {
                console.log('połączenie udane!')
        
                database = client.db('better');
        
                // const teams = database.collection('teams')
        
                // teams.find({}).toArray((err, teams) => {
                //     if (err) console.log("Błędne zapytanie o kolekcję 'teams'")
                //     else {
                //         console.log(`Baza danych teams: ${teams}`)
                //     }
                // })
            }
        })
    },
    getDb: () => console.log(database)
    // getDb: () => console.log('no baza')
}

console.log(database)

// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://localhost:27017";

// let _db;

// module.exports = {

//   connectToServer: () => {
//     MongoClient.connect(url,  { useNewUrlParser: true }, (err, client) => {
//       _db  = client.db('better');
//     //   return callback(err);
//     } );
//   },

//   getDb: () => {
//     return _db;
//   }
// };