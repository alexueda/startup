import { MongoClient } from 'mongodb';
import config from './dbConfig.json' assert { type: 'json' };

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

const usersCollection = () => db.collection('users');

export { usersCollection };