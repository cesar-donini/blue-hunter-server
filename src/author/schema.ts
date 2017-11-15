import * as Mongoose from "mongoose";

export const authorSchema = new Mongoose.Schema({
    name : String,
	gender : String,
	mail : String,
	bornDate : Date
});

export const AuthorModel = Mongoose.model('Author', authorSchema);