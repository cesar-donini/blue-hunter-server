import * as Mongoose from "mongoose";
import { authorSchema } from '../author/schema';

const bookSchema = new Mongoose.Schema({
    title : String,
    description : String,
	publishing_house : String,
	author : authorSchema
});

export const BookModel = Mongoose.model('Book', bookSchema);