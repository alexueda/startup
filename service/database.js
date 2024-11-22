const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);

let db;
(async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Successfully connected to MongoDB!');
    db = client.db('startup');
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
})();

const usersCollection = client.db('startup').collection('users');
const tasksCollection = client.db('startup').collection('tasks');

module.exports = { db, usersCollection, tasksCollection };
