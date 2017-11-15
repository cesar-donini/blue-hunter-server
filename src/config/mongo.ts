import * as Mongoose from 'mongoose';
import * as bluebird from 'bluebird';
import { connection } from 'mongoose';
import * as env from '../config/environments'

export const inicializeDB = () => {
const db = Mongoose.connection;
  (<any>Mongoose).Promise = bluebird;

  db.on('error', (error) => {
      console.error("Cannot connect to MongoDB", error);
  });

  db.once('open', () => console.info("Connected to MongoDB"));

  const configMongo = {
    db : env.DB_NAME,
    user: env.DB_USER,
    pass: env.DB_PASSWORD,
    poolSize: 10,
    promiseLibrary: bluebird,
    useMongoClient: true
  }

  Mongoose.connect(env.DB_CONNECTION_STRING, configMongo);
}