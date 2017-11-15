import { IAuthor } from './model';
import { AuthorModel } from './schema';

class AuthorRepository {

    public async save(author: IAuthor) : Promise<IAuthor> {
        author = <IAuthor> await new AuthorModel({
            name : author.name,
            gender : author.gender,
            mail : author.mail,
            bornDate : author.bornDate
        }).save();
        return author;
    }

}

export const authorRepository = new AuthorRepository();