import * as Mongoose from "mongoose";

const userSchema = new Mongoose.Schema({
    name : String,
	gender : String,
	mail : String,
	bornDate : Date
}, { versionKey: false });

export const UserModel = Mongoose.model('User', userSchema);