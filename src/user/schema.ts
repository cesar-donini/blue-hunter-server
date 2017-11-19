import * as Mongoose from "mongoose";

const userSchema = new Mongoose.Schema({
    fullName : String,
	gender : String,
	age: Number,
	email : String,
	phone: String,
	username: String
}, { versionKey: false });

export const UserModel = Mongoose.model('User', userSchema);