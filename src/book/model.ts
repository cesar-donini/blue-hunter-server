import { Document } from 'mongoose';
import { IPeople } from "../user/model";
import { IAuthor } from '../author/model';

export interface IBook extends Document {
    title : String;
    description : String;
	publishing_house : String;
	author : IAuthor;
}