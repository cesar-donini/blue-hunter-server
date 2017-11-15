import {Document} from 'mongoose';

export interface IPeople extends Document {
    _id : String;
	name : String;
	gender : String;
	mail : String;
	bornDate : Date;
}

export interface IUser extends IPeople {

}