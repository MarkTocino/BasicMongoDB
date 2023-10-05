// MongoClient allows us to connect to the database

const { MongoClient } = require('mongodb')

let dbConnection;

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb://Localhost:27017/Bookstore')
        .then((client) => {
            dbConnection = client.db()
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDb: () => dbConnection
}