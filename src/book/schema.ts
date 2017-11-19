import * as Mongoose from "mongoose";

const bookSchema = new Mongoose.Schema({
    title : String,
    yearPublished: Number,
    description : String,
	publishing_house : String,
	author : String,
    price: String,
    rating: String
}, { versionKey: false });

export const BookModel = Mongoose.model('Book', bookSchema);