import { Document } from 'mongoose';

export interface IBook extends Document {
    title : String;
    yearPublished: Number;
    description : String;
	publishing_house : String;
	author : String;
    price: String;
    rating: String;
}
