import { Document } from 'mongoose';

export interface IBook extends Document {
    _id: String;
    title : String;
    yearPublished: Number;
    description : String;
	publishing_house : String;
	author : String;
    price: String;
    rating: String;
    image: String;
}
