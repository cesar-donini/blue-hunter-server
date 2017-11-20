import * as Mongoose from 'mongoose';
import * as bluebird from 'bluebird';
import { connection } from 'mongoose';
import * as env from '../config/environments'
import { userRepository } from '../user/repository';
import { IUser } from '../user/model';
import { IBook } from '../book/model';
import { bookRepository } from '../book/repository';
import * as fs from 'fs';
import * as path from 'path';

export const inicializeDB = () => {
  const db = Mongoose.connection;
  (<any>Mongoose).Promise = bluebird;

  db.on('error', (error) => {
      console.error("Cannot connect to MongoDB", error);
  });

  db.once('open', () => {
        console.info("Connected to MongoDB")

        db.db.listCollections().toArray(function(err, names) {
        if (err) {
            console.error(err);
            return;
        }

        console.info(`Collections names: ${names}`);

        if (names.length > 0) {
          return;
        }

        console.info("Initialize data");

        let file = fs.readFileSync(`${path.join(__dirname, '../../src/data')}/user.json`, 'utf8');
        const users: IUser[] = JSON.parse(file);
        users.forEach(u => userRepository.save(u));

        file = fs.readFileSync(`${path.join(__dirname, '../../src/data')}/book.json`, 'utf8');;
        const books: IBook[] = JSON.parse(file);
        books.forEach(b => bookRepository.save(b));

    });

  });

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