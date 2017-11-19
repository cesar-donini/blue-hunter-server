import {Document} from 'mongoose';

export interface IUser extends Document {
	_id : String;
	fullName : String;
	gender : String;
	age: Number;
	mail : String;
	phone: String;
	username: String;
}
