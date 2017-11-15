import * as Mongoose from 'mongoose';
import * as bluebird from 'bluebird';
import { connection } from 'mongoose';

export const inicializeDB = () => {
const db = Mongoose.connection;
  (<any>Mongoose).Promise = bluebird;

  db.on('error', (error) => {
      console.error("Cannot connect to MongoDB", error);
  });

  db.once('open', () => console.info("Connected to MongoDB"));

  const configMongo = {
    db : 'blue-hunter',
    server: 'localhost:1888',
    // user: 'donini',
    // pass: 'donini',
    poolSize: 10,
    promiseLibrary: bluebird,
    useMongoClient: true
  }

  Mongoose.connect("mongodb://localhost:1888/blue-hunter", configMongo);
}