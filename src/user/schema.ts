import * as Mongoose from "mongoose";

const userSchema = new Mongoose.Schema({
    name : String,
	gender : String,
	mail : String,
	bornDate : Date
});

export const UserModel = Mongoose.model('User', userSchema);